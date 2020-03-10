import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, RegisterScreen} from '../screens/index';

interface AuthRoutesProps {}

const Stack = createStackNavigator();

export const AuthRoutes: React.FC<AuthRoutesProps> = ({}) => {
  return (
    <Stack.Navigator
      // screenOptions={{header: () => null}}
      initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: 'Sign In',
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerTitle: 'Sign Up',
        }}
      />
    </Stack.Navigator>
  );
};
