import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

interface Props {
  title: string;
  body: string;
  onChangeTitle: React.Dispatch<React.SetStateAction<string>>;
  onChangeBody: React.Dispatch<React.SetStateAction<string>>;
}

const WriteEditor = ({title, body, onChangeTitle, onChangeBody}: Props) => {
  const bodyRef = React.useRef<TextInput>(null);
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목 입력"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          bodyRef.current?.focus();
        }}
      />
      <TextInput
        placeholder="오늘 기록"
        style={styles.bodyInput}
        onChangeText={onChangeBody}
        value={body}
        multiline
        ref={bodyRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1, padding: 16},
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});

export default WriteEditor;
