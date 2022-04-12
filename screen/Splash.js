import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
import SplashScreen from 'react-native-splash-screen';

const Splash = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.conatiner}>
      <LinearGradient
        style={{width: '100%', height: '100%'}}
        colors={['#683FDB', '#A05AD8']}>
        <Text style={styles.kuants_text}>Kuants</Text>
        <Text style={styles.bottom_text}>A Capital India Company</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kuants_text: {
    fontSize: 36,
    color: '#ffff',
    marginTop: (((300 / Height) * 100) / 100) * Height,
    marginLeft: (((156 / Width) * 100) / 100) * Width,
    // fontFamily: 'Rubik-LightItalic',
  },
  bottom_text: {
    color: '#ffff',
    marginLeft: (((120 / Width) * 100) / 100) * Width,
    marginTop: (((250 / Height) * 100) / 100) * Height,
    fontSize: 18,
    // fontFamily: 'Rubik-Light',
  },
});
export default Splash;
