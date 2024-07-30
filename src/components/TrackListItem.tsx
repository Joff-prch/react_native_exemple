import { Image, TouchableOpacity } from 'react-native'
import { Track } from '../types'
import { View, Text } from './Themed'
import { useDispatch } from 'react-redux'
import { setTrack } from '../redux/slices/player.slice'

type TrackListItemProps = {
  track: Track
}

export default function TrackListItem({ track }: TrackListItemProps) {
  const dispatch = useDispatch()

  const onPressTrack = () => dispatch(setTrack(track))

  return (
    <TouchableOpacity className='my-1 p-1 flex-row items-center' activeOpacity={0.7} onPress={onPressTrack}>
      <Image className=' w-12 h-12' source={{ uri: track.album.images[0]?.url }} />
      <View className='ml-2 mr-1 flex-grow flex-shrink'>
        <Text className='text-white font-bold' numberOfLines={2}>
          {track.name}
        </Text>
        <Text className='text-gray-400' numberOfLines={1}>
          {track.artists[0]?.name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
