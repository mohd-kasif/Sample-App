import React, {useState, useEffect, useRef} from 'react';
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

import Carousel from 'react-native-anchor-carousel';

import Icon from 'react-native-vector-icons/FontAwesome';
const designWidth = 390;
const designHeight = 844;
const BankAccount = ({navigation}) => {
  const data = [
    {
      title: 'Carousel 01',
      rating: 76,
      price: 1200,
    },
    {
      title: 'Carousel 02',
      rating: 76,
      price: 1200,
    },
    {
      title: 'Carousel 03',
      rating: 76,
      price: 1200,
    },
    {
      title: 'Carousel 04',
      rating: 76,
      price: 1200,
    },
    {
      title: 'Carousel 05',
      rating: 76,
      price: 1200,
    },
    {
      title: 'Carousel 06',
      rating: 76,
      price: 1200,
    },
  ];
  const carouselRef = useRef(null);
  useEffect(() => {
    carouselRef.current.scrollToIndex(1);
  });

  const renderItems = (data, index) => {
    const {title, rating, price} = data;
    console.log(data);
    return (
      <View>
        <View
          style={styles.card}
          onPress={() => {
            if (index === 0) {
              carouselRef.current.scrollToIndex(5);
            } else if (index === data.length - 1) {
              carouselRef.current.scrollToIndex(1);
            } else {
              carouselRef.current.scrollToIndex(index);
            }
          }}></View>
        <View style={styles.lowerContainer}>
          <Text>{title}</Text>
          <Text>{rating}</Text>
          <Text>{price}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Icon
          style={styles.drawer_icon}
          size={24}
          name="bars"
          onPress={() => navigation.openDrawer()}
          color="#020202"
        />
        <TextInput placeholder="Search" style={styles.search_bar} />
      </View>
      <View>
        <Text style={styles.heading}>Intro to Stock Markets</Text>
        <Text style={styles.sub_heading}>
          Watch these videos and if you like subscribe to{'\n'}our course to
          further excel in market
        </Text>
      </View>
      <View>
        <Carousel
          data={data}
          renderItem={renderItems}
          itemWidth={(267 / designWidth) * Width}
          inActiveOpacity={0.3}
          containerWidth={Width}
          ref={carouselRef}
        />
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
    padding: 10,
  },
  heading: {
    marginLeft: 16,
    marginTop: 35,
    marginRight: 129,
    fontSize: 24,
    lineHeight: 24,
    color: '#262626',
  },
  sub_heading: {
    marginLeft: 16,
    marginTop: 9,
    fontSize: 16,
    lineHeight: 18,
    color: '#262626',
  },
  card: {
    backgroundColor: '#A8A8A8',
    height: (340 / designHeight) * Height,
    borderRadius: 24,
    marginTop: 19,
  },
  lowerContainer: {
    alignItems: 'center',
  },
});
export default BankAccount;
