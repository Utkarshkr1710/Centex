import React, {Component} from 'react';
import {SafeAreaView,Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'

export default class Sources extends Component{
	render(){
	return(
    <SafeAreaView>
      <View style={{flex: 1,}}>
        <View style={{backgroundColor:'royalblue',flexDirection:'row',height:50}}>
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

			 <View style={styles.container}>
				<Text style={styles.tText}>DATA SOURCES</Text>
			 <View style={styles.cContainer}>
			 	<Text style={styles.uText}>The Content on this application is derived from the following sources.</Text>
			 <View style={styles.dContainer}>
			 	<Text style={styles.vText}>AIR QUALITY:</Text>
			 	<Text style={styles.wText}>airnow.gov{"\n"}
										   cleanairforce.org{"\n"}
										   epa.gov{"\n"}
										   tceq.texas.gov

			 	</Text>
			 <View style={styles.eContainer}>
			 	<Text style={styles.vText}>POLLEN:</Text>
			 	<Text style={styles.wText}>aaaai.org{"\n"}
										   aafa.org

			 	</Text>
			 <View style={styles.fContainer}>
			 	<Text style={styles.vText}>WEATHER:</Text>
			 	<Text style={styles.wText}>climate.gov{"\n"}
										   noaa.gov{"\n"}
										   weather.gov

			 	</Text>
			 <View style={styles.gContainer}>
			 	<Text style={styles.vText}>ENERGY TIPS:</Text>
			 	<Text style={styles.wText}>energy.gov{"\n"}
										   momscleanairforce.org{"\n"}
										   takecareoftexas.org

			 	</Text>
			 </View>
			 </View>
			 </View>
			 </View>
			 </View>
			</View>
      </View>
      </SafeAreaView>
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
  cContainer: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: 'royalblue',
  },
  uText:{
  	flex:2,
  	color:'black',
  	paddingLeft:20,
    fontSize:16
  },
  dContainer: {
    flex: 14,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: 'royalblue',
  },
  vText:{
  	paddingLeft:20,
  	fontWeight:'bold',
  	color:'black',
    fontSize:18
  },
  wText:{
  	paddingLeft:20,
  	color:'black',
    fontSize:16
  },
   eContainer: {
    flex: 12,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: 'royalblue',
  },
   fContainer: {
    flex: 10,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: 'royalblue',
  },
   gContainer: {
    flex: 8,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: 'royalblue',
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