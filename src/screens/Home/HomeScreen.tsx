import React from 'react';
import Center from '../../components/Center';
import {Text} from 'react-native';

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  return (
    <Center>
      <Text>Home Screen</Text>
    </Center>
  );
};
