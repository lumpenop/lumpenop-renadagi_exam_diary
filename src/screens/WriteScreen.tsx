import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import WriteEditor from 'src/components/WriteEditor';
import WriteHeader from 'src/components/WriteHeader';
import LogContext from 'src/context/LogContext';

interface Props {
  route: RouteProp<ParamListBase, string>;
}

const WriteScreen = ({route}: Props) => {
  const log = route.params?.log;
  const [title, setTitle] = React.useState(log?.title ?? '');
  const [body, setBody] = React.useState(log?.body ?? '');
  const navigation = useNavigation();
  const logContext = useContext(LogContext);
  if (!logContext) {
    return null;
  }

  const {onCreate, onModify, onRemove} = logContext;

  const onAskRemove = () => {
    Alert.alert(
      '삭제',
      '정말 삭제?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: () => {
            onRemove(log?.id);
            navigation.goBack();
          },
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };

  const onSave = () => {
    if (log) {
      onModify({
        id: log.id,
        date: log.date,
        title,
        body,
      });
    } else {
      onCreate &&
        onCreate({
          title,
          body,
          date: new Date().toISOString(),
        });
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!!log}
        />
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
