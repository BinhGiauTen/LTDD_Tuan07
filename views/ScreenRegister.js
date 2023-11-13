import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ScreenRegister() {
  const [name, setName]  =React.useState("");
  const [userName, setUserName]  =React.useState("");
  const [password, setPassword]  =React.useState("");

  const saveData = async()=>{
    console.warn(name,userName, password)
    const url = "http://localhost:3000/user"
    let result = await fetch(url, {
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({name, userName, password})
    });
    result = await result.json();
  }
  
    return (

    <View style={styles.container}>
        <Text style={styles.text}>Sign up</Text>

    <View style={{flexDirection:'column',justifyContent:'space-between'}}>
    
   
    <TextInput
      style={styles.input}
      placeholder='Name'
      value={name}
      onChangeText={(text)=>setName(text)}
      />

      <TextInput
      style={styles.input}
      placeholder='Username'
      value={userName}
      onChangeText={(text)=>setUserName(text)}


      />

<TextInput
      style={styles.input}
      placeholder='Password'
      value={password}
      onChangeText={(text)=>setPassword(text)}
        secureTextEntry
      
      />
    </View>
        

      <TouchableOpacity style={{width:300, height:50,backgroundColor:'#00EE76', justifyContent:'center', alignItems:'center', borderRadius:10, marginTop:30}} 
      onPress={()=> saveData()}>
        <Text style={styles.sigin}>Sign up</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE1FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    fontSize:25,
    marginBottom:50

  },

  input:{
    marginBottom:20,
    width: 300,
    height:50,
    borderWidth:1,
    borderColor:"#cccc",
    padding:10,
    borderRadius:10,
    fontSize:20,
    color:"#c0c0c0",
    backgroundColor:'#fff',
  },
  sigin:{
    fontSize:23,
    fontWeight:700,
  }
});
