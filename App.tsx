/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StyleSheet} from 'react-native';
import SearchContextProvider from 'src/context/SearchContext';
import RootStack from 'src/screens/RootStack';
import {LogContextProvider} from 'src/context/LogContext';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  block: {},
});

export default App;
