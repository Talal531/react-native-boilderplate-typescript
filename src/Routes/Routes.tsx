import React, {useState, useContext, useEffect} from 'react';
import {AsyncStorage, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {AuthRoutes} from './AuthRoutes';
import {AuthContext} from '../context/AuthProvider';
import Center from '../components/Center';
import {AppTabs} from './AppTabs';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  const {user, login} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          // decode it
          login();
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="small" />
      </Center>
    );
  }
  return (
    <NavigationContainer>
      {user ? <AuthRoutes /> : <AppTabs />}
    </NavigationContainer>
  );
};
