import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { getSpacing } from '../styles/spacing';

const HeaderLogo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: getSpacing(),
  },
});

export default HeaderLogo;
