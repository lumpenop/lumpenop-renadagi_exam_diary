import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import CalendarScreen from 'src/screens/CalendarScreen';
import FeedsScreen from 'src/screens/FeedsScreen';
import SearchScreen from 'src/screens/SearchScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#009688',
      }}>
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({size, color}) => {
            return <Icon name="event" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({size, color}) => {
            return <Icon name="search" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({size, color}) => {
            return <Icon name="view-stream" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default MainTab;
