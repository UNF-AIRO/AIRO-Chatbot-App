

import React from 'react';
import { Pressable, StyleSheet, TextInput, View, Dimensions } from 'react-native';


export default function TextFieldView(chats, text) {

    async function GetCBResponse() {
        console.log("hi");
        
        try {
          let response = await fetch(
            `https://chatbot-api-dtqb5qffza-ue.a.run.app/test?text=${encodeURIComponent(this.text)}`,
          );
          chats = [{text: "Hi", isMe: true}]
          console.log(response);
          let responseJson = await response.json();
          console.log(responseJson);
         
         ;
         this.setState(prevState => ({
            chats: [...prevState.chats, {text: responseJson.text, isMe: false}]
          }))
         
         
          return responseJson;
        } catch (error) {
          console.error(error);
        }
      } 
  return (
    <View style={styles.container}>
    <View style={styles.bottomContainer}>
        </View>
    <TextInput style={styles.input} value={text} ></TextInput>
    <Pressable style= {styles.circleBtn} onPress={GetCBResponse}></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    circleBtn: {
        width: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 25,
        aspectRatio: 1 / 1 ,
        backgroundColor: '#47E6B1',
        borderRadius: Math.round(Dimensions.get('window').width) / 2,
        marginLeft:"65%",
      },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
 bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom:"30%",
    position: "absolute",
    
},
  input: {
    width:"85%",
    marginBottom:"10%",
    height: 55,
    padding: 10,
    borderRadius:25,
    backgroundColor:"#E3E3E3",
    position: "absolute",
  },
})