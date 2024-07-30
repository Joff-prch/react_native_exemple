import { FlatList } from 'react-native'
import { View } from '@/src/components/Themed'
import { tracks } from '@/assets/data/tracks'
import TrackListItem from '@/src/components/TrackListItem'
import { Track } from '@/src/types'

export default function FavoritesScreen() {
  const renderItem = ({ item }: { item: Track }) => <TrackListItem track={item} />

  return (
    <View className='flex-1'>
      <FlatList data={tracks} renderItem={renderItem} />
    </View>
  )
}
