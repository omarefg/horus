import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { getSpacing } from '../styles/spacing';
import { text } from '../styles/palette';

const BurgerButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: getSpacing(3),
    height: getSpacing(3),
    padding: getSpacing(0.4),
    justifyContent: 'space-evenly',
    marginLeft: getSpacing(),
  },

  line: {
    width: '100%',
    height: 2,
    backgroundColor: text,
  },
});

BurgerButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BurgerButton;
