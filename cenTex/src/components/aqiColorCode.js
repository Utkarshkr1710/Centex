import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
export default class AqiColorCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   tableHead: ['AQI Value', 'Color Code'],
      tableData: [
        ['AQI Value', 'Color Code','Label'],
        ['0-50', <View style={{ width: 50,height: 50,backgroundColor: '#28b463',borderRadius: 30, alignSelf: 'center' }} />, 'GOOD'],

        ['51-100', <View style={{ width: 50,height: 50,backgroundColor: 'gold',borderRadius: 30, alignSelf: 'center' }} />, 'MODERATE'],

        ['101-150', <View style={{ width: 50,height: 50,backgroundColor: 'orange',borderRadius: 30, alignSelf: 'center' }} />, 'UNHEALTHY FOR\nSENSITIVE GROUPS'],

        ['151-200', <View style={{ width: 50,height: 50,backgroundColor: 'red',borderRadius: 30, alignSelf: 'center' }} />, 'UNHEALTHY'],

        ['201-300', <View style={{ width: 50,height: 50,backgroundColor: '#800080',borderRadius: 30, alignSelf: 'center' }} />, 'VERY UNHEALTHY'],

        ['301-500', <View style={{ width: 50,height: 50,backgroundColor: '#800000',borderRadius: 30, alignSelf: 'center' }} />, 'HAZARDOUS']
        
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
        <ScrollView>
            <View style={styles.container}>
        <Table borderStyle={{borderWidth: 0, borderColor: '#eee', alignContent: 'center',}}>
          
          <Rows data={state.tableData} textStyle={styles.text} style={{  }}/>
        </Table>
      </View>
        </ScrollView>
      
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#eee' },

  head: { height: 40, backgroundColor: '#eee', color: 'white', fontWeight:'bold' },
  text: { margin: 6, textAlign: 'center', fontWeight: 'bold' },

  text2: { margin: 6, fontWeight: 'bold' }
});