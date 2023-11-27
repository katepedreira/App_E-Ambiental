import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuView = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/logo2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity onPress={() => handleNavigation('')} style={styles.link}>
        <Text style={styles.linkText}>Agendar Coleta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation('')} style={styles.link}>
        <Text style={styles.linkText}>Pontos de Coleta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation('TipoResiduo')} style={styles.link}>
        <Text style={styles.linkText}>Lista de Resíduos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation('')} style={styles.link}>
        <Text style={styles.linkText}>Serviços</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff', 
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 200, 
    height: 100, 
  },
  link: {
    backgroundColor: '#008000', 
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  linkText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default MenuView;
