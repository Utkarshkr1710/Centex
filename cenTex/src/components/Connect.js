import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Linking,TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import { Button,Header} from 'react-native-elements';


export default class Profile extends Component{
	render(){
		return(
       <View style={{flex: 1,}}>
        <View style={styles.headerTextView}>
          <TouchableOpacity
        onPress={()=>{this.props.navigation.navigate('Profile')}}>
          <Text style={styles.headerText1}>CenTex AIR</Text>
           <Button
            icon={{name: 'arrowleft', type: 'antdesign',color:'white',size:30}}
            buttonStyle={{height: 40, width:80,marginTop:-30,backgroundColor:'royalblue'}}
            onPress={() =>this.props.navigation.openDrawer()}
        />
          </TouchableOpacity>
        </View>
     	 <View style={styles.container}>
				<Text style={styles.tText}>CONNECT</Text>
			 	<Text style={styles.sText}>          Y'ALL WANNA BE FRIENDS{"\n"}CONNECT WITHUS ON SOCIAL MEDIA!</Text>
			 <View style={{height:550,alignItems:'center',justifyContent:'center'}}>
	   	<Icons name='team' size={70} color='black'/>
      

	   	 <View style={{flex:1,marginTop:20}}>
        <Button
        icon={{name: 'sc-facebook', type: 'evilicon',color:'white',size:30}}
        buttonStyle={{height: 40, width: 200, borderRadius: 10,backgroundColor:'royalblue'}}
                 onPress={ ()=> Linking.openURL('https://www.facebook.com/CLEAN-AIR-Force-of-Central-Texas-60700478852/') }
            title="FRIEND US!"
        />
         <View style={{marginTop:10}}>
        <Button
             icon={{name: 'sc-twitter', type: 'evilicon',color:'white',size:30,}}
             buttonStyle={{height: 40, width: 200, borderRadius: 10,backgroundColor:'royalblue'}}
             onPress={ ()=> Linking.openURL('https://twitter.com/cleanairforcetx?lang=en') }
            title="FOLLOW US!"
        />
         <View style={{marginTop:10}}>
        <Button
            icon={{name: 'sc-youtube', type: 'evilicon',color:'white',size:30,}}
            buttonStyle={{height: 40, width: 200, borderRadius: 10,backgroundColor:'royalblue'}}
            onPress={ ()=> Linking.openURL('https://www.youtube.com/user/TheCLEANAIRForce') }
            title="WATCH US!"
        />
         <View style={{marginTop:10}}>
        <Button
         icon={{name: 'sc-telegram', type: 'evilicon',color:'white',size:30,}}
         buttonStyle={{height: 40, width: 200, borderRadius: 10,backgroundColor:'royalblue'}}
            onPress={ ()=> Linking.openURL('http://cleanairforce.org/') }
            title="VISIT US!"
        />
        </View>
        </View>
        </View>
        </View>
	   </View>
			 </View>
       </View>
       
			);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: 'royalblue',
  },
  tText:{
  	color:'royalblue',
  	paddingLeft:20,
  	fontWeight:'bold',
  	fontSize:20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
  sContainer:{
  	flex:1,
  },
  sText:{
  	flex:1,
  	color:'black',
  	paddingLeft:100,
  	fontWeight:'bold',
  	alignItems:'center',
  	justifyContent:'center',
    marginTop:50,

  },
  buttonStyle:{
    backgroundColor:'royalblue'
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
    Button:{
      marginTop:20
    }
  });