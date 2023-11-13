import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ScreenLogin() {
  const [userName, setUserName]  =React.useState("");
  const [password, setPassword]  =React.useState("");

  const login = async()=>{
    console.warn(userName, password)
    try {
        const response = await fetch("http://localhost:3000/user", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
  
        if (response.ok) {
          const data = await response.json();
          const user = data.find(user => user.userName === userName && user.password === password);
          if (user) {
            alert("success")
          } else {
            alert("Invalid username or password");
          }
        } else {
          alert("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      }
}
  
    return (

    <View style={styles.container}>
        <Text style={styles.text}>Sign in</Text>

    <View style={{flexDirection:'column',justifyContent:'space-between'}}>
    

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
      onPress={()=> login()}>
        <Text style={styles.sigin}>Sign in</Text>
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
    color:"#222222",
    backgroundColor:'#fff',
  },
  sigin:{
    fontSize:23,
    fontWeight:700,
  }
});
