import React from 'react';
import { 
    KeyboardAvoidingView, 
    Platform,
    TextInput, 
    Image, 
    Text, 
    View, 
    TouchableOpacity 
} from 'react-native';
import { styles } from '../assets/css/main';

export default function Login() {
    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[styles.container, styles.darkbg]}>
            <View style={styles.loginLogo}>
                <Image source={require('../assets/img/icon-logo.png')} />
            </View>

            <View style={styles.loginForm}>
                <TextInput 
                    style={styles.loginInput}
                    placeholder='Usuario:' 
                />
                <TextInput 
                    style={styles.loginInput}
                    placeholder='Senha:' 
                    secureTextEntry={true} 
                />
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}