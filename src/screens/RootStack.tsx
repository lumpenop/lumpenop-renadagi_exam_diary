import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from 'src/screens/MainTab';
import WriteScreen from 'src/screens/WriteScreen';

type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};

const RootStack = () => {
  const Stack = createNativeStackNavigator();
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
