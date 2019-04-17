import React, {Component} from 'react';
import { SafeAreaView,StyleSheet, Text, View, TouchableWithoutFeedback,Image,Dimensions,ScrollView,BackHandler,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Collapsible from 'react-native-collapsible';
import SimpleAccordion from 'react-native-simple-accordian';
const deviceWidth = Dimensions.get('window').width

const ozone = 'Ozone is a form of oxygen that has three atoms, instead of the usual two, which is why its also sometimes written using the chemical symbol, O3. Ozone is a colorless, odorless atmospheric gas thats formed by a chemical reaction between nitrogen  oxides(NOx)and volatile organic compounds in sunlight at low altitudes to form ground-level ozone, which is the main component of smog.';
const ground= 'Ground-level ozone is the most prevalent air pollutant in Texas and the nation. Ground-level ozone is often one of several pollutants that make up "smog," which you may recognize as the reddish-brown haze that forms when air quality is particularly poor. Howerver, because ozone itself is colorless, the air can clear even when high ozone concentrations are present.';
const season= 'When temperatures are high, sunshine is strong, and winds are weak, ground-level ozone can accumulate to unhealthy levels. Because of this, ozone season in Central Texas runs from March through October every year.';
const affect= 'High concentrations of ozone can cause shortness of breath, coughing, wheezing, headaches, nausea, eye and throat irritation, and lung damage. People who suffer from lung diseases like bronchits, pneumonia, emphysema, asthma, and colds have even more trouble breathing where the air is polluted. Additionally, high ozone concentrations can cause damage to vegetation and many common materials we use.'
const risk  = 'The regions ground-level ozone levels are high enough, at times, for the Environmental Protection Agency to consider them "unhealthy for sensitive groups." These sensitive groups include: \u2022 children andteenagers (0-18) \u2022 older adults (65+) \u2022 other adults (18-64) with lung diseases \u2022 people who are active outdoors, including outdoor workers More than 750,000 Central Texax residents fall into'
const action= 'An Ozone Action Day is declared when weather conditions are likely to combine with pollutions emissions to form high levels of ozone near the ground that may cause harmful health effects. People and businesses should take action to reduce emissions of ozone-causing pollutants.'
import * as _ from 'lodash'

const sampleAccordianData = [
  {
    title: 'WHAT IS OZONE? ',
    content: ozone
  },
  {
    title: 'WHY IS GROUND-LEVEL OZONE SO BAD?',
    content: ground
  },
  {
    title: 'WHEN IS OZONE SEASON',
    content: season
  },
   {
    title: 'HOW DOES OZONE AFFECT PUBLIC HEALTH?',
    content: affect
  },
   {
    title: 'WHO IS AT RISK?',
    content: risk
  },
   {
    title: 'WHAT IS AN OZONE ACTION DAY?',
    content: action
  },
   {
    title: 'WHAT CONTRIBUTES TO DAYS WHEN GROUND-LEVEL OZONE IS HIGH?',
    content: ozone
  },
   {
    title: 'HOW CAN I PREVENT EXPOSURE ON DAYS WHEN GROUND-LEVEL OZONE IS HIGH?',
    content: ozone
  },
   {
    title: 'WHAT CAN I DO TO IMPROVE AIR QUALITY?',
    content: ozone
  },
  ];

  export default class Faq extends Component{
   static navigationOptions = {
    header:null
  };

  constructor(props){
        super(props)
        this.state = ({
            content:'',
            open: false,
        });
    }


  onChangeAccordian(section) {
    this.setState({ open: section });

  }

  renderHeader(section, i, isOpen) {
    return (
      <View style={{backgroundColor:'royalblue',flexDirection:'row'}}>
        <Text style={[styles.headerText,{width:deviceWidth-80,padding:10,textAlign:'left',color:'white',}]}>{section.title}</Text>
        
      </View>
    );
  }

  renderContent(section, i, isOpen) {
    return (
      <View style={styles.content}>
        <Text style={styles.txt}>{section.content}</Text>
      </View>
    );
  }
  render(){
    return(

       <View style={{flex: 1,}}>
          <View style={{backgroundColor:'royalblue',flexDirection:'row',height:50}}>
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
       <View style={styles.ccontainer}>
        <Text style={styles.tText}>FAQ</Text>
      </View>
       <View style={styles.cocontainer}>
          <ScrollView contentContainerStyle={{ paddingTop: 30 }}> 
            <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
            </View>
          </Collapsible>
            <SimpleAccordion
              style= {{
                borderRadius:25,
                marginTop:10,
                backgroundColor:'#ffffff',
                justifyContent:'center'
              }}
              activeSection={this.state.open}
              sections={sampleAccordianData}
              touchableComponent={TouchableWithoutFeedback}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              duration={500}
              onChange={this.onChangeAccordian.bind(this)}
            />
          </ScrollView>
        </View>
      </View>
      );
  }
}

 const styles = StyleSheet.create({
   headerTextView:{
      height:50,
      backgroundColor:'royalblue',
      justifyContent:'center'
    },
    headerText1:{
      color:'white',
      fontSize:22,
      fontWeight:'bold',
      textAlign:'center',
      marginTop:10
    },
    ccontainer:{
      marginTop:10
    },
    tText:{
    color:'royalblue',
    paddingLeft:20,
    fontWeight:'bold',
    fontSize:20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
  cocontainer: {
      marginBottom:80,
    backgroundColor: 'white',
    flexDirection:'column',
    justifyContent:'space-around'
  },
  content: {
      padding: 20,
      backgroundColor: 'white',
    },
    txt:{
      color:'black',
      fontSize:16,
      justifyContent:'center'
    },
     title: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: '300',
      marginBottom: 20,
      color:'#ffffff'
    },

})