import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, ActivityIndicator, FlatList} from 'react-native';

const profesores = [
  {
    id: 1,
    nombre: "Ale"
  },
  {
    id: 2,
    nombre: "Everaldo"
  },
  {
    id: 3,
    nombre: "Maca"
  }
]

class Home extends Component{
  constructor(props){
    super(props);
    this.state ={

    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Hola Mundo</Text>
        <ActivityIndicator size='small' color='red' />
        <Image 
          style={styles.image}
          source={require('../../assets/characters/superman.jpg')}
          resizeMode="contain"
        />

        <Image 
          style={styles.image}
          source={{uri:'https://lapaginamillonaria.com/__export/1633441863048/sites/lpm/img/2021/10/05/xlvarez_-_rojo_crop1633441784392.jpg_1693159006.jpg'}}
          resizeMode="contain"
        />

        <FlatList 
          data= { profesores }
          keyExtractor = { profesor => profesor.id.toString()}
          renderItem = { ({item}) => <Text>{item.nombre}</Text>}
        />

        <TouchableOpacity 
          style={styles.touchable}
          onPress={ ()=> console.log('Me clickeraon')}>
          <Text>Hola Mundo</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchable}
        onLongPress={ ()=> console.log('Click largo')}>
        <Text>Hola Mundo click largo</Text>
      </TouchableOpacity>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10,
  },
  image:{
    height: 250,
  },
  touchable:{
    backgroundColor: '#ccc',
    borderRadius:4,
    marginVertical:10,
  }
})

export default Home;