import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'

export default class Terms extends Component{
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
				<Text style={styles.tText}>TERMS OF USE</Text>
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