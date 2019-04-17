import React, {Component} from 'react';
import {SafeAreaView,Platform, StyleSheet, Text, View,TouchableOpacity,TouchableWithoutFeedback,ScrollView} from 'react-native';
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
      <SafeAreaView>
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
        <View style={{flex:1,backgroundColor:'royalblue',height:50,flexDirection:'row'}}>
              <Text style={styles.headerText1}>MISSION</Text>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}>
                <Icons
                style={{paddingRight:10 }}
                name="right"
                size={30}
                color="white"
                onPress={()=>{this.props.navigation.navigate('Mission')}}
              />
              </View>
        </View>

        <View style={{flex:1,backgroundColor:'royalblue',height:50,flexDirection:'row',marginTop:5}}>
              <Text style={styles.headerText1}>FAQ</Text>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}>
                <Icons
                style={{paddingRight:10 }}
                name="right"
                size={30}
                color="white"
                onPress={()=>{this.props.navigation.navigate('Faq')}}
              />
              </View>
        </View>

        <View style={{flex:1,backgroundColor:'royalblue',height:50,flexDirection:'row',marginTop:5}}>
              <Text style={styles.headerText1}>CLEAN AIR TIPS</Text>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}>
                <Icons
                style={{paddingRight:10 }}
                name="right"
                size={30}
                color="white"
                onPress={()=>{this.props.navigation.navigate('Clean')}}
              />
              </View>
        </View>

        <View style={{flex:1,backgroundColor:'royalblue',height:50,flexDirection:'row',marginTop:5}}>
              <Text style={styles.headerText1}>CONTACT</Text>
              <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}>
                <Icons
                style={{paddingRight:10 }}
                name="right"
                size={30}
                color="white"
                onPress={()=>{this.props.navigation.navigate('Contact')}}
              />
              </View>
        </View>
       
           
          

        </View>
       
        </View>
        </ScrollView>
        </SafeAreaView>

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
    marginTop:10
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