import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../assets/css/main';

export default function Produtos(){
    return(
        <View style={styles.contentAll}>
            <Text style={styles.text}>
                Eletrodomésticos
            </Text>
            
                <ScrollView >
                <View style={styles.content}>
                <View  style={styles.produto}>
                    <Image style={styles.img}
                        source={require('./../assets/img/produtos/1.jpeg')}
                    />
                    <Text>Fogão Brastemp 4 Bocas Prata</Text>
                    <TouchableOpacity style={styles.btn} style={styles.btn}>
                    <Text style={styles.textBtn}>Comprar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.produto}>
                    <Image style={styles.img}
                        source={require('./../assets/img/produtos/2.jpeg')}
                    />
                    <Text>Fogão Consul.jpeg</Text>
                    <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}>Comprar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.produto}>
                    <Image style={styles.img}
                        source={require('./../assets/img/produtos/3.jpeg')}
                    />
                    <Text>Geladeira Brastemp Branca</Text>
                    <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}>Comprar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.produto}>
                    <Image style={styles.img}
                        source={require('./../assets/img/produtos/4.jpeg')}
                    />
                    <Text>Geladeira Brastemp Prata</Text>
                    <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}>Comprar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.produto}>
                    <Image style={styles.img}
                        source={require('./../assets/img/produtos/5.jpeg')}
                    />
                    <Text>Geladeira Brastemp Side Inverse</Text>
                    <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}>Comprar</Text>
                    </TouchableOpacity>
                </View>

            </View>
                </ScrollView>
                
        </View>
    )
}