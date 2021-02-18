import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../assets/css/main';

export default function Home({navigation}) {
    return (
        <View style={styles.containerButton}>
            {/*<Text>Esse é o componente Home</Text>*/}
            <TouchableOpacity 
                style={styles.buttonHome} 
                onPress={() => navigation.navigate('Login')}
            >
                <Image source={require('../assets/img/loginButton.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Produtos')}
            >
                <Image source={require('../assets/img/produtosButton.png')} />
            </TouchableOpacity>
        </View>
    );
}