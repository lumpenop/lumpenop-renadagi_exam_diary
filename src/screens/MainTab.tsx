import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import CalendarScreen from 'src/screens/CalendarScreen';
import FeedsScreen from 'src/screens/FeedsScreen';
import SearchScreen from 'src/screens/SearchScreen';

const Tab = createBottomTabNavigator();
const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={FeedsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default MainTab;
