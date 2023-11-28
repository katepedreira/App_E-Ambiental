import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const BannerPDC = ({ title, subtitle }) => {
    return (
      <View style={styles.bannerContainer}>
        <Image
          style={styles.logo}
          source={require('./logo3.png')}  
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: '#FFFFFF',
    padding: 50 ,
    alignItems: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 15,
    color: '#07790C',
    textAlign: 'center',
    marginBottom: -30,
    fontWeight: "bold"

  },
  logo: {
    width: 100,  
    height: 100, 
  },
});

export default BannerPDC;