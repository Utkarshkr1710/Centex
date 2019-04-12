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
  TouchableHighlight
} from "react-native";

import Icons from "react-native-vector-icons/AntDesign";
import { Button, Header } from "react-native-elements";
import Overlay from "react-native-modal-overlay";
import PureChart from "react-native-pure-chart";
import Speedometer from "react-native-speedometer-chart";
import Weather from "./weather";
 import { API_KEY } from "./WeatherAPIKEY";
import Tabs from "./tabs";
// import { IconButton, Colors, withTheme } from "react-native-paper";
import Modal from "react-native-modal";
import { colors } from '../Resources/colorCode';

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
      { x: "10pm", y: 30 },
      { x: "12pm", y: 60 },
      { x: "2pm", y: 90 },
      { x: "4pm", y: 120 },
      { x: "6pm", y: 150 },
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
      weather: {}
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  openModal = () => this.setState({ visible: true });

  closeModal = () => this.setState({ visible: false });


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
    this.setState({ expanded: !this.state.expanded });
  };

     componentWillMount(){
    
     }


  render() {
    
    const fill = 'rgb(134, 65, 244)'
    const databAR   = [ 50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80 ]
    

    const {
      isLoading,
      weatherCondition,
      temperature,
      humidity,
      Max_temp,
      Min_temp,
      visibility,
      windSpeed,
      search,
      pressure,
      StateCode,
      O3,
      value,
      PM,
      PM10,
      CO
    } =  this.state;
    
    
    const { weatherDataCurrent } = this.props.state;
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    const { dataReducer } = this.props.state;

    weatherDataCurrent.data ? console.log('ho gaya',weatherDataCurrent) : console.log('abhi nhi aaya');

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

    
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerTextView}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                this.props.navigation.navigate("Profile");
              }}
            >
              <Text style={styles.headerText1}>CenTex AIR</Text>
              <Icons
                style={{ paddingLeft: 275, marginTop: -28 }}
                name="down"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.airview}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={this.changeLayout}
              style={styles.Btn}
            >
              <Text style={styles.airtext}>AIR QUALITY</Text>
              <Icons
                style={{ paddingLeft: 370, marginTop: -28 }}
                name="down"
                size={30}
                color="white"
              />
              <Button
                icon={{
                  name: "infocirlceo",
                  type: "antdesign",
                  color: "white",
                  size: 20
                }}
                buttonStyle={{
                  height: 40,
                  width: 50,
                  marginTop: -35,
                  backgroundColor: "transparent",
                  margin: 115
                }}
                onPress={this.showOverlay.bind(this)}
              />
            </TouchableOpacity>
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

              <Text style={{ color: "black", fontSize: 16 }}>
                The air quality index{"\n"}is currently:{"\n"}
                <Text
                  style={{
                    backgroundColor: categoryColor ? categoryColor : '#fff',
                    fontWeight: "bold",
                    fontSize: 18
                  }}
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
                <View
                  style={{
                    flex:1,
                    flexDirection: "row",
                  }}
                >
                <View style={{justifyContent:'space-around',alignItems:'center'}}>
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 16,
                      paddingLeft:20
                    }}
                  >
                    03: {dataReducer.data ? dataReducer.data[0].AQI : 'NA'}
                     PM 2.5: {dataReducer.data ? dataReducer.data[1].AQI : 'NA'}  
                      PM 10:{dataReducer.data ? dataReducer.data[2].AQI : 'NA'}{'\n\n'}
                    CO: {  }              SO2:                          NO2:
                  </Text>
                  </View>
                  
                 
                </View>
              </View>
              <View style={styles.tabview}>
                <Tabs>
                  <View title="GenPop" style={styles.content}>
                    <Text style={styles.header}>GENERAL POPULATION{"\n"}</Text>
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
                marginTop: 20,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              
              
              
              
              
              <PureChart data={sampleData} type="pie" />

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
                height: 600
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
                  color: "black"
                }}
              >
                The Environmental Protection{"\n"}Agency air quality index is a
                color coded{"\n"}guide used to help individuals{"\n"}understand
                how healthy the air quality may be on particular day. The table.
                {"\n"} below shows each air quality health{"\n"}level and the
                matching color indicator.{"\n\n"}
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around"
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    0-50
                  </Text>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#28b463",
                      borderRadius: 10
                    }}
                  />
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    GOOD
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around"
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    51-100
                  </Text>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "gold",
                      borderRadius: 10
                    }}
                  />
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    MODERATE
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around"
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    101-150
                  </Text>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "orange",
                      borderRadius: 10
                    }}
                  />
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    UNHEALTHY FOR{"\n"}SENSITIVE GROUPS
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around"
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    151-200
                  </Text>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "red",
                      borderRadius: 10
                    }}
                  />
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    UNHEALTHY
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around"
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    201-300
                  </Text>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#800080",
                      borderRadius: 10
                    }}
                  />
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    VERY UNHEALTHY
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around"
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    300-500
                  </Text>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#800000",
                      borderRadius: 10
                    }}
                  />
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    HAZARDOUS
                  </Text>
                </View>
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
              onBackdropPress={this.closeModal}
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
                      marginVertical: 10
                    }}
                  >
                    The National Allergy Bureau's pollen count is a color-coded
                    guide used to help individuals understand the quantity of
                    airborne pollen and mold spores on a particular day. The
                    tables below show each concentration level and the matching
                    color indicator.
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "black",
                      marginHorizontal: 20,
                      marginVertical: 10
                    }}
                  >
                    GRASS
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      1-4
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "#28b463",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      LOW
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: 2
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      5-19
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "gold",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      MODERATE
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: 2
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      20-199
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "orange",
                        borderRadius: 4
                      }}
                    />
                    
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      HIGH
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: 2
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      >200
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "red",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      VERY HIGH
                    </Text>
                  </View>

                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "black",
                      marginHorizontal: 20,
                      marginVertical: 10
                    }}
                  >
                    TRESS
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      1-14
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "#28b463",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      LOW
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: 2
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      15-89
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "gold",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      MODERATE
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: 2
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      90-1499
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "orange",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      HIGH
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: 2
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      >1500
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "red",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      VERY HIGH
                    </Text>
                  </View>

                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "black",
                      marginHorizontal: 20,
                      marginVertical: 10
                    }}
                  >
                    WEEDS
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      1-9
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "#28b463",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      LOW
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: 2
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      10-49
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "gold",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      MODERATE
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: 2
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      50-499
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "orange",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      HIGH
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: 2
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      >500
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "red",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      VERY HIGH
                    </Text>
                  </View>

                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "black",
                      marginHorizontal: 20,
                      marginVertical: 10
                    }}
                  >
                    MOLD
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      1-6499
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "#28b463",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      LOW
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: 2
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      6500-12999
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "gold",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      MODERATE
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: 2
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      51300-4999
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "orange",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      HIGH
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: 2
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      >50000
                    </Text>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: "red",
                        borderRadius: 4
                      }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15
                      }}
                    >
                      VERY HIGH
                    </Text>
                  </View>
                </ScrollView>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
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
    paddingLeft: 10
  },

  airview: {
    marginTop: 5
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
    fontWeight: "bold"
  },
  headerTextView: {
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
    marginVertical: 15
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