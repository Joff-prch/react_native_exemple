import { Image, StyleSheet } from 'react-native'
import { Text, View } from '../../components/Themed'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect, useState } from 'react'
import { Audio, AVPlaybackStatus } from 'expo-av'
import { Sound } from 'expo-av/build/Audio'

export default function Player() {
  const [sound, setSound] = useState<Sound>()
  const [isPlaying, setIsPlaying] = useState(false)
  const { track } = useSelector((state: RootState) => state.player)

  useEffect(() => {
    playTrack()
  }, [track])

  useEffect(() => {
    sound ? () => sound.unloadAsync() : undefined
  }, [sound])

  const playTrack = async () => {
    if (sound) await sound.unloadAsync()
    if (!track?.preview_url) return

    const { sound: newSound } = await Audio.Sound.createAsync({ uri: track.preview_url })
    setSound(newSound)
    newSound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
    await newSound.playAsync()
  }

  const onPlayPause = async () => {
    if (!sound) return
    if (isPlaying) await sound.pauseAsync()
    else await sound.playAsync()
  }

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (!status.isLoaded) return
    setIsPlaying(status.isPlaying)
  }

  if (!track) return
  const image = track.album.images?.[0]
  return (
    <View style={styles.container}>
      <View className='flex-1 flex-row items-center rounded p-1 pr-4 bg-player'>
        {image && <Image source={{ uri: image.url }} className='h-full mr-2 rounded aspect-square' />}

        <View className='flex-1 bg-transparent'>
          <Text>{track.name}</Text>
          <Text className='text-slate-300'>{track.artists[0]?.name}</Text>
        </View>

        <Ionicons name={'heart-outline'} size={20} color={'white'} style={{ marginHorizontal: 10 }} />
        <Ionicons
          onPress={onPlayPause}
          disabled={!track?.preview_url}
          name={track?.preview_url && isPlaying ? 'pause' : 'play'}
          size={22}
          color={track?.preview_url ? 'white' : 'gray'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    top: -75,
    height: 75,
    padding: 10,
  },
})
