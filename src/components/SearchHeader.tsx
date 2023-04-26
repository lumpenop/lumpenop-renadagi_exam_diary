import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  useWindowDimensions,
  TextInput,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchContext from 'src/context/SearchContext';

const SearchHeader = () => {
  const {width} = useWindowDimensions();
  const searchContext = useContext(SearchContext);
  if (!searchContext) {
    return null;
  }
  const {keyword, setKeyword} = searchContext;
  return (
    <View style={[styles.block, {width: width - 32}]}>
      <TextInput
        style={styles.input}
        placeholder="검색어 입력"
        autoFocus
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}
        onPress={() => setKeyword('')}>
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {flexDirection: 'row', alignItems: 'center'},
  input: {flex: 1},
  button: {marginLeft: 8},
});

export default SearchHeader;
