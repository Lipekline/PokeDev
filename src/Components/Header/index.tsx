import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
    title: string;
}

export function Header( { title } : Props ){

    return(
    <View style={styles.header}>
        <Text style={styles.title}>{ title }</Text>
    </View>
    );
}