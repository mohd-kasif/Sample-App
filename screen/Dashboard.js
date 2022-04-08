import React, {useState} from 'react';
import {TabRouter} from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Pressable,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import BankAccount from './BankAccount';
// import Security from './Security';
// import Whatsapp from './Whatsapp';
// import Help from './HelpSupport';
// import Refer from './Referrel';
// import Logout from './Logout';
// import HomeScreen from './Home';
import DrawerStack from './DraweStack';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// const Home = () => {
//   return (
//     <Drawer.Navigator
//       useLegacyImplementation
//       screenOptions={{headerShown: false}}>
//       {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
//       <Drawer.Screen name="Bank account details" component={BankAccount} />
//       <Drawer.Screen name="Security" component={Security} />
//       <Drawer.Screen name="Receive updates on Whatsapp" component={Whatsapp} />
//       <Drawer.Screen name="Help & Support" component={Help} />
//       <Drawer.Screen name="Refer and earn" component={Refer} />
//       <Drawer.Screen name="Logout" component={Logout} />
//     </Drawer.Navigator>
//   );
// };

const WatchList = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Watchlist!</Text>
    </View>
  );
};

const Portfolio = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Portfolio!</Text>
    </View>
  );
};
const Notification = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notification!</Text>
    </View>
  );
};
const Dashboard = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#683FDB',
        headerShown: false,
      }}>
      <Tab.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={WatchList}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({color, size}) => (
            <Icon name="briefcase" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Watchlist"
        component={Portfolio}
        options={{
          tabBarLabel: 'Watchlist',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="md-bookmarks" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="notifications" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
