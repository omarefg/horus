import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import UserStack from './stacks/UserStack';
import HomeStack from './stacks/HomeStack';
import { home, usersList } from './config/paths';

import store from './store';
import * as palette from './styles/palette';

const Drawer = createDrawerNavigator();

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...palette,
    primary: palette.text,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={myTheme}>
        <Drawer.Navigator initialRouteName={home}>
          <Drawer.Screen name={home} component={HomeStack} />
          <Drawer.Screen name={usersList} component={UserStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
