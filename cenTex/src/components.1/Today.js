// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View,Linking,TouchableOpacity} from 'react-native';
// import Icons from 'react-native-vector-icons/AntDesign';
// import { Button,Header} from 'react-native-elements';
// import Overlay from 'react-native-modal-overlay';


// export default class Profile extends Component{
//    state = {modalVisible: false,
//             modVisible:false
//             }

//   showOverlay() {
//     this.setState({modalVisible: true})
//   }
//  shOverlay() {
//     this.setState({modVisible: true})
//   }
//   hideOverlay() {
//     this.setState({modalVisible: false})
//   }
//    hidOverlay() {
//     this.setState({modVisible: false})
//   }
//    onClose = () => this.setState({ modalVisible: false,modVisible:false});
//    //onClose = () => this.setState({ modVisible:false});

//   render(){
//     return(
//        <View style={{flex: 1,}}>
//         <View style={styles.headerTextView}>
//           <TouchableOpacity
//         onPress={()=>{this.props.navigation.navigate('Profile')}}>
//           <Text style={styles.headerText1}>CenTex AIR</Text>
//             <Icons
//               style={{paddingLeft:275,marginTop:-28}}
//                name='down' size={30} color='white'/>
//           </TouchableOpacity>
//         </View>
//        <View style={styles.airView}>
//           <TouchableOpacity>
//           <Text style={styles.airText}>AIR QUALITY</Text>
//           <Button
//             icon={{name: 'infocirlceo', type: 'antdesign',color:'white',size:20}}
//             buttonStyle={{height: 40, width:50,marginTop:-55,backgroundColor:'royalblue',margin:160,}}
//             onPress={this.showOverlay.bind(this)}
//         />
//           </TouchableOpacity>
//         </View>
//          <View style={styles.pollenView}>
//           <TouchableOpacity>
//           <Text style={styles.pollenText}>POLLEN</Text>
//           <Button
//             icon={{name: 'infocirlceo', type: 'antdesign',color:'white',size:20}}
//             buttonStyle={{height: 40, width:50,marginTop:-54,backgroundColor:'royalblue',margin:105,}}
//                         onPress={this.shOverlay.bind(this)}

//         />
//           </TouchableOpacity>
//         </View>
//          <View style={styles.weatherView}>
//           <TouchableOpacity>
//           <Text style={styles.weatherText}>WEATHER</Text>
//           </TouchableOpacity>
//         </View>
//         <Overlay visible={this.state.modalVisible} onClose={this.onClose} closeOnTouchOutside animationType="zoomIn"
//             containerStyle={{backgroundColor: 'rgba(37, 8, 10, 0.78)'}} childrenWrapperStyle={{borderRadius:10,backgroundColor: '#eee',height:200}} >
//           <Text style={{fontWeight:'bold', fontSize: 20,color:'royalblue'}}>AIR QUALITY INDEX [AQI]</Text>
//           //<View style={{borderBottomWidth:1, width: 100, paddingTop: 10}}></View>
         
//           <Text style={{fontWeight:'300', fontSize: 16, paddingTop: 20, textAlign:'center',color:'black'}}>The Environmental Protection{'\n'}Agency air quality index is a color coded{'\n'}guide used to help individuals{'\n'}understand how healthy the air quality may be on particular day. The table.{'\n'} below shows each air quality health{'\n'}level and the matching color indicator.{'\n\n'}
//       </Text>
//        <View style={{flex: 1, flexDirection: 'column'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'green',borderRadius:10}}></View>
//         <View style={{width: 50, height: 50, backgroundColor: 'gold',borderRadius:10}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'orange',borderRadius:10}} />
//          <View style={{width: 50, height: 50, backgroundColor: 'red',borderRadius:10}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'mediumpurple',borderRadius:10}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'brown',borderRadius:10}} />
//       </View>

//         </Overlay>
//          <Overlay visible={this.state.modVisible} onClose={this.onClose} closeOnTouchOutside animationType="zoomIn"
//           containerStyle={{backgroundColor: 'rgba(37, 8, 10, 0.78)',height:200}} childrenWrapperStyle={{borderRadius:10,backgroundColor: '#eee',width:390}} >
//           <Text style={{fontWeight:'bold', fontSize: 20,color:'royalblue'}}>POLLEN</Text>
          
         
//           <Text style={{fontWeight:'300', fontSize: 16, paddingTop: 20, textAlign:'center',color:'black'}}>The National Allergy Bureau pollen{'\n'}count is a color-coded guide used to{'\n'}help individuals understand the{'\n'}quantity of airborne pollen and mold{'\n'}spores on a particular day. The tables{'\n'}below show each concentration level{'\n'}and the matching color indicator.{'\n\n'}
//           </Text>

