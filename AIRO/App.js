import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import { StyleSheet, Pressable, ScrollView, Dimensions, View, TextInput } from 'react-native';
import ChatBubble from './Components/ChatBubble';
import TextFieldView from './Components/TextFieldView';
export default function App() {
  const [text, action] = useState("");
  const [chats, action2] = useState([{}]);
// let chats = [
//   {

//   }
// ]
async function GetCBResponse() {
  console.log("hi");
  
  try {
    let response = await fetch(
      `https://chatbot-api-dtqb5qffza-ue.a.run.app/test?text=${encodeURIComponent(text)}`,
    );
    
    console.log(response);
    let responseJson = await response.json();
    console.log(responseJson);
    
    action2([...chats, {text: responseJson.response, isMe: false}]);
   ;
   
   
   
    return responseJson;
  } catch (error) {
    console.error(error);
  }
} 
  return (
   
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}> 
      {chats.slice(0).map((chat) => (
        <ChatBubble text={chat.text} isMe= {chat.isMe}></ChatBubble>
      ))}
      </ScrollView>
     
     
{/* <TextFieldView chats={chats} text={text}> </TextFieldView> */}
      <StatusBar style="auto" />

      <View style={styles.container}>
    <View style={styles.bottomContainer}>
    </View>
    <TextInput onChangeText={
          action
        } style={styles.input} value={text} ></TextInput>
    <Pressable style= {styles.circleBtn} onPress={GetCBResponse}></Pressable>
        
    
   
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
   marginTop:"30%",
  },
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
 
});