import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens';

interface HomeStackProps {}

const Stack = createStackNavigator();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
