import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import {colors, spacing} from '../../constants';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
function SendMoney({navigation}: IProps) {
  return (
    <View style={styles.container}>
      <Text>Send money</Text>
      <Text>Send money</Text>
      <Text>Send money</Text>
      <Text>Send money</Text>
      <Text>Send money</Text>
      <Text>Send money</Text>
      <Text>Send money</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? spacing.large : spacing.xxsmall,
  },
});

export default SendMoney;
