import { Button, Image, Text, View } from "react-native";

import styles from './styles';

export default function Cards(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={{
                    uri: props.cards.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.nome}>Nome: {props.cards.nome}</Text>
                <Text style={styles.desc}>Descrição da Carta: {props.cards.desc}</Text>
                <Button style={styles.btn} title="Trocar CARTA"/>
            </View>
        </View>
    );
}