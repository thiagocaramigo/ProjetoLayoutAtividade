import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { estilo } from './css/layout';
export default function App() {
 
  return (
    <View style={estilo.container}>

      {/* Início do header */}
      <View style={estilo.header}>

        <View style={estilo.barradepesquisa}>
          <Text style={estilo.pesquisa}>Pesquisa:</Text>
          <Image source={require("./assets/settingico.png")} style={estilo.icoheader}/> 
        </View>
        <View>
          <Image source={{uri:"https://www.wyzant.com/blog/wp-content/uploads/2015/05/6-Things-Every-Parent-Should-Know-About-Private-Tutoring-1.png"}} style={estilo.imgheader}/>
        </View>
      </View>
      {/* Fim do header */}

      


    </View>
    );
}

