import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import FeedListItem from 'src/components/FeedListItem';
import {LogType} from 'src/context/LogContext';
import FlatList = Animated.FlatList;

interface Props {
  logs: LogType[];
  onScrolledToBottom?: (isBottom: boolean) => void;
  ListHeaderComponent: JSX.Element;
}
const FeedList = ({logs, onScrolledToBottom, ListHeaderComponent}: Props) => {
  type RenderItemType = {
    item: LogType;
  };
  const renderItem = ({item}: RenderItemType) => {
    return <FeedListItem log={item} />;
  };

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!onScrolledToBottom) {
      return;
    }

    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (distanceFromBottom < 72) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
  };
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={renderItem}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

const styles = StyleSheet.create({
  block: {flex: 1},
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

export default FeedList;
