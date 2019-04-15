import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,ScrollView, PermissionsAndroid} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native';
import { Button,Divider } from 'react-native-elements';


export default class Profile extends Component{

  
  state = {
    isOnDefaultToggleSwitch: false,
    isOnNotifyToggleSwitch: true,
    isOnBadgeToggleSwitch: true,
  };

  async componentDidMount(){
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({
        isOnDefaultToggleSwitch: true
     })
      
    } 
  }

  async requestPermission(){

        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'CentTex Location Permission',
              message:
                'cenTex App want your area location.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      
           console.log('You can use the location');
           this.setState({
             isOnDefaultToggleSwitch: true
           })
           alert('location permission already enable.')
            
          } else {
            console.log('Location permission denied');
            this.setState({
              isOnDefaultToggleSwitch: false
            })
            
          }
          
        } catch (err) {
          console.warn(err);
        }  
      
  }



  onToggleNotification(isOn){
    this.setState({
      isOnNotifyToggleSwitch: !this.state.isOnNotifyToggleSwitch
    })

    if(!this.state.isOnNotifyToggleSwitch)
    alert('Notifications enabled.')
    else
      alert('Notifications Disabled.')
  }


  onToggleBadge(isOn){
    this.setState({
      isOnBadgeToggleSwitch: !this.state.isOnBadgeToggleSwitch
    })

    if(!this.state.isOnBadgeToggleSwitch)
    alert('Badges enabled.')
    else
      alert('Badges Disabled.')
  }

  

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
          <Text style={styles.tText}>MY PROFILE</Text>
        </View>
        <View style={styles.togglecontainer}>
            
        <ToggleSwitch
          label="LOCATION SERVICES"
          onColor="limegreen"
          isOn={this.state.isOnDefaultToggleSwitch}
          onToggle={() => this.requestPermission() }
        />
        </View>
         <View style={styles.togglecontainer}>
        <ToggleSwitch
          label="PUSH NOTOFICATION"
          onColor="limegreen"
          isOn={this.state.isOnNotifyToggleSwitch}
          onToggle={() => this.onToggleNotification() }
        />
        </View>

        <View style={styles.togglecontainer}>
        <ToggleSwitch
          label="BADGES"
          onColor="limegreen"
          isOn={this.state.isOnBadgeToggleSwitch}
          onToggle={() => this.onToggleBadge() }
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