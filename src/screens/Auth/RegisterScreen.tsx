import React from 'react';
import Center from '../../components/Center';
import {Text, Button} from 'react-native';

interface RegisterScreenProps {
  navigation?: any;
}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  return (
    <Center>
      <Text>Register Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </Center>
  );
};
