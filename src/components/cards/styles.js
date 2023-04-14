import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '50%',
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        justifyContent: 'space-evenly',
        border: 'thick double #32a1ce'
    },
    viewImg: {
        width: '50%',
        height: 300,
        backgroundColor: 'black'
    },
    img: {
        width: '100%',
        height: '100%',
        border: 'solid',
        color: 'red'
    },
    viewData: {
        backgroundColor: 'brown',
        padding: 10,
        width: '50%',
        height: '100%',
    },
    nome: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    }, 
    desc: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5
    }, 
    btn: {
        padding: 5,
        backgroundColor: 'red'
    }
});

export default styles;