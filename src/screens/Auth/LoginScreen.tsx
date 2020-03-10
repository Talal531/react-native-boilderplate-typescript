import React from 'react';
import {Text, Button} from 'react-native';
import Center from '../../components/Center';

interface LoginScreenProps {
  navigation?: any;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <Center>
      <Text>Login Screen</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
    </Center>
  );
};
