import React, {useContext} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import LogContext from 'src/context/LogContext';

interface LogConTextValue {
  text: string;
  setContextText: (value: string) => void;
}

const FeedsScreen = () => {
  const context = useContext<LogConTextValue | null>(LogContext);

  if (!context) {
    return null;
  }
  const {text, setContextText} = context;

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setContextText}
        placeholder={'text 입력'}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});
export default FeedsScreen;
