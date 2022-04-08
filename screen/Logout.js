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

import Icon from 'react-native-vector-icons/FontAwesome';
const Logout = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>You have been logout.</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  drawer_icon: {
    marginLeft: 20.5,
    marginTop: 33,
  },
  search_bar: {
    width: 301,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#020202',
    marginTop: 22,
    marginLeft: 21.5,
  },
});
export default Logout;
