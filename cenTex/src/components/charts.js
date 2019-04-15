import React, {Component} from 'react'
import {View, Text} from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts'
 
class BarChartExample extends Component {
 
    render() {
 
        const fill = 'rgb(134, 65, 244)'
        const data   = [ 50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80 ]
 
        return (
            <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
                <BarChart
                    style={{ height: 200 }}
                    data={ data }
                    svg={{ fill }}
                    contentInset={{ top: 30, bottom: 30 }}
                    horizontal={true}
            >
                <Grid />
            </BarChart>
            </View>
            
        )
    }
 
}
export default BarChartExample;