import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link, Tabs } from 'expo-router'
import { Pressable } from 'react-native'
import { BottomTabBar } from '@react-navigation/bottom-tabs'

import Colors from '@/src/constants/Colors'
import { useColorScheme } from '@/src/components/useColorScheme'
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue'
import { View } from '@/src/components/Themed'
import Player from '@/src/features/player/Player'

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      tabBar={(props) => (
        <View>
          <Player />
          <BottomTabBar {...props} />
        </View>
      )}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name='information-circle'
                    size={25}
                    color={Colors[colorScheme ?? 'light'].tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Rechercher',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name='search' color={color} />,
        }}
      />
      <Tabs.Screen
        name='favorites'
        options={{
          title: 'Favoris',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name='heart' color={color} />,
        }}
      />
    </Tabs>
  )
}
