import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
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
			 <View style={styles.container}>
       <View style={styles.text}>
				<Text style={styles.tText}>HEY Y'ALL!</Text>
        </View>
			 	<Text style={styles.sText}>CenTexAir is brought to you by CLEAN AIR Force{'\n'}of Central Texas. We proudly serve the Bastrop,{"\n"}Caldwell, Hays, Travis, and Williamson countries of{'\n'}Central Texas.{"\n\n"}Want to learn more? Click these links to{'\n'}get to know us!
			 	</Text>
        <View style={styles.missionView}>
        <TouchableOpacity
        onPress={()=>{this.props.navigation.navigate('Mission')}}>
          <Text style={styles.headerText1}>MISSION</Text>
          <Icons
              style={{paddingLeft:350,marginTop:-25}}
               name='right' size={30} color='white'/>
          </TouchableOpacity>
         </View>
         <View style={styles.faqView}>
        <TouchableOpacity
        onPress={()=>{this.props.navigation.navigate('Faq')}}>
          <Text style={styles.faqText}>FAQ</Text>
          <Icons
              style={{paddingLeft:370,marginTop:-35}}
               name='right' size={30} color='white'/>
          </TouchableOpacity>
    </View>
     <View style={styles.airView}>
        <TouchableOpacity
        onPress={()=>{this.props.navigation.navigate('Clean')}}>
          <Text style={styles.airText}>CLEAN AIR TIPS</Text>
          <Icons
              style={{paddingLeft:370,marginTop:-35}}
               name='right' size={30} color='white'/>
          </TouchableOpacity>
    </View>
     <View style={styles.contactView}>
        <TouchableOpacity
        onPress={()=>{this.props.navigation.navigate('Contact')}}>
          <Text style={styles.contactText}>CONTACT</Text>
          <Icons
              style={{paddingLeft:370,marginTop:-35}}
               name='right' size={30} color='white'/>
          </TouchableOpacity>
    </View>
       </View>
         
       
			);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
    flexDirection:'column'
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
  sText:{
  	flex:1,
  	color:'black',
  	paddingLeft:20,
    fontSize:16,
  	alignItems:'center',
  	justifyContent:'center'

  },
   headerText1:{
      color:'white',
      //textAlign:'center',
      fontSize:20
     
    },
    missionView:{
    	
      height:50,
      backgroundColor:'royalblue',
      padding:10,
      paddingLeft:20
      
    },
    faqView:{
    width:430,	
      height:50,
      marginTop:10,
      backgroundColor:'royalblue',
     
    },
    faqText:{
    	color:'white',
    	fontSize:20,
    	padding:10,
    	paddingLeft:20
    },
    airView:{
    	marginTop:10,
    	width:430,	
      height:50,
      backgroundColor:'royalblue',
    },
    airText:{
    		color:'white',
    	fontSize:20,
    	padding:10,
    	paddingLeft:20
    },
    contactView:{
    	marginBottom:200,
    	width:430,	
      height:50,
      marginTop:10,
      backgroundColor:'royalblue',
    },
	contactText:{
			color:'white',
    	fontSize:20,
    	padding:10,
    	paddingLeft:20
	},
  c:{
    marginTop:20,
  }

  });