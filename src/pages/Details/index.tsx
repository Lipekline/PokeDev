import React, { useEffect, useState } from "react";
import { View,
         Text, 
         PushNotificationIOS,
         FlatList,
         Image} from 'react-native';
import { styles } from './styles';

import { Header } from '../../Components/Header';
import axios from "axios";
import { ListItem } from "react-native-elements/dist/list/ListItem";
 

export function Details( {route} ){
    
const {item} = route.params

const [isLoading, setLoading] = useState(true);
const [ability, setAbility] = useState([]);
const [foto, setFoto] = useState([]);




  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + item.name)
      .then(({ data }) => {
        console.log(data.abilities)
        setAbility(data.abilities.ability)
        console.log(data.sprites)
        setFoto(data.sprites)
      })
      
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


    return (

    <View style={styles.container}>
        <Header title="Detalhes do Pokémon"/>
        <View style={styles.pokemon}>
          <Image style={styles.foto} source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg', } } />
          <View style={styles.nome}>
          <Text style={styles.tag}>Nome: </Text>
          <Text style={styles.title}>{item.name}</Text>
          </View>
        </View>
        <View style={styles.habilidades}>
          <Text style={styles.tag}>Habilidades:</Text>
        </View>
        <View style={styles.movimentos}>
              <Text style={styles.tag}>Movimentos:</Text>
        </View>
        

    </View>
       
    );
}