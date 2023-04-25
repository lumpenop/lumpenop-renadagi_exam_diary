import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import WriteEditor from 'src/components/WriteEditor';
import WriteHeader from 'src/components/WriteHeader';
import LogContext from 'src/context/LogContext';

const WriteScreen = () => {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const navigation = useNavigation();
  const logContext = useContext(LogContext);
  if (!logContext) {
    return null;
  }

  const {onCreate} = logContext;

  const onSave = () => {
    onCreate &&
      onCreate({
        title,
        body,
        date: new Date().toISOString(),
      });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: 'white'},
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;
