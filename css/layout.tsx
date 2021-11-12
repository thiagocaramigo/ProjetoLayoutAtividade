import { StyleSheet } from "react-native";


export const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
    },
    header:{

    },
    barradepesquisa:{
        flexDirection:"row"
    },
    pesquisa:{
        fontSize:30,
        width:500,
        height:500,
        position:'absolute',
        left:30,
        top:40      
    },
    icoheader:{
        width:50,
        height:30,
        resizeMode:'contain',
        position:'absolute',
        right:20,
        top:40
    },
    imgheader:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        right:0,
        left:0,
        top:-150,
        borderRadius:70

    }
  });
  