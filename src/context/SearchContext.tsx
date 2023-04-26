import React, {createContext, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

type SearchContextValueType = {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};

interface Props {
  children: JSX.Element;
}
const SearchContextProvider = ({children}: Props) => {
  const SearchContext = createContext<SearchContextValueType | null>(null);
  const [keyword, setKeyword] = React.useState('');
  return (
    <SearchContext.Provider value={{keyword, setKeyword}}>
      {children}
    </SearchContext.Provider>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default SearchContextProvider;
