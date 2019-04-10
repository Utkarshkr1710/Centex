import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,TouchableWithoutFeedback,ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';


export default class Profile extends Component{
 static navigationOptions = {
    title: 'CenTex AIR',
    headerStyle: {
      backgroundColor: 'royalblue',
    },
   // headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color:'white',
      justifyContent:'center',
      alignItems:'center'
    },
  };
  
  render(){
    return(
      <ScrollView>
       <View style={styles.container}>
       <View style={styles.text}>
        <Text style={styles.tText}>HEY Y'ALL!</Text>
        </View>
        <View style={styles.para}>
          <Text style={styles.paratext}>CenTexAir is brought to you by CLEAN AIR Force of Central Texas. We proudly serve the Bastrop,Caldwell, Hays, Travis, and Williamson countries of Central Texas.{"\n\n"}Want to learn more? Click these links to get to know us!
          </Text>
        </View>
        <View style={{marginTop:80}}>

        <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:'royalblue',height:50,justifyContent:'center'}}
        onPress={()=>{this.props.navigation.navigate('Mission')}}> 
          <View style={{}}>
              <Text style={styles.headerText1}>MISSION</Text>
          </View>
          </TouchableOpacity>
           <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:'royalblue',height:50,justifyContent:'center',marginTop:20}}
        onPress={()=>{this.props.navigation.navigate('Faq')}}>
          <Text style={styles.headerText1}>FAQ</Text>
          </TouchableOpacity>
           <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:'royalblue',height:50,justifyContent:'center',marginTop:20}}
        onPress={()=>{this.props.navigation.navigate('Clean')}}>
          <Text style={styles.headerText1}>CLEAN AIR TIPS</Text>
          </TouchableOpacity>
           <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:'royalblue',height:50,justifyContent:'center',marginTop:20}}
        onPress={()=>{this.props.navigation.navigate('Contact')}}>
          <Text style={styles.headerText1}>CONTACT</Text>
          </TouchableOpacity>
          

        </View>
       
        </View>
        </ScrollView>

      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:10,
  },
  tText:{
    color:'royalblue',
    marginLeft:20,
    fontWeight:'bold',
    fontSize:20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
  paratext:{
    color:'black',
    paddingLeft:20,
    fontSize:16,
    paddingRight:20

  },
   

   missionView:{
    backgroundColor:'royalblue',
    height:50
   },
   faqView:{
    backgroundColor:'royalblue',
    height:50,
    marginTop:10
   },
   airView:{
     backgroundColor:'royalblue',
    height:50,
    marginTop:10
  },
  contactView:{
     backgroundColor:'royalblue',
    height:50,
    marginTop:10
  },
   headerText1:{
    color:'white',
    fontSize:20,
    paddingLeft:20,
   },
   faqText:{
     color:'white',
    fontSize:20,
    marginLeft:20

   },
   airText:{
    color:'white',
    fontSize:20,
    marginLeft:20
  },
  contactText:{
     color:'white',
    fontSize:20,
    marginLeft:20
  },
  })