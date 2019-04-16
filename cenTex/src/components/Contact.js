import React, {Component} from 'react';
import {SafeAreaView,Platform, StyleSheet, Text, View,KeyboardAvoidingView,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import { Button } from 'react-native-elements';

export default class Contacts extends Component{
   static navigationOptions = {
    header:null
  }
  constructor(props){
    super(props);
        this.state={
                    name:'',
                    email: '',
                    comment:'',
                  }
  }

  /**componentDidMount(){
      this._loadInitialState().done();
  }

  /**_loadInitialState = async() => {

      var value = await AsyncStorage.getItem('user');
      if(value !== null){
          this.props.navigation.navigate('profilr');
        }

}  */
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
          <Text style={styles.tText}>CONTACT</Text>
        </View>
        <View>
          <Text style={styles.conText}>Let's get in touch! You can reach us by mail, phone, email, or the contact form below. We'd love to hear from you!</Text>
           <Text style={styles.addText}><Text style={{fontSize:20,fontWeight:'bold'}}>ADDRESS:{'\n'}</Text>CLEAN AIR Force of Central Texas{'\n'}P.O. Box 29295{'\n'}Austin, TX 78755</Text>
           <Text style={styles.phoneText}><Text style={{fontSize:20,fontWeight:'bold'}}>PHONE:{'\n'}</Text>(512)225-7780</Text>
             <Text style={styles.emailText}><Text style={{fontSize:20,fontWeight:'bold'}}>EMAIL:{'\n'}</Text>staff@cleanairforce.org</Text>
             <Text style={styles.form}>CONTACT FORM:</Text>
             <KeyboardAvoidingView behaviour='padding' style={styles.wrapper}>

            <TextInput
                    style={styles.TextInput} placeholder='Name' placeholderTextColor = "royalblue"
 
                    onChangeText={(name)=> this.setState({name})}
                    underlineColorAndroid='transparent'
            />
            <TextInput
                    style={styles.TextInput} placeholder='Email'placeholderTextColor = "royalblue"
                    onChangeText={(email)=> this.setState({email})}
                    underlineColorAndroid='transparent'
            />
            <TextInput
                      style={styles.TextInput} placeholder='Your comment(s)'placeholderTextColor = "royalblue"
                    onChangeText={(comment)=> this.setState({comment})}
                    underlineColorAndroid='transparent'
            />
            <View style={{alignItems:'center',justifyContent:'center'}}>

            <Button
            buttonStyle={{height: 40, width: 280, borderRadius: 10,backgroundColor:'royalblue',}}
            onPress={() => this.submit}
            title="SUBMIT"
        />
            </View>
             </KeyboardAvoidingView>
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
    conText:{
      color:'black',
      fontSize:16,
      margin:20,
    },
    addText:{
      color:'black',
      paddingLeft:20,
      fontSize:16
    },
    phoneText:{
      color:'black',
      marginTop:20,
      paddingLeft:20,
      fontSize:16,
    },
    phone:{
      color:'black',
      fontSize:16,
    },
    emailText:{
      color:'black',
      fontSize:16,
      marginTop:20,
      paddingLeft:20
      },
    email:{
      color:'black',
      fontSize:16,
      margin:20
    },
    form:{
      color:'black',
      fontSize:18,
      fontWeight:'bold',
      margin:20
    },
    TextInput:{
    alignSelf:'stretch',
    padding:16,
    marginBottom:20,
    backgroundColor:'#fff',
                   //placeholderTextColor:"#9a73ef"

  },
  


});