//        <View style={{paddingLeft:10}}><Text style={{fontWeight:'bold',color:'black',margin:10}}>GRASS</Text></View>
//        <View style={{flex: 1, flexDirection: 'column'}}>
//        <View style={{width: 30, height: 30, backgroundColor: 'green',borderRadius:10}}/>
//        <View style={{width: 30, height: 30, backgroundColor: 'gold',borderRadius:10}} />
//        <View style={{width: 30, height: 30, backgroundColor: 'orange',borderRadius:10}} />
//        <View style={{width: 30, height: 30, backgroundColor: 'red',borderRadius:10}} />
//        </View>
//        <View style={{paddingLeft:10}}><Text style={{fontWeight:'bold',color:'black'}}>GRASS</Text></View>
//        <View style={{flex: 1, flexDirection: 'column'}}>
//        <View style={{width: 30, height: 30, backgroundColor: 'green',borderRadius:10}}/>
//        <View style={{width: 30, height: 30, backgroundColor: 'gold',borderRadius:10}} />
//        <View style={{width: 30, height: 30, backgroundColor: 'orange',borderRadius:10}} />
//        <View style={{width: 30, height: 30, backgroundColor: 'red',borderRadius:10}} />
//        </View>
//        <View style={{paddingLeft:10}}><Text style={{fontWeight:'bold',color:'black'}}>GRASS</Text></View>
//        <View style={{flex: 1, flexDirection: 'column'}}>
//        <View style={{width: 30, height: 30, backgroundColor: 'green',borderRadius:10}}/>
//        <View style={{width: 30, height: 30, backgroundColor: 'gold',borderRadius:10}} />
//        <View style={{width: 30, height: 30, backgroundColor: 'orange',borderRadius:10}} />
//        <View style={{width: 30, height: 30, backgroundColor: 'red',borderRadius:10}} />
//        </View>
//         </Overlay>
//       </View>
        
//       );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop:10
//     //justifyContent: 'center',
//     //alignItems: 'center',
//     //backgroundColor: 'royalblue',
//   },
//   tText:{
//     color:'royalblue',
//     paddingLeft:20,
//     fontWeight:'bold',
//     fontSize:20,
//     borderBottomColor: '#bbb',
//     borderBottomWidth: 1,
//   },
//   sContainer:{
//     flex:1,
//   },
//   sText:{
//     flex:1,
//     color:'black',
//     paddingLeft:100,
//     fontWeight:'bold',
//     alignItems:'center',
//     justifyContent:'center',
//     marginTop:50,

//   },
//   buttonStyle:{
//     backgroundColor:'royalblue'
//   },
//    headerText1:{
//       color:'white',
//       textAlign:'center',
//       fontSize:22,
//       fontWeight:'bold'
     
//     },
//     headerTextView:{
//       height:50,
//       backgroundColor:'royalblue',
//       justifyContent:'center',
//     },
//     airView:{
//        height:50,
//       backgroundColor:'royalblue',
//       justifyContent:'center',
//     },
//     airText:{
//        color:'white',
//       fontSize:22,
//       fontWeight:'bold',
//       margin:20,
//       marginTop:170,
     
//     },
//     pollenView:{
//        height:50,
//        marginTop:150,
//       backgroundColor:'royalblue',
//       justifyContent:'center',
//     },
//     pollenText:{
//        color:'white',
//       fontSize:22,
//       fontWeight:'bold',
//       margin:20,
//       marginTop:110,
     
//     },
//     weatherView:{
//              height:50,
//        marginTop:180,
//       backgroundColor:'royalblue',
//       justifyContent:'center',
//     },
//     weatherText:{
//       color:'white',
//       fontSize:22,
//       fontWeight:'bold',
//       margin:20,
//       marginTop:28,
//     }
//   });

import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Today </Text>
      </View>
    );
  }
}
