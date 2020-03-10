import React from 'react';
import {StyleSheet, View} from 'react-native';

interface CenterProps {}

const Center: React.FC<CenterProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Center;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
