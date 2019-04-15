import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,Button} from 'react-native';
import ActionBar from 'react-native-action-bar';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import Icons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/AntDesign';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    headerLeft:<Icon name='setting' size={30} color='white'
              onPress={()=> alert('left button')}
    />,          
    headerTitle:'CenTex Air' ,
    headerRight: <Icons name='location' size={30} color='white'
        onPress={()=> alert('right button')}
   />,
      
    headerStyle: {
      backgroundColor: 'royalblue',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign:"center", 
        flex:1 
    },
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.MainContainer}>
       <StatusBar 
        barStyle = "light-content" 
        // dark-content, light-content and default
        hidden = {false}
        //To hide statusBar
        backgroundColor = "royalblue"
        //Background color of statusBar
        translucent = {false}
        //allowing light, but not detailed shapes
        networkActivityIndicatorVisible = {true}
        />
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer :{
    justifyContent: 'center',
    alignItems:'center',
    flex:1,
  },
   container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        //justifyContent:'center'
  },
  bar:{
        backgroundColor:'royalblue',
        alignItems:'center',
        justifyContent:'center',
  },
   cont: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height:100
  },
});
     ///<Button
   //     title="Go to Jane's profile"
 //       onPress={() => navigate('Profile', {name: 'Jane'})}
      ///>
    //);
  //}
//}