import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Linking,TouchableOpacity,ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import { Button,Header} from 'react-native-elements';


export default class Connect extends Component{
	render(){
		return(
      <ScrollView>
        <View style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'royalblue',flexDirection:'row',height:50}}>
        <View style={{marginTop:5}}>
        <Button
            icon={{name: 'arrowleft', type: 'antdesign',color:'white',size:24}}
            buttonStyle={{width:'60%',backgroundColor:'transparent'}}
            onPress={() =>this.props.navigation.openDrawer()}
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
        <View style={{marginTop:10}}>
          <Text style={styles.tText}>CONNECT</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.sText}>          Y'ALL WANNA BE FRIENDS{"\n"}CONNECT WITHUS ON SOCIAL MEDIA!</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
              <Icons name='team' size={70} color='black'/>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
              <Button
        icon={{name: 'sc-facebook', type: 'evilicon',color:'white',size:30}}
        buttonStyle={{height: 40, width: 200, borderRadius: 10,backgroundColor:'royalblue'}}
                 onPress={ ()=> Linking.openURL('https://www.facebook.com/CLEAN-AIR-Force-of-Central-Texas-60700478852/') }
            title="FRIEND US!"
        />
        <Button
             icon={{name: 'sc-twitter', type: 'evilicon',color:'white',size:30,}}
             buttonStyle={{height: 40, width: 200, borderRadius: 10,backgroundColor:'royalblue',marginTop:20}}
             onPress={ ()=> Linking.openURL('https://twitter.com/cleanairforcetx?lang=en') }
            title="FOLLOW US!"
        />
         <Button
            icon={{name: 'sc-youtube', type: 'evilicon',color:'white',size:30,}}
            buttonStyle={{height: 40, width: 200, borderRadius: 10,backgroundColor:'royalblue',marginTop:20}}
            onPress={ ()=> Linking.openURL('https://www.youtube.com/user/TheCLEANAIRForce') }
            title="WATCH US!"
        />
        <Button
         icon={{name: 'sc-telegram', type: 'evilicon',color:'white',size:30,}}
         buttonStyle={{height: 40, width: 200, borderRadius: 10,backgroundColor:'royalblue',marginTop:20}}
            onPress={ ()=> Linking.openURL('http://cleanairforce.org/') }
            title="VISIT US!"
        />
        </View>
        </View>

      </ScrollView>
       
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
  	fontWeight:'bold',
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