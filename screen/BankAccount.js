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
const BankAccount = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Icon
          style={styles.drawer_icon}
          size={24}
          name="bars"
          onPress={() => navigation.openDrawer()}
        />
        <TextInput placeholder="Search" style={styles.search_bar} />
      </View>
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
export default BankAccount;
