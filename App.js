import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import config from './config';
import { Feather } from '@expo/vector-icons';
import theme from './theme';
import Doviz from './screens/Doviz';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
         tabBarActiveTintColor: theme.style.tabNavActiveColor,
         tabBarInactiveTintColor: theme.style.tabNavInActiveColor,
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          headerTitle:config.appName,
          tabBarLabel:'Haberler',
          tabBarIcon:({ focused, color, size }) => {
            return <Feather name="home" size={theme.style.tabNavSize} color={color} />
          }
        }} />
          <Tab.Screen name="Doviz" component={Doviz} options={{
          headerTitle:config.appName,
          tabBarLabel:'Döviz',
          tabBarIcon:({ focused, color, size }) => {
            return <Feather name="dollar-sign" size={theme.style.tabNavSize} color={color} />
          }
        }} />
        <Tab.Screen name="Settings" component={Home} options={{
          headerTitle:config.appName,
          tabBarLabel:'Ayarlar',
          tabBarIcon:({ focused, color, size }) => {
            return <Feather name="settings" size={theme.style.tabNavSize} color={color} />
          }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}