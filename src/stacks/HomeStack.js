import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import Home from '../screens/Home';
import BurgerButton from '../components/BurgerButton';
import HeaderLogo from '../components/HeaderLogo';

import { home } from '../config/paths';

const Stack = createStackNavigator();

const HomeStack = () => {
  const navigation = useNavigation();

  const handleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <Stack.Navigator initialRouteName={home}>
      <Stack.Screen
        options={{
          headerLeft: () => <BurgerButton onPress={handleDrawer} />,
          headerRight: () => <HeaderLogo />,
          title: 'Inicio',
        }}
        name={home}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
