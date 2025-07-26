import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// иконки из Expo vector icons
import MainScreen from '../screens/MainScreen/MainScreen';
import IconMain from '../../assets/icons/IconMain';
import CalendarScreen from '../screens/CalendarScreen/CalendarScreen';
import IconCalendar from '../../assets/icons/IconCalendar';
import ChatMenuScreen from '../screens/ChatMenuScreen/ChatMenuScreen';
import IconChatMenu from '../../assets/icons/IconChatMenu';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import IconProfile from '../../assets/icons/IconProfile';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4285F4',
        tabBarInactiveTintColor: '#767982',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconMain size={36} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconCalendar size={36} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatMenu"
        component={ChatMenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconChatMenu size={36} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconProfile size={36} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
