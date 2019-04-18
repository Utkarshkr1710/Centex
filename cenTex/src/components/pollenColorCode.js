import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
// import console = require('console');
 
export default class PollenColorCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [{
        title: 'GRASS',
        tableData: [
          ['Value', 'Color Code','Label'],
          ['1-4', <View style={{ width: 50,height: 50,backgroundColor: '#28b463',borderRadius: 25, alignSelf: 'center' }} />, 'LOW'],
  
          ['5-19', <View style={{ width: 50,height: 50,backgroundColor: 'gold',borderRadius: 25, alignSelf: 'center' }} />, 'MODERATE'],
  
          ['20-199', <View style={{ width: 50,height: 50,backgroundColor: 'orange',borderRadius: 25, alignSelf: 'center' }} />, 'HIGH'],
  
          ['>200', <View style={{ width: 50,height: 50,backgroundColor: 'red',borderRadius: 25, alignSelf: 'center' }} />, 'VERY HIGH']         
        ]
        },

        {
            title: 'TREES',
            tableData: [
              ['Value', 'Color Code','Label'],
              ['1-14', <View style={{ width: 50,height: 50,backgroundColor: '#28b463',borderRadius: 25, alignSelf: 'center' }} />, 'LOW'],
      
              ['15-89', <View style={{ width: 50,height: 50,backgroundColor: 'gold',borderRadius: 25, alignSelf: 'center' }} />, 'MODERATE'],
      
              ['90-1499', <View style={{ width: 50,height: 50,backgroundColor: 'orange',borderRadius: 25, alignSelf: 'center' }} />, 'HIGH'],
      
              ['>1500', <View style={{ width: 50,height: 50,backgroundColor: 'red',borderRadius: 25, alignSelf: 'center' }} />, 'VERY HIGH']         
            ]
            },

            {
                title: 'WEEDS',
                tableData: [
                  ['Value', 'Color Code','Label'],
                  ['1-9', <View style={{ width: 50,height: 50,backgroundColor: '#28b463',borderRadius: 25, alignSelf: 'center' }} />, 'LOW'],
          
                  ['10-49', <View style={{ width: 50,height: 50,backgroundColor: 'gold',borderRadius: 25, alignSelf: 'center' }} />, 'MODERATE'],
          
                  ['50-499', <View style={{ width: 50,height: 50,backgroundColor: 'orange',borderRadius: 25, alignSelf: 'center' }} />, 'HIGH'],
          
                  ['>500', <View style={{ width: 50,height: 50,backgroundColor: 'red',borderRadius: 25, alignSelf: 'center' }} />, 'VERY HIGH']         
                ]
                },


                {
                    title: 'MOLD',
                    tableData: [
                      ['Value', 'Color Code','Label'],
                      ['1-6499', <View style={{ width: 50,height: 50,backgroundColor: '#28b463',borderRadius: 25, alignSelf: 'center' }} />, 'LOW'],
              
                      ['6500-12999', <View style={{ width: 50,height: 50,backgroundColor: 'gold',borderRadius: 25, alignSelf: 'center' }} />, 'MODERATE'],
              
                      ['51300-4999', <View style={{ width: 50,height: 50,backgroundColor: 'orange',borderRadius: 25, alignSelf: 'center' }} />, 'HIGH'],
              
                      ['>50000', <View style={{ width: 50,height: 50,backgroundColor: 'red',borderRadius: 25, alignSelf: 'center' }} />, 'VERY HIGH']         
                    ]
                    },
    
    ]
    }
  }
 
  render() {
    const state = this.state;
    return (
        <ScrollView>
            <View>

            {
                state.data.map((data, i) => 

                    <View style={styles.container} key={i}>
                        <Text style={{
                             fontWeight: "bold",
                             fontSize: 20,
                             color: "black",
                             marginHorizontal: 20,
                             marginVertical: 10,
                             textAlign: 'center'
                        }}>
                            {data.title}
                        </Text>
                        <Table borderStyle={{borderWidth: 0, borderColor: '#eee', alignContent: 'center',}}>
                
                            <Rows data={data.tableData} textStyle={styles.text} style={{  }}/>
                        </Table>
                    </View>
                    )
            }
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