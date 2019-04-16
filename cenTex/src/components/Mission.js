import React, {Component} from 'react';
import {SafeAreaView,Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';


export default class Mission extends Component{
   static navigationOptions = {
    header:null
  }
	render(){
		return(
      <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
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
        <View style={{marginTop:10}}> 
          <Text style={styles.tText}>MISSION</Text>
        </View>
        <View style={{marginTop:10}}>
            <Text style={{color:'black',paddingLeft:20,paddingRight:20,fontSize:16}}>The mission of the CLEAN AIR Force of Central Texas is to (1) be a liaison among all stakeholders,(2) coordinate the air quality planning of the private sector, (3) provide a forum for public discussion, (4) educate the public on air quality issues, and (5) manage air quality improvement programs in Central Texas focused on motivating the citizens, businesses and governments of this region to take actions to reduce air pollution to protect public health and the health of our economy.{'\n\n'}In service of our mission, we provide education and sponsor programs that improve and protect the air quality in our Central Texas community. 
        </Text>
        </View>
        <View style={{marginTop:20}}>
            <Text style={{color:'black',fontWeight:'bold',fontSize:18,paddingLeft:20}}>WE NEED YOUR SUPPORT Y'ALL!</Text>
        </View>
        <View style={{}}>
            <Text style={{color:'black',paddingLeft:20,paddingRight:20,fontSize:16}}>Help us continue to advocate for the positive health and economic impacts of improving and protecting the air quality in our Central Texas community. CLEAN AIR Force of Central Texas is a 501(c)(3) nonprofit and all donations are taxdeductible.</Text>  
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:80}}>
             <Button
            buttonStyle={{height: 40, width: 280, borderRadius: 10,backgroundColor:'royalblue'}}
            onPress={() => alert('Pressed')}
            title="DONATE"
        />
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
});