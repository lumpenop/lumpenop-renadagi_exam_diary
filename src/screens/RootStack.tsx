import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackNavigatorProps} from 'react-native-screens/lib/typescript/native-stack/types';
import MainTab from 'src/screens/MainTab';
import WriteScreen from 'src/screens/WriteScreen';

export type MainTabParamList = {
  Feeds: undefined;
  Calendar: undefined;
  Search: undefined;
};
export type RootStackParamList = {
  MainTab: MainTabParamList;
  Write: undefined;
};

const RootStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'MainTab'}
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default RootStack;
