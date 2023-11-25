import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginView = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
    // Lógica de login 
        console.log('Realizando login...');
    };

    const handleSignup = () => {
    // Navegar para a tela de cadastro
        navigation.navigate('Cadastro'); 
        };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/logo2.png')}
          style={styles.logo}
        />
        <Text style={styles.loginText}>Login</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#000" 
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="#000"
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={handleSignup}>
        <Text style={styles.signupText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9FCA6', 
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#FFF', 
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  buttonContainer: {
    width:100,
    backgroundColor: '#07790C',
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 20,
    color: '#000',
  },
});

export default LoginView;
