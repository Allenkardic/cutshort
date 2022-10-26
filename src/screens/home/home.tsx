import React, {useRef, useCallback, useMemo, useState} from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import {RNBottomSheet, Button, H2, H3, H6} from '../../components';
import {colors, currencyFormat, spacing, HP} from '../../constants';
import {TransactionCard, TransactionSheetHeader} from '../../partials';
import {
  BottomSheetFlatList,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import stack from '../../constants/routes';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
function Home({navigation}: IProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const snapPoints = useMemo(() => ['25%', '60%'], []);

  const {sendMoney, requestMoney} = stack.stack;
  const [data, setData] = useState([
    {
      id: 1,
      status: 'Received',
      name: 'Adeboye Usman',
      amount: 200000,
    },
    {
      id: 2,
      status: 'Failed',
      name: 'Mercy Popoola',
      amount: 110000,
    },
    {
      id: 3,
      status: 'Sent',
      name: 'Onome Adetayo',
      amount: 10000,
    },
    {
      id: 4,
      status: 'Received',
      name: 'Kingsley Abiodun',
      amount: 200000,
    },
  ]);

  // render
  const renderItem = useCallback(
    ({item}: any) => (
      <TransactionCard
        status={item.status}
        user={item.name}
        index={item.id}
        amount={item.amount}
      />
    ),
    [],
  );
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <H6>Your current balance is</H6>
        <H2 style={styles.balance} semiBold>
          {currencyFormat(200000)}
        </H2>
        <View style={styles.btnContent}>
          <View style={styles.btnContainer}>
            <Button
              onPress={() => navigation.navigate(requestMoney)}
              text="Request Money"
              alternate
            />
          </View>
          <View style={styles.btnContainer}>
            <Button onPress={() => {}} text="Request Money" alternate />
          </View>
        </View>

        <Button
          text={'Trasanctions'}
          // onPress={() => bottomSheetRef.current?.open()}
          onPress={() => bottomSheetRef.current?.present()}
          short
          style={styles.transaction}
        />
        {/* <TransactionCard
        status="Sent"
        user={'Allen Kardic'}
        index={1}
        amount={200000}
      /> */}

        <RNBottomSheet
          handleSheetChanges={handleSheetChanges}
          snapPoints={snapPoints}
          bottomSheetRef={bottomSheetRef}>
          <TransactionSheetHeader title="All Transactions" />
          <BottomSheetFlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            renderItem={renderItem}
          />
        </RNBottomSheet>
      </View>
    </BottomSheetModalProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? spacing.large : spacing.xxsmall,
    paddingHorizontal: spacing.xxsmall,
  },
  balance: {
    marginTop: spacing.xxsmall,
    marginBottom: spacing.small,
  },
  btnContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnContainer: {
    width: '48%',
  },
  transaction: {
    marginTop: spacing.xxlarge,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});

export default Home;
