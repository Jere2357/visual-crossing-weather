import React, {ReactNode} from 'react';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

import styles from './styles/CardStyles';

interface ContainerProps {
  children?: ReactNode;
  style: Object;
}

const CardItem = ({children, style}: ContainerProps) => (
  <Card containerStyle={[styles.container, style]}>{children}</Card>
);

export default CardItem;