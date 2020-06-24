import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import UserDetails from '../screens/UserDetails';
import UsersList from '../screens/UsersList';
import BurgerButton from '../components/BurgerButton';
import HeaderLogo from '../components/HeaderLogo';

import { usersList, userDetails } from '../config/paths';

const Stack = createStackNavigator();

const UserStack = () => {
  const navigation = useNavigation();

  const handleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <Stack.Navigator initialRouteName={usersList}>
      <Stack.Screen
        options={{
          headerLeft: () => <BurgerButton onPress={handleDrawer} />,
          headerRight: () => <HeaderLogo />,
          title: 'Usuarios',
        }}
        name={usersList}
        component={UsersList}
      />
      <Stack.Screen name={userDetails} component={UserDetails} />
    </Stack.Navigator>
  );
};

export default UserStack;
