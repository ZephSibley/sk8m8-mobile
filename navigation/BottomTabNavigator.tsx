import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import PeopleScreen from '../screens/PeopleScreen';
import { BottomTabParamList, HomeScreenParamList, MapScreenParamList, PeopleScreenParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Trickspot"
        component={MapScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Skaters"
        component={PeopleScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeScreenStack = createStackNavigator<HomeScreenParamList>();

function HomeScreenNavigator() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeScreenStack.Navigator>
  );
}

const MapScreenStack = createStackNavigator<MapScreenParamList>();

function MapScreenNavigator() {
  return (
    <MapScreenStack.Navigator>
      <MapScreenStack.Screen
        name="Trickspot"
        component={MapScreen}
        options={{ headerTitle: 'Make Your Mark' }}
      />
    </MapScreenStack.Navigator>
  );
}

const PeopleScreenStack = createStackNavigator<PeopleScreenParamList>();

function PeopleScreenNavigator() {
  return (
    <PeopleScreenStack.Navigator>
      <PeopleScreenStack.Screen
        name="Skaters"
        component={PeopleScreen}
        options={{ headerTitle: 'Meet People' }}
      />
    </PeopleScreenStack.Navigator>
  );
}

