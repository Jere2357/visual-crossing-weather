import React from "react";
import { Header } from "react-native-elements";

import styles from './styles/HeaderStyles';

const CustomHeader = () => (
  <Header
    placement="left"
    centerComponent={{
      text: "Visual Crossing Weather",
      style: styles.headerText,
    }}
  />
);

export default CustomHeader;
