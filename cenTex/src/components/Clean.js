import React, {Component} from 'react';
import {SafeAreaView,Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';

export default class Clean extends Component{
   static navigationOptions = {
    header:null
  }
	render(){
		return(
    <SafeAreaView>
    <ScrollView>
       <View style={{flex: 1,}}>
       <View style={{flex:1,backgroundColor:'royalblue',flexDirection:'row',height:50}}>
        <View style={{marginTop:5}}>
        <Button
            icon={{name: 'arrowleft', type: 'antdesign',color:'white',size:24}}
            buttonStyle={{width:'60%',backgroundColor:'transparent'}}
            onPress={() =>this.props.navigation.navigate("Profile")}
        />
        </View>
        <View style={{marginTop:7}}>
        <TouchableOpacity 
            onPress={()=>{this.props.navigation.navigate('Profile')}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:24,fontWeight:'bold',color:'white'}}>CenTex AIR</Text>
            </View>
            </TouchableOpacity>
        </View>
        
      

        </View>
			 <View style={styles.container}>
				<Text style={styles.tText}>LET'S CLEAR THE AIR</Text>
        <Text style={styles.letText}>There are many, quick, easy inexpensive actions we can take to reduce air pollution and improve the quality of air in our Central Texax community. It doesn't take much: individual choices add up to impact our future! So let's all do our share for CLEAN AIR!</Text>
        <Text style={styles.boldText}>DO SOMETHING IN YOUR CAR!</Text>
			   <Text style={styles.carText}>{'\u2022' + "Refusal when it's cool. Fueling your tank in cooler temperatures means less formation of ozone."}{'\n'}
                                      {'\u2022' + "Check your tires. Low tire pressure increases road friction and can waste up to 5% of a tank of gas."}{'\n'}
                                      {'\u2022' + "Replace the air filter. A clogged air filter can cause a 10% increase in fuel consumption."}{'\n'}
                                      {'\u2022' + "Change your oil. Clean oil reduces engine friction and increases gas mileage."}
         </Text>
        <Text style={styles.atHome}>DO SOMETHING AT HOME!</Text>
        <Text style={styles.homeText}>{'\u2022' + "Recycle: Recycling and/or reusing paper, plastic, glass, cardboard, and aluminium conserves energy\n and reduces emissions from production."}{'\n'}
                                       {'\u2022' + "Lighten up: Use windows and skylights to bring natural light into your home."}{'\n'}
                                       {'\u2022' + "Water better: Check your irrigation system for leaks, and install a smart controller and rain\nswitch."}{'\n'}
                                       {'\u2022' + "Plant more trees: They reduce the temperature of the surrounding air, provide shade, and absorb\n solar energy."}
        </Text>
        <Text style={styles.atWork}>DO SOMETHING AT WORK!</Text>
        <Text style={styles.workText}>{'\u2022' + "Carpool to wrork, meetings, and other professional events. Save gas by sharing a ride."}{'\n'}
                                      {'\u2022' + "Put your computer sleep. Set the sleep function on"}
        </Text>
      </View>
      </View>
    </ScrollView>
    </SafeAreaView>
			);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10
  },
  tText:{
  	color:'royalblue',
  	paddingLeft:20,
  	fontWeight:'bold',
  	fontSize:20,
  	borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
   headerText1:{
      color:'white',
      textAlign:'center',
      fontSize:22,
      fontWeight:'bold'
     
    },
    headerTextView:{
      height:50,
      backgroundColor:'royalblue',
      justifyContent:'center',
    },
    letText:{
    color:'black',
    paddingLeft:20,
    fontSize:16,
    paddingRight:20,
    },
    boldText:{
    marginTop:10,
    color:'black',
    paddingLeft:20,
    fontSize:18,
    fontWeight:'bold'
    },
    carText:{
      color:'black',
      fontSize:16,
      paddingLeft:20,
      paddingRight:20,
    },
    atHome:{
      marginTop:10,
      color:'black',
      paddingLeft:20,
      fontSize:18,
      fontWeight:'bold'
    },
    homeText:{
     color:'black',
      fontSize:16,
      margin:20,
      paddingRight:20,
    },
    atWork:{
      color:'black',
      margin:20,
      fontWeight:'bold',
      fontSize:18
    },
    workText:{
      color:'black',
      fontSize:16,
      margin:20,
      paddingRight:20,
    }
});