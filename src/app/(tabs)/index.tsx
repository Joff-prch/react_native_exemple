import { StyleSheet, View, Text } from 'react-native'

import EditScreenInfo from '@/src/components/EditScreenInfo'

export default function TabOneScreen() {
  return (
    <View className='bg-red-200 flex justify-center align-bottom'>
      <Text className='text-blue-300'>Tab One</Text>
      <View style={styles.separator} />
      <EditScreenInfo path='app/(tabs)/index.tsx' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})