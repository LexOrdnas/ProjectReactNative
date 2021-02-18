import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Alert } from 'react-native';
import { styles } from './assets/css/main';
import Page from './views/Page';

export default function App() {
  const [ product, setProduct ] = useState( 'Bola' );
  const [ quantity, setQuantity ] = useState( 0 );

  useEffect( () => {
    if(quantity > 0){
      Alert.alert('Novo produto foi adicionado');
    }
  }, [quantity]);

  const props={
    empresa: 'Recode Pro 2020',
    nome: 'Alexsandro Marques',
    produto: product,
    quantidade: quantity
  };

  return (
    <View style={styles.container}>
      <Text>Sejá bem-vindo ! 👋</Text>
      <Text>{ product }</Text>
      <Page {...props}/>
      <Button 
        title='Adicionar produtos' 
        onPress={
          () => setQuantity(quantity + 1)
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}
