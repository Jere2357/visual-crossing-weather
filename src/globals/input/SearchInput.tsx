import React from "react";
import { SearchBar } from "react-native-elements";

const SearchInput = ({ value, onSearch }: any) => (
  <SearchBar placeholder="Type a city here..." onChangeText={onSearch} value={value} />
);

export default SearchInput;
