import React from 'react';
import { Tabs } from 'expo-router';
// COMPONENTS
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/TabBarBackground/TabBarBackground';
// HELPERS
import { DIMENSION_Y } from '@/helpers/Dimensions';

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ tabBarStyle: { height: DIMENSION_Y._84, borderTopWidth: 0 }, tabBarBackground: TabBarBackground }}>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
				}}
			/>

			<Tabs.Screen
				name="explore"
				options={{
					title: 'Explore',
					tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
				}}
			/>
		</Tabs>
	);
}
