import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, ActivityIndicator, FlatList, TextInput} from 'react-native';

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
      email: ''
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Hola Mundo</Text>
        {/* Formulario de Login */}
        <View style={styles.formContainer}>
          {/* Campo para email */}
          <TextInput
             style={styles.field}
             keyboardType='email-address'
             placeholder='email'
             onChangeText={ text => this.setState({ email: text })}       
          />
          <Text> El email ingresado es: {this.state.email}</Text>

          {/* Campo para contraseña */}

          {/* Botón submit */}

        </View>

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
  formContainer:{
    backgroundColor: '#ccc',
    marginHorizontal: 10,
    padding:10,
  },
  field:{
    borderColor: '#444',
    borderWidth:1,
    borderStyle: 'solid',
    height: 20,
    paddingHorizontal: 20,
    paddingVertical:10
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