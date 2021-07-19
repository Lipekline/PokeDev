import { StyleSheet } from "react-native";

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    pokemon: {
        height: 150,
        flexDirection: 'row',
        padding: 20

    },
    nome: {
        paddingTop: 10,
    },
    foto: {
        width: 96,
        height: 96,
        borderWidth: 1,
        borderColor: '#000'
    },
    habilidades: {

    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    tag: {
        color: theme.colors.tag,
        paddingBottom: 10

    },
    descricao: {

    },
    movimentos: {

    }
});