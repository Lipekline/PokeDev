import { StyleSheet } from "react-native";

import { theme } from '../../global/styles/theme';

export const  styles = StyleSheet.create({
    title: {
        color: theme.colors.title,
        fontSize: 24,
        fontWeight: 'bold',
    },
    header: {
        backgroundColor: theme.colors.subHeader,
        height: '8%',
        alignItems: 'center',
        justifyContent: 'center'

    }



})