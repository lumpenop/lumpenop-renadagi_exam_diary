import {useNavigation} from '@react-navigation/native';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import React from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';
import TransparentCircleButton from 'src/components/TransparentCircleButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type ModeType = 'date' | 'time' | 'datetime' | undefined;
type InitStateType = {
  mode: ModeType;
  visible: boolean;
};
const initState: InitStateType = {mode: 'date', visible: false};
type ActionType = {
  type: string;
  mode?: ModeType;
};
const reducer = (state: InitStateType, action: ActionType): InitStateType => {
  const {mode} = action;
  switch (action.type) {
    case 'open':
      return {
        mode: mode,
        visible: true,
      };
    case 'close':
      return {
        ...state,
        visible: false,
      };

    default:
      throw new Error('unhandled action type');
  }
};

interface Props {
  onSave: () => void;
  isEditing: boolean;
  onAskRemove: () => void;
  date: Date;
  onChangeDate: React.Dispatch<React.SetStateAction<Date>>;
}
function WriteHeader({
  onSave,
  onAskRemove,
  isEditing,
  date,
  onChangeDate,
}: Props) {
  // const [mode, setMode] = React.useState<ModeType>('date');
  // const [visible, setVisible] = React.useState(false);

  const [state, dispatch] = React.useReducer(reducer, initState);
  const open = (mode: ModeType) => dispatch({type: 'open', mode});
  const close = () => dispatch({type: 'close'});

  const onConfirm = (selectedDate: Date) => {
    close();
    onChangeDate(selectedDate);
  };

  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransparentCircleButton
          onPress={onGoBack}
          name="arrow-back"
          color="#424242"
          hasMarginRight={false}
        />
      </View>
      <View style={styles.buttons}>
        {isEditing && (
          <TransparentCircleButton
            onPress={onAskRemove}
            name="delete-forever"
            color="#424242"
            hasMarginRight
          />
        )}
        <TransparentCircleButton
          onPress={onSave}
          name="check"
          color="#009688"
          hasMarginRight={false}
        />
      </View>
      <View style={styles.center}>
        <Pressable onPress={() => open('date')}>
          <Text>{format(new Date(date), 'PPP', {locale: ko})}</Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable onPress={() => open('time')}>
          <Text>{format(new Date(date), 'p', {locale: ko})}</Text>
        </Pressable>
      </View>
      <DateTimePickerModal
        isVisible={state.visible}
        mode={state.mode}
        onConfirm={onConfirm}
        onCancel={close}
        date={date}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    flexDirection: 'row',
  },
  separator: {
    width: 8,
  },
});

export default WriteHeader;
