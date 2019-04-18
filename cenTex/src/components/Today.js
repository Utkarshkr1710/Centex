import React, { Component, Fragment } from "react";
import {connect} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  SafeAreaView
} from "react-native";

import ProgressBar from 'react-native-progress/Bar';

import BarChartView from './BarChart';

import Icons from "react-native-vector-icons/AntDesign";
import Overlay from "react-native-modal-overlay";
import PureChart from "react-native-pure-chart";
import Speedometer from "react-native-speedometer-chart";
import Weather from "./weather";
 import { API_KEY } from "./WeatherAPIKEY";
import Tabs from "./tabs";
import Modal from "react-native-modal";

import AqiColorCode from './aqiColorCode';
import PollenColorCode from "./pollenColorCode";



let sampleData = [
  {
    value: 50,
    label: "TRESS",
    color: "#28b463"
  },
  {
    value: 40,
    label: "GRASS",
    color: "darkorange"
  },
  {
    value: 25,
    label: "WEEDS",
    color: "#28b463"
  },
  {
    value: 20,
    label: "MOLD",
    color: "gold"
  }
];
var data = [
  {
    seriesName: "series1",
    data: [
      { x: "10pm", y: 60 },
      { x: "12pm", y: 80 },
      { x: "2pm", y: 400 },
      { x: "4pm", y: 100 },
      { x: "6pm", y: 250 },
      { x: "8pm", y: 170 }
    ],
    color: "#297AB1"
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      modalVisible: false,
      modVisible: false,
      moVisible: false,
      isLoading: false,
      temperature: 0,
      humidity: 0,
      temp_min: 0,
      temp_max: 0,
      visibility: 0,
      windSpeed: 0,
      weatherCondition: null,
      latitude: 0,
      longitude: 0,
      pressure: 0,
      weather: [],
      error: null,
      visible: false,
      weather: {},

      airQuaIco: true
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  openModal = () => this.setState({ visible: true });

  closeModal = () => this.setState({ visible: false });

  clickModal = () => console.log('Clicked Button');

  showOverlay() {
    this.setState({ modalVisible: true });
  }
  shOverlay() {
    this.setState({ modVisible: true });
  }
  sOverlay() {
    this.setState({ moVisible: true });
  }
  hideOverlay() {
    this.setState({ modalVisible: false });
  }
  hidOverlay() {
    this.setState({ modVisible: false });
  }

  onClose = () => this.setState({ modalVisible: false, modVisible: false });

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded, airQuaIco: !this.state.airQuaIco });
  };

    componentDidMount(){
      if (Platform.OS === "android") {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              latitude:position.coords.latitude,
              longitude:position.coords.longitude
            })
          }
        )
      }
    }

  render() {
    
    const { isLoading } =  this.state;
    
    const { weatherDataCurrent } = this.props.state;
    const { navigation } = this.props;
   
    const { dataReducer } = this.props.state;

    let categoryColor = null;
    if(dataReducer.data){
    const catNum = dataReducer.data[0].Category.Number;

      if(catNum === 1)
        categoryColor = '#28b463';
      else if(catNum === 2)
              categoryColor = 'gold';
           else if(catNum === 3)
                  categoryColor = 'orange';
                else if(catNum === 4)
                        categoryColor = 'red';
                        else if(catNum === 5)
                                categoryColor = '#800080';
                              else if(catNum === 6)
                                      categoryColor = '#800000';
                                    else if(catNum === 7)
                                            categoryColor = '#800000';
                      

    }

    const AQI_MAX = 100;

    return (

      dataReducer.data ?
     
      <ScrollView>

        <View style={styles.container}>
          <View style={styles.headerTextView}>
          <Text style={styles.headerText1}>CenTex AIR</Text>
          <Icons
                style={{ paddingLeft:5, marginTop:8 }}
                name="down"
                size={30}
                color="white"
                onPress={() => {
                  this.props.navigation.navigate("Profile");
                }}
              />
          </View>
          <View style={styles.airview}>
            <View style={{flex:1,backgroundColor:'royalblue',height:50,flexDirection:'row'}}>
              <Text style={styles.airtext}>AIR QUALITY</Text>
              <Icons
                  style={{marginTop:18,paddingLeft:5 }}
                  name="infocirlceo"
                  type="antdesign"
                  color="white"
                  size={15}
                  onPress={this.showOverlay.bind(this)}
                />
                <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}>
                
              {this.state.airQuaIco ? 
                
                <Icons
                style={{paddingRight:10 }}
                name="down"
                size={30}
                color="white"
                onPress={this.changeLayout}
              />
              :

              <Icons
              style={{paddingRight:10 }}
              name="up"
              size={30}
              color="white"
              onPress={this.changeLayout}
            />


            }

              

              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 20,
                alignItems: "center"
              }}
            >
              <Speedometer
                value={dataReducer.data ? dataReducer.data[0].Category.Number : 0}
                totalValue={7}
                size={200}
                outerColor="#d3d3d3"
                internalColor= {categoryColor ? categoryColor : "#2eb82e"}
                showtext
                textStyle={{ color: "#28b463" }}
                showLabels
                labelStyle={{ color: "blue" }}
              />

              <Text style={{ color: "black", fontSize: 16, width: 150 }}>
                The air quality index{"\n"}is currently:{"\n"}
                <Text
                  style={{
                    backgroundColor: categoryColor ? categoryColor : '#fff',
                    fontWeight: "bold",
                    fontSize: 18,
                    
                  }}
                  numberOfLines={1}
                  ellipsizeMode = 'head'
                >
                  {dataReducer.data ? dataReducer.data[0].Category.Name : 'loading'}
                </Text>
              </Text>
            </View>

            <View
              style={{
                height: this.state.expanded ? null : 0,
                overflow: "hidden"
              }}
            >
              <View
                style={{ backgroundColor: "gold", height: 150, marginTop: 20 }}
              >
                <View style={{ marginTop: 20, paddingLeft: 20 }}>
                  <Text
                    style={{ color: "black", fontWeight: "bold", fontSize: 18 }}
                  >
                    POLLUTANTS{"\n"}
                  </Text>
                  <Icons
                    style={{ paddingLeft: 115, marginTop: -43 }}
                    name="infocirlceo"
                    type="antdesign"
                    color="black"
                    size={18}
                    onPress={this.shOverlay.bind(this)}
                  />
                </View>




            
            <View >
              {/* Main */}

              <View style={{flexDirection: 'row'}}>



                <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
                    O3  
                  </Text>
                  <View style={{height: 10, marginTop: 6.5, paddingLeft: 3}}>
                    <ProgressBar 
                    progress= {(dataReducer.data && (dataReducer.data.length > 0)) ? ((dataReducer.data[0].AQI)/AQI_MAX) : 0}
                    width={60}
                    borderColor='#000'
                    color='#000'

                    />
                  </View>

                  </View>



                  <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
                    PM2.5
                  </Text>
                  <View style={{height: 10, marginTop: 6.5, paddingLeft: 3}}>
                    <ProgressBar 
                    progress= {(dataReducer.data && (dataReducer.data.length > 1)) ? ((dataReducer.data[1].AQI)/AQI_MAX) : 0} 
                    width={60}
                    borderColor='#000'
                    color='#000'

                    />
                  </View>

                  </View>


                
                  <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
                    PM10
                  </Text>
                  <View style={{height: 10, marginTop: 6.5, paddingLeft: 3}}>
                    <ProgressBar 
                    progress= {(dataReducer.data && (dataReducer.data.length > 2)) ? ((dataReducer.data[2].AQI)/AQI_MAX) : 0} 
                    width={60}
                    borderColor='#000'
                    color='#000'

                    />
                  </View>
              </View>                

              </View>




              <View style={{flexDirection: 'row'}}>



                <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10, width: 100}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
                    CO  
                  </Text>
                  <View style={{height: 10, marginTop: 6.5, paddingLeft: 3}}>
                    <ProgressBar 
                    progress={0} 
                    width={60}
                    borderColor='#000'
                    color='#000'

                    />
                  </View>

                  </View>



                  <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10, width: 100}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
                    SO2 
                  </Text>
                  <View style={{height: 10, marginTop: 6.5, paddingLeft: 3}}>
                    <ProgressBar 
                    progress={0} 
                    width={60}
                    borderColor='#000'
                    color='#000'

                    />
                  </View>

                  </View>


                
                  <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10, width: 100}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
                    NO2 
                  </Text>
                  <View style={{height: 10, marginTop: 6.5, paddingLeft: 3}}>
                    <ProgressBar 
                    progress={0} 
                    width={60}
                    borderColor='#000'
                    color='#000'

                    />
                  </View>
              </View>                




              </View>







