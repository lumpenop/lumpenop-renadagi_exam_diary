import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FloatingWriteButton from 'src/components/FloatingWriteButton';

const FeedsScreen = () => {
  return (
    <View style={styles.block}>
      <Text>hi</Text>
      <FloatingWriteButton />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1},
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});
export default FeedsScreen;
