import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import FeedList from 'src/components/FeedList';
import FloatingWriteButton from 'src/components/FloatingWriteButton';
import LogContext from 'src/context/LogContext';

const FeedsScreen = () => {
  const [hidden, setHidden] = React.useState(false);
  const logContext = useContext(LogContext);
  if (!logContext) {
    return null;
  }
  const {logs} = logContext;
  console.log(JSON.stringify(logs, null, 2));
  const onScrolledToBottom = (isBottom: boolean) => {
    setHidden(isBottom);
  };

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1},
});
export default FeedsScreen;
