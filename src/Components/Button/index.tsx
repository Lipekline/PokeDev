import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import  Icon  from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/core';

import axios from 'axios'

import { styles } from './styles';

Icon.loadFont();

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Buttons({ title, ...rest } : ButtonProps){


    return(
    <View style={styles.container}>
    <TouchableOpacity style={styles.button} {...rest}
                      activeOpacity={1} 
                      >
        <Text style={styles.nome}>{ title }</Text>
        <Icon name="angle-right" style={styles.icone} />
    </TouchableOpacity>
    </View>
    );
}