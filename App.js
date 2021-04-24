/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  AsyncStorage
 } from 'react-native';
import Toast from 'react-native-simple-toast';

function App() {
  
  const [getText,setText] = useState('')
  const [getList,setList] = useState([])
 
  const data = () =>{
      if(getText ==''){
        Toast.show('Please enter data.', Toast.SHORT);
        }
       else{
        setList([...getList,getText])
        setText('')
        AsyncStorage.setItem("list",JSON.stringify(getList))
      }
  }
  return(
  <View style={style.mainContainer}>
    <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
       <View style={style.logo}>
          <Text style={style.logoText}>Todo App</Text>
       </View>
       <View style={style.container}>
       <View style={style.input}>
          <TextInput placeholder="Enter your item" style={{marginHorizontal:20,paddingTop:0,paddingBottom:0}} value={getText} onChangeText ={text=>setText(text)}/>
       </View>
       <TouchableOpacity style={style.buttonAds} onPress={data}>
          <Text>Add</Text>
       </TouchableOpacity> 
       </View> 
       <ScrollView showsVerticalScrollIndicator={false}>
          {getList.map((item) => <View style={style.displayItem}><Text>{item}</Text></View>)}
       </ScrollView>
  </View>
  )
}


export default App;
const style = StyleSheet.create({
     logoText:{
               fontSize:25
              },
         logo:{
               fontSize:20,
               alignSelf:"center",
               marginTop:40
              },

mainContainer:{
              flex:1,
              backgroundColor:"white",
              }, 

    container:{
              flexDirection:"row",
              justifyContent:"center",
              marginTop:30,
              marginBottom:20
              }, 

        input:{
              width:(Dimensions.get('window').width-90),
              height:30,
              backgroundColor:"#ffffff",
              borderRadius:40,
              borderWidth:0.2,borderColor:"#001180"
              },

   buttonAds:{
             width:50,
             height:30,
             backgroundColor:"orange",
             justifyContent:"center",
             alignItems:"center",
             borderRadius:40,
             marginLeft:10
             },
displayItem:{
            width:(Dimensions.get('window').width-30),
            height:30,
            backgroundColor:'red',
            marginTop:20,
            justifyContent:"center",
            paddingLeft:25,
            borderRadius:10,
            alignSelf:"center"
            
            }            
})
