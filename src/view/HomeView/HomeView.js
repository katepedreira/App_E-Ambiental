import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

const HomeView = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <Text style={styles.title}>Para onde deseja ir?</Text>

            <View style={styles.circle}>
                <Image style={styles.image} source={require('../../../assets/home1.jpeg')} />
            </View>
            <Text style={styles.subtitle}> Solicitar uma coleta</Text>

            <IconButton icon="arrow-right" style={styles.btn}
                size={35} color="#FFFFFF"
                onPress={() => navigation.navigate('Login')}>
            </IconButton>

            <View style={styles.circle}>
                <Image style={styles.image} source={require('../../../assets/home2.jpeg')} />
            </View>
            <Text style={styles.subtitle}>Sou catador</Text>

            <IconButton icon="arrow-right" style={styles.btns}
                size={35} color="#FFFFFF"
                onPress={() => navigation.navigate('Cadastro')}>
            </IconButton>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9FCA6',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    circle: {
        width: 300,
        height: 300,
        borderRadius: 150,
        overflow: 'hidden',
        marginVertical: 10,
        borderWidth: 5,
        backgroundColor: 'white',
        borderColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        alignSelf: 'center',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    },
    btn: {
        width: 50,
        backgroundColor: '#07790C',
        alignSelf: 'center',
    },
    btns: {
        width: 50,
        backgroundColor: '#07790C',
        alignSelf: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'center',
    },
});

export default HomeView;
