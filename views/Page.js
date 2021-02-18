import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/css/main';

export default function Page(props) {
    return (
        <View style={styles.textPage}>
            <Text style={styles.text}>Me chamo {props.nome}</Text>
            <Text>Estudo na {props.empresa}</Text>
            <Text>Comprou o produto {props.produto}</Text>
            <Text>na seguinte quantidade {props.quantidade}</Text>
        </View>
    );
}