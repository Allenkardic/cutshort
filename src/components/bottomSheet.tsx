import React, {ReactNode} from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {colors, HP, spacing, WP} from '../constants';
export interface RBSheetProps {
  bottomSheetRef: any;
  children?: ReactNode;
  handleSheetChanges: any;
  snapPoints: any;
}

export default function RNBottomSheet(props: RBSheetProps) {
  const {children, bottomSheetRef, handleSheetChanges, snapPoints} = props;

  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <BottomSheetModal
      handleStyle={styles.handleStyle}
      backgroundStyle={styles.backgroundStyle}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <View style={styles.container}>{children}</View>
    </BottomSheetModal>
  );
}

const useStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.blueVariantOne,
      paddingTop: spacing.xsmall,
    },
    handleStyle: {
      backgroundColor: colors.blueVariantOne,
      borderTopLeftRadius: HP('20%'),
      borderTopRightRadius: HP('20%'),
    },
    backgroundStyle: {
      backgroundColor: colors.blueVariantOne,
      borderTopLeftRadius: HP('20%'),
      borderTopRightRadius: HP('20%'),
    },
    handleIndicatorStyle: {
      width: WP('15%'),
      backgroundColor: colors.purple,
      height: 6,
    },
  });
