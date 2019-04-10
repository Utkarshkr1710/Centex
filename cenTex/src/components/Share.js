import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Linking,TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements'


export default class Share extends Component{
	constructor() {
    super();
    this.state = {
      text: "Hello "
    };
    this.handleChange = this.handleChange.bind(this);
  }
  onPress = () => {
    console.log("current ==> ", this.state);
    alert(this.state.text);
  };
  handleChange = typedText => {
    console.log("update => ", typedText);
    this.setState(
      {
        text: typedText
      }
    );
  };
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
				<Text style={styles.tText}>SHARE</Text>
			 	<Text style={styles.sText}>          SPREAD THE WORD AND{"\n"}
			 						SHARE YOUR LOVE OF CLEAN AIR!
			 	</Text>
			 <View style={{marginTop:20,alignItems:'center',justifyContent:'center'}}>
	   	<Icons name='heart' size={70} color='black'/>
      </View>
	   	 <View style={{marginTop:20,justifyContent:'center',alignItems:'center'}}>
        <Button
     		icon={{name: 'sc-facebook', type: 'evilicon',color:'white',size:30}}
     		buttonStyle={{height: 40, width: 200, borderRadius: 10,backgroundColor:'royalblue'}}
             onPress={ ()=> Linking.openURL('https://www.facebook.com/CLEAN-AIR-Force-of-Central-Texas-60700478852/') }
            title="LIKE US!"
         
        />
         <View style={{marginTop:10,justifyContent:'center',alignItems:'center'}}>
        <Button
        icon={{name: 'sc-twitter', type: 'evilicon',color:'white',size:30,}}
        buttonStyle={{height: 40, width: 200, borderRadius: 10,backgroundColor:'royalblue'}}
             onPress={ ()=> Linking.openURL('https://twitter.com/cleanairforcetx?lang=en') }
            title="TWEET US!"
 
        />
         <View style={{marginTop:10}}>
        <Button
        icon={{name: 'mail', type: 'antdesign',color:'white',size:30,}}
        buttonStyle={{height: 40, width: 200, borderRadius: 10,backgroundColor:'royalblue'}}
           onPress={() => Linking.openURL('mailto:support@example.com?subject=CenTexAir&body=HOWDY! I think you would like the CenTexAIR app! It gives you all of the important infomation you need to be air aware,including the air quality, the pollen count, and the weather report for your Central Texas neighborhood! It is also free, so check it out!') }
            title="EMAIL A FRIEND!"
        />
         <View style={{marginTop:10}}>
        <Button
        icon={{name: 'mobile1', type: 'antdesign',color:'white',size:30,}}
        buttonStyle={{height: 40, width: 200, borderRadius: 10,backgroundColor:'royalblue'}}
            onPress={this.onPress}
            title="TEXT A FRIEND!"
        />
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
    marginTop:55
  },
  sText:{
  	marginTop:50,
  	color:'black',
  	paddingLeft:100,
  	fontWeight:'bold',
  	alignItems:'center',
  	justifyContent:'center'

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
  });