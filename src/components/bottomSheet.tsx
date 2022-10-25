import React, {Fragment, ReactNode} from 'react';

import {useTheme} from '@react-navigation/native';
import {StyleSheet, View, ViewStyle} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import {colors, HP, spacing} from '../constants';

import {H3} from './text';

export interface RBSheetProps {
  titleText?: string;
  refRBSheet: any;
  children?: ReactNode;
  animationType?: 'none' | 'fade' | 'slide';
  minClosingHeight?: number;
  duration?: number;
  closeOnSwipeDown?: boolean;
  closeOnPressMask?: boolean;
  height?: number;
  onClose?: () => void;
  customStyles?: {
    wrapper?: ViewStyle;
    container?: ViewStyle;
  };
}

export default function BottomSheet(props: RBSheetProps) {
  const {
    children,
    refRBSheet,
    closeOnPressMask,
    closeOnSwipeDown = false,
    titleText,
    height,
  } = props;

  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={closeOnSwipeDown}
      closeOnPressMask={closeOnPressMask}
      customStyles={{
        container: {
          height: height ? height : 'auto',
          opacity: 1,
          borderTopLeftRadius: HP('3%'),
          borderTopRightRadius: HP('3%'),
          backgroundColor: theme.colors.background,
        },
        draggableIcon: {
          opacity: 1,
          width: '10%',
          backgroundColor: colors.tertiary,
          zIndex: 3,
        },
      }}
      dragFromTopOnly={closeOnSwipeDown}>
      {titleText && (
        <View style={styles.titleStyle}>
          <H3 bold>{titleText}</H3>
        </View>
      )}

      <View style={styles.scrollStyle}>{children}</View>
    </RBSheet>
  );
}

const useStyles = (theme: any) =>
  StyleSheet.create({
    titleStyle: {
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: spacing.small,
      marginBottom: spacing.xsmall,
    },
    scrollStyle: {
      paddingBottom: spacing.xlarge,
      backgroundColor: colors.secondary,
    },
  });
