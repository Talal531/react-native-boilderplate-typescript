import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {SearchScreen} from '../screens';
import {AppParamList} from '../types/AppParamList';
import {HomeStack} from './HomeStack';

interface AppTabsProps {}

const Tab = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'home';

          if (route.name === 'Home') {
            return <AntDesign name={'home'} size={size} color={color} />;
          } else if (route.name === 'Search') {
            return <EvilIcons name={'search'} size={size} color={color} />;
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};
