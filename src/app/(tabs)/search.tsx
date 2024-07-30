import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, TextInput } from 'react-native'
import { Text, View } from '@/src/components/Themed'
import TrackListItem from '@/src/components/TrackListItem'
import { tracks } from '@/assets/data/tracks'
import { Track } from '@/src/types'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

export default function SearchScreen() {
  const [query, setQuery] = useState('')

  const renderItem = ({ item }: { item: Track }) => <TrackListItem track={item} />

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-row items-center p-2'>
        {/* Header */}
        <Ionicons name='search' size={20} color='gray' />
        <TextInput
          value={query}
          onChangeText={setQuery}
          className='flex-1 bg-zinc-900 p-1.5 mx-2 rounded text-white'
          placeholder='Que voulez-vous écouter ?'
        />
        <Text onPress={() => setQuery('')}>Annuler</Text>
      </View>
      <FlatList data={tracks} renderItem={renderItem} />
    </SafeAreaView>
  )
}
