import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

class Home extends Component{
  constructor(props){
    super(props);
    this.state ={

    }
  }
  render(){
    return(
      <View style={styles.container}>
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
  touchable:{
    backgroundColor: '#ccc',
    borderRadius:4,
    marginVertical:10,
  }
})

export default Home;