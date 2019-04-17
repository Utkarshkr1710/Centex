import React from 'react'
import { View } from 'react-native'
import { BarChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop, Text } from 'react-native-svg'
import * as scale from 'd3-scale'

class BarChartView extends React.PureComponent {


    colorLabel(val){
        let colorCode = null;
        if(val > 0 && val <=25){
            colorCode = '#28b463';
        }
        else if(val > 25 && val <=50){
            colorCode = '#FFD700';
        }
        else if(val > 50 && val <=75){
            colorCode = '#ffa500';
        }
        else if(val > 75 && val >=100){
            colorCode = '#ff0000';
        }
        return colorCode;
    }

    render() {

        const data = [
            {
                value: 25,
                label: 'Low',
                name: 'TREE',
                svg: {
                    fill: '#28b463'
                }
            },
            {
                value: 75,
                label: 'High',
                name: 'GRASS',
                svg: {
                    fill: '#ffa500'
                }
            },
            {
                value: 25,
                label: 'Low',
                name: 'WEEDS',
                svg: {
                    fill: '#28b463'
                }
            },
            {
                value: 50,
                label: 'Moderate',
                name: 'MOLD',
                svg: {
                    fill: '#FFD700'
                }
            },
        ]

        

        const CUT_OFF = 20
        const Labels = ({  x, y, bandwidth, data }) => (
            data.map((item, index) => (
                <Text
                    key={ item.label }
                    x={ item.value > CUT_OFF ? x(0) + 10 : x(item.value) + 10 }
                    y={ y(index) + (bandwidth / 2) }
                    fontSize={ 14 }
                    fill={ item.value > CUT_OFF ? 'black' : 'black' }
                    alignmentBaseline={ 'middle' }
                >
                    {item.label}
                </Text>
            ))
        )

        return (
            <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
                <YAxis
                    data={ data }
                    yAccessor={ ({ index }) => index }
                    scale={ scale.scaleBand }
                    contentInset={{ top: 10, bottom: 10 }}
                    spacingInner={ 0.2 }
                    formatLabel={ (_, index) => data[ index ].name }
                />
               
                <BarChart
                    style={{ flex: 1, marginLeft: 8 }}
                    data={ data }
                    horizontal={ true }
                    yAccessor={ ({ item }) => item.value }
                    svg={{
                        fill: 'green'
                    }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacingInner={ 0.2 }
                    gridMin={ 0 }
                >
                    {/* <Grid /> */}
                    {/* <Gradient/> */}
                    <Labels/>
                </BarChart>
               
               
            </View>
        )
    }

}

export default BarChartView