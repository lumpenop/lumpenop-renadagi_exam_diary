import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import EmptySearchResult from 'src/components/EmptySearchResult';
import FeedList from 'src/components/FeedList';
import LogContext from 'src/context/LogContext';
import SearchContext from 'src/context/SearchContext';

const SearchScreen = () => {
  const searchContext = useContext(SearchContext);
  const logContext = useContext(LogContext);
  if (!searchContext || !logContext) {
    return null;
  }
  const {keyword} = searchContext;
  const {logs} = logContext;
  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword)),
        );
  if (keyword === '') {
    return <EmptySearchResult type="EMPTY_KEYWORD" />;
  }
  if (filtered.length === 0) {
    return <EmptySearchResult type="NOT_FOUND" />;
  }
  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default SearchScreen;
