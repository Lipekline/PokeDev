import { StyleSheet } from "react-native";

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create ({
    container:{
        flex: 1,
        paddingHorizontal: 20
    },
    nome: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    button: {
        flex: 1,
        height: 45,
        flexDirection: 'row',
        marginTop: 35,
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: '#A3A4A6',
        
    },
    icone: {
        fontSize: 30,
        color: theme.colors.subHeader,
    }
});