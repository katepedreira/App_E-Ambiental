import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Dialog, Snackbar } from 'react-native-paper';


const CadastroView = () => {
    const navigation = useNavigation();

    //const handleLogin = () => {
    // Lógica de login 
    //    console.log('Realizando login...');
    //};

    const handleSignup = () => {
    // Navegar para a tela de cadastro
        navigation.navigate('Cadastro'); 
    };

    const [user, setUser] = useState({
        nome:'',
        email:'',
        senha:'',
        cep:'',
        endereco:'',
        bairro:'',
        numero:'',
        cidade:''
    })

    const [sucesso, setSucesso] = useState(false)

    const [msgErro, setMsgErro] = useState("")

    const buscaCep = ()=>{

        const dados = fetch(`https://viacep.com.br/ws/${user.cep}/json/`)
        dados.then((res)=>{
            return res.json()
        }).then((json)=>{

            setUser({...user, endereco: json.logradouro, 
                bairro: json.bairro, 
                cidade: json.localidade + ' - '+json.uf})

        })

    }

    const saveUser = ()=>{
        if (user.nome === '' || user.email === '' || user.senha === '' || user.cep === '' || user.numero === ''){
            setMsgErro("Os campos não podem estar vazios!")
            return
        }

        const save = fetch(`http://localhost:3000/usuario`,
        {
            "method": "post",
            "headers": {'Content-Type': 'application/json'},
            "body": JSON.stringify({ ...user, perfil:"CLIENTE"})
        }).then((save)=>{
            setSucesso(save.status == 201)
        })

    }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/logo2.png')}
          style={styles.logo}
        />
        <Text style={styles.loginText}>Cadastro</Text>
      </View>

      <View style={styles.inputContainer}>
        <ScrollView>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={user.nome}
          placeholderTextColor="#000" 
          onChangeText={ txt => setUser({ ...user, nome: txt })}
          returnKeyType="next"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={user.email}
          placeholderTextColor="#000" 
          onChangeText={ txt => setUser({ ...user, email: txt })}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={user.senha}
          secureTextEntry={true}
          placeholderTextColor="#000"
          onChangeText={ txt => setUser({ ...user, senha: txt })}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={user.cep}
          placeholderTextColor="#000"
          onChangeText={ txt => setUser({ ...user, cep: txt })}
          returnKeyType="next"
          keyboardType="decimal-pad"
          onBlur={ buscaCep }
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={user.endereco}
          placeholderTextColor="#000"
          onChangeText={ txt => setUser({ ...user, endereco: txt })}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          value={user.bairro}
          placeholderTextColor="#000"
          onChangeText={ txt => setUser({ ...user, bairro: txt })}
          returnKeyType="next"
        />

        <TextInput
          style={styles.input}
          placeholder="Cidade"
          value={user.cidade}
          placeholderTextColor="#000"
          onChangeText={ txt => setUser({ ...user, cidade: txt })}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Número"
          value={user.numero}
          placeholderTextColor="#000"
          onChangeText={ txt => setUser({ ...user, numero: txt })}
          returnKeyType="next"
          keyboardType="decimal-pad"
        />
        <Dialog visible={sucesso} onDismiss={()=> setSucesso(false)}>
            <Dialog.Icon icon="account-check" />
            <Dialog.Title>CADASTRO</Dialog.Title>
            <Dialog.Content>
            <Text variant="bodyMedium">Cadastro feito com sucesso!</Text>
            </Dialog.Content>
            <Dialog.Actions>
                <Button onPress={()=> navigation.navigate('Login')}>Avançar</Button>
            </Dialog.Actions>
        </Dialog>
        </ScrollView>
        <Snackbar
            visible={msgErro !=''}
            onDismiss={() => setMsgErro("")}
            action={{
            label: 'fechar',
            onPress: () => {
                //setVisible(false)
            },
            }}>
            {msgErro}
        </Snackbar>
      </View>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={saveUser} >Cadastrar</Text>
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

export default CadastroView;