</View>  

              </View>
              <View style={styles.tabview}>
                <Tabs>
                  <View title="GenPop" style={styles.content}>

                    <Text style={styles.header}>GENERAL POPULATION{"\n"}  </Text>
                    <Text style={styles.text}>     
                      It’s a good day to be active outside.
                    </Text>
                  </View>
                  <View title="MedSense" style={styles.content}>
                    <Text style={styles.header}>MEDICALLY SENSITIVE{"\n"}</Text>
                    <Text style={styles.text}>
                      Consider reducing prolonged or heavy exertion. Watch for
                      symptoms such as coughing or shortness of breath. These
                      are signs to take it easier.
                    </Text>
                  </View>

                  <View title="Kids" style={styles.content}>
                    <Text style={styles.header}>
                      CHILDREN & OLDER ADULTS{"\n"}
                    </Text>
                    <Text style={styles.text}>
                      Consider reducing prolonged or heavy exertion. Watch for
                      symptoms such as coughing or shortness of breath. These
                      are signs to take it easier.
                    </Text>
                  </View>
                  {/* Third tab */}
                  <View title="Active" style={styles.content}>
                    <Text style={styles.header}>ACTIVE OUTDOORS{"\n"}</Text>
                    <Text style={styles.text}>
                      Consider reducing prolonged or heavy exertion. Watch for
                      symptoms such as coughing or shortness of breath. These
                      are signs to take it easier.
                    </Text>
                  </View>
                </Tabs>
              </View>
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 20,
                  paddingLeft: 20,
                  marginTop: 10
                }}
              >
                12-HOUR FORECAST{"\n"}
              </Text>
              <View style={{}}>
                <PureChart
                  type={"line"}
                  data={data}
                  width={"100%"}
                  height={100}
                  customValueRenderer={(index, point) => {
                    if (index % 2 === 0) return null;
                    return (
                      <Text style={{ textAlign: "center" }}>{point.y}</Text>
                    );
                  }}
                />
              </View>
              <View style={{ backgroundColor: "royalblue", height: 380 }}>
                <View style={{ paddingLeft: 20, marginTop: 20 }}>
                  <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                  >
                    DAILY CHALLENGE
                  </Text>
                </View>
                <View
                  style={{
                    height: 220,
                    backgroundColor: "#E8E8E8",
                    margin: 20,
                    borderRadius: 10
                  }}
                >
                  <Text style={styles.header}>REDUCE VAMPIRE ENERGY{"\n"}</Text>

                  <Text style={styles.ttext}>
                    Plug electronics into a smart power strip to reduce standby
                    power costs. This not only reduces your electricity bill
                    (saving the average U.S. household $100 per year), but also
                    allows power plants to burn fewer fossil fuels and release
                    fewer chemicals that form ozone.
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    height: 50,
                    borderRadius: 10,
                    width: 220,
                    margin: 20
                  }}
                >
                  <View style={{ margin: 10 }}>
                    <Text
                      style={{
                        color: "royalblue",
                        fontWeight: "bold",
                        fontSize: 18
                      }}
                    >
                      {" "}
                      TAKE THE CHALLENGE!
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.pollenView}>
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.pollenText}>POLLEN</Text>

                <Icons
                  style={{ paddingLeft: 100, marginTop: -43 }}
                  name="infocirlceo"
                  type="antdesign"
                  color="white"
                  size={20}
                  onPress={this.openModal}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                // marginTop: 20,
                alignItems: "center",
                justifyContent: "center",
                height: 160,
                margin: 20
                
              }}
            >

          <BarChartView />

            </View>
            <View style={styles.weatherView}>
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.weatherText}>WEATHER</Text>
              </TouchableOpacity>
            </View>
             <View style={styles.weather}>
              {isLoading ? (
                <View style={styles.loadingContainer}>
                  <Text style={styles.loadingText}>Fetching The Weather</Text>
                </View>
              ) : (
                <Weather
                  weather={weatherDataCurrent.data ? weatherDataCurrent.data.weather[0].main : ''}

                  temperature={weatherDataCurrent.data ? weatherDataCurrent.data.main.temp : 0}

                  humidity={weatherDataCurrent.data ? weatherDataCurrent.data.main.humidity : 0}

                  Max_temp={weatherDataCurrent.data ? weatherDataCurrent.data.main.temp_max : 0}

                  Min_temp={weatherDataCurrent.data ? weatherDataCurrent.data.main.temp_min : 0}

                  visibility={weatherDataCurrent.data ? weatherDataCurrent.data.visibility : 0}

                  windSpeed={weatherDataCurrent.data ? weatherDataCurrent.data.wind.speed : 0}

                  pressure={weatherDataCurrent.data ? weatherDataCurrent.data.main.pressure : 0}

                  iconCode = {weatherDataCurrent.data ? weatherDataCurrent.data.weather[0].icon : '50d'}
                />
              )}
            </View> 
            <Overlay
              visible={this.state.modalVisible}
              onClose={this.onClose}
              closeOnTouchOutside
              animationType="zoomIn"
              containerStyle={{ backgroundColor: "rgba(37, 8, 10, 0.78)" }}
              childrenWrapperStyle={{
                borderRadius: 10,
                backgroundColor: "#eee",
                height: 650
              }}
            >
            
              <Text
                style={{ fontWeight: "bold", fontSize: 20, color: "royalblue" }}
              >
                AIR QUALITY INDEX [AQI]
              </Text>
              <View
                style={{ borderBottomWidth: 1, width: 100, paddingTop: 10 }}
              />

              <Text
                style={{
                  fontWeight: "300",
                  fontSize: 16,
                  paddingTop: 20,
                  textAlign: "center",
                  color: "black",
                  textAlign: 'justify'
                }}
              >
                The Environmental Protection Agency air quality index is a
                color coded guide used to help individuals understand
                how healthy the air quality may be on particular day. The table. Below shows each air quality health level and the
                matching color indicator.
              </Text>
            
                <View style={{flex: 1, width: 300}}>


                  <AqiColorCode />
              

                </View>



            </Overlay>
            <Overlay
              visible={this.state.modVisible}
              onClose={this.onClose}
              closeOnTouchOutside
              animationType="zoomIn"
              containerStyle={{ backgroundColor: "rgba(37, 8, 10, 0.78)" }}
              childrenWrapperStyle={{
                borderRadius: 10,
                backgroundColor: "#eee",
                height: 600
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 20, color: "royalblue" }}
              >
                POLLUTANTS
              </Text>
              <View
                style={{ borderBottomWidth: 1, width: 100, paddingTop: 10 }}
              />

              <Text style={{ marginTop: 20, color: "black" }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
                >
                  O3/OZONE:{"\n"}
                </Text>
                formed by a chemical reaction between nitrogen oxides (NOx) and
                volatile organice compounds (VOCs) in sunlight.
              </Text>
              <Text style={{ marginTop: 20, color: "black" }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
                >
                  PM2.5/FINE PARTICULATE MATTER:{"\n"}
                </Text>
                produced by all kinds of combustion, including motor vechiles,
                power plants, residential wood burning,forest fires,
                agricultural burning, and some industrial processes
              </Text>
              <Text style={{ marginTop: 20, color: "black" }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
                >
                  PM10/ PARTICULATE MATTER:{"\n"}
                </Text>
                caused by crushing or grinding operations and dust stirred up by
                vechiles on roads
              </Text>
              <Text style={{ marginTop: 20, color: "black" }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
                >
                  CO/CARBON MONOXIDE:{"\n"}
                </Text>
                released when something is burned; especially cars, trucks, and
                other vechiles or machinery that burn fossil fuels
              </Text>
              <Text style={{ marginTop: 20, color: "black" }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
                >
                  NO2/NITROGEN DIOXIDE:{"\n"}
                </Text>
                formed from emissions from cars, trucks, buses, power plants,
                and off-road equipment
              </Text>
              <Text style={{ marginTop: 20, color: "black" }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
                >
                  SO2/SULFUR DIOXIDE:{"\n"}
                </Text>
                produced by the burning of fossil fuels by power plants and
                other industrial facilities
              </Text>
            </Overlay>

            <Modal
              isVisible={this.state.visible}
              backdropOpacity={0.8}
              onSwipeComplete={this.closeModal}
              onBackdropPress={this.closeModal}onBackButtonPress = {this.closeModal}
              animationType="fade"
            >
              <View style={styles.modalContainer}>
                <ScrollView>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "royalblue",
                      marginHorizontal: 20,
                      marginVertical: 10
                    }}
                  >
                    POLLEN
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 20,
                      marginVertical: 0,
                      textAlign: 'justify'
                      
                    }}
                  >
                    The National Allergy Bureau's pollen count is a color-coded
                    guide used to help individuals understand the quantity of
                    airborne pollen and mold spores on a particular day. The
                    tables below show each concentration level and the matching
                    color indicator.
                  </Text>
                  
                  <View style={{flex: 1, width: 300}}>

                    <PollenColorCode />
                  
                  </View>


                </ScrollView>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
     

:

<View>
  <Text>
    No Data Available!{'\n'}
  </Text>
</View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  text: {
    fontSize: 17,
    color: "black",
    padding: 10
  },

  airtext: {
    color: "white",
    fontSize: 20,
    paddingLeft:20,
    marginTop:11
  },

  airview: {
    marginTop: 5,
  },

  Btn: {
    padding: 10,
    backgroundColor: "royalblue",
    height: 50
  },
  headerText1: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop:7
  },
  headerTextView: {
    flexDirection:'row',
    height: 50,
    backgroundColor: "royalblue",
    justifyContent: "center"

  },

  pollenView: {
    height: 50,
    marginTop: 20,
    backgroundColor: "royalblue",
    justifyContent: "center"
  },
  pollenText: {
    color: "white",
    fontSize: 20,
    margin: 20,
    marginTop: 0
  },
  weatherView: {
    height: 50,
    marginTop: 20,
    backgroundColor: "royalblue",
  },
  weatherText: {
    color: "white",
    fontSize: 20,
    justifyContent:"center",
    paddingLeft:20,
    marginTop:10

  },
  weather: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFDE4"
  },
  loadingText: {
    fontSize: 30
  },
  tabview: {
    flex: 1,
    backgroundColor: "royalblue",
    height: 220
  },
  // Tab content container
  content: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    color: "black"
  },
  // Content header
  header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    paddingLeft: 20
  },
  // Content text
  text: {
    color: "black",
    fontSize: 16,
    paddingLeft: 20
  },
  ttext: {
    color: "black",
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 15,
    width:300,
  },

  description: {
    paddingHorizontal: 20,

    paddingVertical: 40,

    fontSize: 18
  }
});

function mapStateToProps(state) {
  return {
    //  zipcodeData: state.zipCodeData,
    //  locationData: state.locationData
    state
  };
}


export default connect(mapStateToProps)(App);