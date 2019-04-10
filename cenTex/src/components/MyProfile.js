import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native';
import { Button,Divider } from 'react-native-elements';



export default class Profile extends Component{

	 state = {
    isOnDefaultToggleSwitch: true,
    isOnLargeToggleSwitch: false,
    isOnBlueToggleSwitch: false,
  };

  onToggle(isOn){
    alert('Changed to ' + isOn)
  }
  render(){
    return(
      <ScrollView>
        <View style={{flex:1}}>
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
        <View style={{marginTop:10}}>
          <Text style={styles.tText}>MY PROFILE</Text>
        </View>
        <View style={styles.togglecontainer}>
            
        <ToggleSwitch
          label="LOCATION SERVICES"
          onColor="limegreen"
          isOn={this.state.isOnDefaultToggleSwitch}
          onToggle={isOnDefaultToggleSwitch => {
            this.setState({ isOnDefaultToggleSwitch });
            this.onToggle(isOnDefaultToggleSwitch);
          }}
        />
        </View>
         <View style={styles.togglecontainer}>
        <ToggleSwitch
          label="PUSH NOTOFICATION"
          onColor="limegreen"
          isOn={this.state.isOnLargeToggleSwitch}
          onToggle={isOnLargeToggleSwitch => {
            this.setState({ isOnLargeToggleSwitch });
            this.onToggle(isOnLargeToggleSwitch);
          }}
        />
        </View>

        <View style={styles.togglecontainer}>
        <ToggleSwitch
          label="BADGES"
          onColor="limegreen"
          isOn={this.state.isOnBlueToggleSwitch}
          onToggle={isOnBlueToggleSwitch => {
            this.setState({ isOnBlueToggleSwitch });
            this.onToggle(isOnBlueToggleSwitch);
          }}
        />
        </View>
        <View style={{marginTop:20,justifyContent:'center',alignItems:'center'}}>
              <Text style={styles.sText}>EARN POINTS JUST FOR CHECKING CENTEX AIR,{"\n"}    TAKING THE DAILY CHALLENGE, AND MORE!</Text>
        </View>
        <View style={{marginTop:20,justifyContent:'center',alignItems:'center'}}>
              <View style={{flexDirection:'row'}}>
        <Image source={require('../Resources/images/thanks.png')} style={{height:100,width:100,borderRadius:60}}/>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,color:'black'}}>Get this badge by connecting{'\n'}with us on social media!</Text>
             </View>
        </View>

        </View>
        <View style={{marginTop:20,justifyContent:'center',alignItems:'center'}}>
              <View style={{flexDirection:'row'}}>
        <Image source={require('../Resources/images/thanks.png')} style={{height:100,width:100,borderRadius:60}}/>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,color:'black'}}>Get this badge by connecting{'\n'}with us on social media!</Text>
             </View>
        </View>
        
        </View>
        <View style={{marginTop:20,justifyContent:'center',alignItems:'center'}}>
              <View style={{flexDirection:'row'}}>
        <Image source={require('../Resources/images/thanks.png')} style={{height:100,width:100,borderRadius:60}}/>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,color:'black'}}>Get this badge by connecting{'\n'}with us on social media!</Text>
             </View>
        </View>
        
        </View>
        <View style={{marginTop:20,justifyContent:'center',alignItems:'center'}}>
              <View style={{flexDirection:'row'}}>
        <Image source={require('../Resources/images/thanks.png')} style={{height:100,width:100,borderRadius:60}}/>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,color:'black'}}>Get this badge by connecting{'\n'}with us on social media!</Text>
             </View>
        </View>
        
        </View>
        </View>

      </ScrollView>

    );
  }
}

		

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
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
  	marginTop:20

  },
  sText:{
  	color:'black',
  	fontWeight:'bold',
  	
  },
topMenu: {
    height: 53,
    backgroundColor: '#64b5f6',
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
    togglecontainer:{
      backgroundColor:'#D3D3D3',
      height:50,
      marginTop:10,
      justifyContent:'center'
    }
});