import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useRef} from 'react';
import { StyleSheet, Pressable, ScrollView, Dimensions, View, TextInput } from 'react-native';
import ChatBubble from './Components/ChatBubble';
import {KeyboardAvoidingView} from 'react-native';
export default function App() {
  const [text, setText] = useState("");
  const [chats, setChats] = useState([{}]);
// let chats = [
//   {

//   }
// ]
async function GetCBResponse() {
  console.log("hi");
  setText("")
  try {
    let response = await fetch(
      `https://chatbot-api-dtqb5qffza-ue.a.run.app/test?text=${encodeURIComponent(text)}`,
    );
    
    console.log(response);
    let responseJson = await response.json();
    console.log(responseJson);
    // action2([...chats, ]);
    setChats([...chats, {text: text, isMe: true}, {text: responseJson.response, isMe: false}]);
    
   ;
   
   
   
    return responseJson;
  } catch (error) {
    console.error(error);
  }
} 
const scrollViewRef = useRef();
  return (
   
    <View style={styles.container}>
       <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
    enabled={Platform.OS === "ios" ? true : false}>
      <View style={styles.container2}>

      <ScrollView ref={scrollViewRef} style={styles.scrollView}  onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}> 
      {chats.slice(0).map((chat) => (
        <ChatBubble text={chat.text} isMe= {chat.isMe}></ChatBubble>
      ))}
      </ScrollView>
      </View>
     
{/* <TextFieldView chats={chats} text={text}> </TextFieldView> */}
      <StatusBar style="auto" />

      <View style={styles.container}>
    <View style={styles.bottomContainer}>
    </View>
    <TextInput onChangeText={
          setText
        } style={styles.input} value={text} ></TextInput>
    <Pressable style= {styles.circleBtn} onPress={GetCBResponse}></Pressable>
        
    
   
    </View>
    </KeyboardAvoidingView>
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
  container2: {
    
   height:"75%"
    
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
