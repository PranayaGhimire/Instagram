/* eslint-disable react/no-unescaped-entities */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const Home = () => {
  const onNavigate= () => {
    router.push("/auth");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <View style={styles.body}>
        <Text style={styles.instagramText}>Instagram</Text>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("@/assets/images/Oval.png")} resizeMode='cover'/>
            <Text style={{fontWeight:"500"}}>jacob_w</Text>
            <TouchableOpacity style={styles.btn} onPress={onNavigate} activeOpacity={0.8}>
                <Text style={styles.btnText}>Log In</Text>
            </TouchableOpacity>
        </View>
        <Text style={{color:"#3797EF",fontWeight:"500"}}>Switch Accounts</Text>
      </View>
      <View style={styles.footer}>
        <Text style={{color:"gray"}}>Don't have an account? <Text style={{color:"black",fontWeight:"bold"}}>Sign up.</Text></Text>
        <View style={styles.footerLine}/>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:20
  },
  header:{

  },
  body:{
    alignItems:"center",
    gap:30
  },
  imageContainer:{
    alignItems:"center",
    gap:15
  },
  image:{
    width:85,
    height:85
  },
  btn:{
    width:307,
    height:44,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#3797EF",
    borderRadius:5
  },
  btnText:{
    color:"white",

  },
  instagramText:{
    fontSize:30,
    fontWeight:"bold",
    marginBottom:35,
    fontFamily:"Brush Script MT"
  },
  footer:{
    borderTopWidth:0.4,
    borderColor:"light gray",
    width:375,
    height:84,
    justifyContent:"space-between",
    alignItems:"center",
    paddingTop:20
  },
  footerLine:{
    backgroundColor:"#060606",
    width:134,
    height:5
  }
})