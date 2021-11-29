import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './screens/Home';
import config from './config';
import { Feather } from '@expo/vector-icons';
import theme from './theme';
import Doviz from './screens/Doviz';
import HaberDetay from './screens/HaberDetay';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const tabNav = () =>{
  return(
    <Tab.Navigator screenOptions={{
      lazy:false,
      headerShown:false,
      tabBarActiveTintColor: theme.style.tabNavActiveColor,
      tabBarInactiveTintColor: theme.style.tabNavInActiveColor,
   }}>
     <Tab.Screen name="Home" component={Home} options={{
       tabBarLabel:'Haberler',
       tabBarIcon:({ focused, color, size }) => {
         return <Feather name="home" size={theme.style.tabNavSize} color={color} />
       }
     }} />
      
       <Tab.Screen name="Doviz" component={Doviz} options={{
       tabBarLabel:'Döviz',
       tabBarIcon:({ focused, color, size }) => {
         return <Feather name="dollar-sign" size={theme.style.tabNavSize} color={color} />
       }
     }} />
     <Tab.Screen name="Settings" component={Home} options={{
       tabBarLabel:'Ayarlar',
       tabBarIcon:({ focused, color, size }) => {
         return <Feather name="settings" size={theme.style.tabNavSize} color={color} />
       }
     }} />
   </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={tabNav} options={{
          headerTransparent:true,
          headerBlurEffect:"systemChromeMaterialLight",
          headerTitle:config.appName,
        }}/>
        <Stack.Screen name="HaberDetay" component={HaberDetay} options={{
          headerBackTitle:'Geri',
          headerTransparent:true,
          headerBlurEffect:"systemChromeMaterialLight",
          headerTitle:config.appName,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}