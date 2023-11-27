import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreenView = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navegar para a tela de login após 2 segundos
      navigation.replace('Login');
    }, 2000);

    
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <WelcomeHeader />
      <Text style={styles.subtitle}>
        Seu aplicativo de coleta de lixo eletrônico.
      </Text>
    </View>
  );
};

const WelcomeHeader = () => {
  return (
    <>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Bem-vindo ao E-coletas</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default WelcomeScreenView;
