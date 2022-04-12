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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

export const OpenCamera = () => {
  const devices = useCameraDevices();
  const device = devices.front;
  console.log(device);
  if (device == null)
    return (
      <View>
        <Text>Nothing is Here</Text>
      </View>
    );
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

const MyDrawer = props => {
  console.log('Props Navigation', props.navigation);
  // var devices = useCameraDevices();
  // console.log('line number 31', devices.back);
  const handleCamera = async () => {
    try {
      const newCameraPermission = await Camera.requestCameraPermission();
      console.log(newCameraPermission);
      if (newCameraPermission === 'authorized') {
        props.navigation.navigate('OpenCamera');
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Entypo
          onPress={() => props.navigation.closeDrawer()}
          style={styles.cross_icon}
          name="cross"
          size={20}
        />
        <Text style={styles.profile}>Profile</Text>
        <View style={{position: 'relative'}}>
          <View
            style={{
              width: 36,
              height: 36,
              position: 'absolute',
              borderRadius: 50,
              marginLeft: 158,
              marginTop: 18,
              backgroundColor: '#C4C4C4',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons
              onPress={() => handleCamera()}
              style={{}}
              name="camera-outline"
              size={22}
            />
          </View>
          <Image
            source={require('../Images/photo.jpg')}
            style={styles.profile_image}
          />
        </View>
        <Text style={styles.profile_name}>Mohd Kashif</Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  cross_icon: {
    marginLeft: 241.8,
    marginTop: 29,
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
  profile_image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 16,
    marginLeft: 103,
    // position: 'absolute',
    zIndex: -1,
  },
  profile: {
    marginTop: 9.8,
    marginLeft: 112,
    fontSize: 18,
    lineHeight: 18,
    color: '#262626',
    fontWeight: 'bold',
  },
  profile_name: {
    marginTop: 19,
    marginLeft: 107,
    fontSize: 16,
    lineHeight: 18,
    color: '#262626',
    marginBottom: 32,
  },
});
export default MyDrawer;
