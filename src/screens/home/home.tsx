import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import {colors, spacing} from '../../constants';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
function Home({navigation}: IProps) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? spacing.large : spacing.xxsmall,
  },
});

export default Home;
