
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ChatBubble({text, isMe}) {
  return (
    <View style={isMe ? styles.bubbleLeft : styles.bubbleRight}>
      <Text style={isMe ? styles.text : styles.text2}>{text}</Text>
      
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

      bubbleLeft: {
        marginVertical: 20,
        marginRight: "5%",
      padding: "5%",
      marginLeft: "50%",
      borderRadius: 25,
      elevation: 3,
      backgroundColor: 'rgba(3, 138, 255, 0.8)',
    },
    bubbleRight: {
        marginVertical: 20,
        marginLeft: "5%",
        padding: "5%",
        marginRight: "50%",
        borderRadius: 25,
        elevation: 3,
        backgroundColor: "#47E6B1",
      },
    text: {
      fontSize: 16,
      textAlign: "right",
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    text2: {
        fontSize: 16,
        textAlign: "left",
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
  });