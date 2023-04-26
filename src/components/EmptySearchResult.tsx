import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const MESSAGES = {
  NOT_FOUND: '검색 결과 없음',
  EMPTY_KEYWORD: '검색어를 입력하세요',
};

interface Props {
  type: 'NOT_FOUND' | 'EMPTY_KEYWORD';
}

const EmptySearchResult = ({type}: Props) => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{MESSAGES[type]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#9e9e9e',
    fontSize: 16,
  },
});

export default EmptySearchResult;
