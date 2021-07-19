import React, { useEffect } from "react";
import { View,
         Text,
         FlatList,
         ActivityIndicator,
         Button } from 'react-native';
import { styles } from './styles';

import { Header } from '../../Components/Header';
import { Buttons } from '../../Components/Button';
import axios from 'axios';
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
 

export function Home(){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const navigation = useNavigation();



  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(({ data }) => {
        setData(data.results)
      })

      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


    return (

    <View style={styles.container}>
        <Header title="Lista de Pokémons"/>
        <FlatList
          data = { data }
          keyExtractor={(id, index) => index.toString()}
          renderItem={({ item }) => (
            <Buttons onPress={() => navigation.navigate('Details', {item})} title={item.name}/>
          )}
        />
    </View>
       
    );
}