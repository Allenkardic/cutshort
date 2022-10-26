import React, {useState} from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import {colors, spacing} from '../../constants';
import {H4} from '../../components';
import {TransactionRequest} from '../../partials';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
function RequestMoney({navigation}: IProps) {
  const [data, setData] = useState([
    {
      id: 1,
      phone: '(+234) 905 1694 275',
      name: 'Adedoyin Leke',
      isSelected: false,
    },
    {
      id: 2,
      phone: '(+234) 905 1694 275',
      name: 'Adelaide Uti (son)',
      isSelected: false,
    },
    {
      id: 3,
      phone: '(+234) 905 1694 275',
      name: 'Adolph colla',
      isSelected: true,
    },
    {
      id: 4,
      phone: '(+234) 905 1694 275',
      name: 'Adeleke Adeyanju',
      isSelected: false,
    },
    {
      id: 5,
      phone: '(+234) 905 1694 275',
      name: 'Allen Kardic ja',
      isSelected: false,
    },
    {
      id: 6,
      phone: '(+234) 905 1694 275',
      name: 'Aduni Wale',
      isSelected: false,
    },
  ]);
  return (
    <View style={styles.container}>
      <H4 color={'white'}>Request Money</H4>

      <TransactionRequest
        // title={'Adedoyin Leke'}
        // isSelected={false}
        // onPress={() => {}}
        data={data}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? spacing.large : spacing.xxsmall,
  },
});

export default RequestMoney;
