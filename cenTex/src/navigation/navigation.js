
import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions } from 'react-native';

import HomeScreen from '../components/HomeScreen';
import MyProfile from '../components/MyProfile';
import Connect from '../components/Connect';
import Share from '../components/Share';
import Sources from '../components/Sources';
import Terms from '../components/Terms';
import Forecast from '../components/Forecast';
import Profile from '../components/Profile';

import Mission from '../components/Mission';
import Faq from '../components/Faq';
import Clean from '../components/Clean';
import Contact from '../components/Contact';
import Today from '../components/Today';

import Location from '../components/Location';

const { width } = Dimensions.get("window");


import {
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  DrawerItems
} from "react-navigation";

import Icons from "react-native-vector-icons/EvilIcons";
import Icon from "react-native-vector-icons/AntDesign";


class NavRoutes extends Component {

  render() {
    return (
     <AppContainer />
    )
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
  <View
    style={{
      height: 150,
      backgroundColor: "royalblue",
      flexDirection: "row"
    }}
  >
    <Image
      source={require("../Resources/images/Air1.png")}
      style={{
        height: 120,
        width: 120,
        borderRadius: 60,
        marginTop: 10,
        marginLeft: 20
      }}
    />
    <Text
      style={{
        color: "white",
        fontSize: 23,
        fontWeight: "bold",
        paddingLeft: 50,
        alignItems: "center",
        justifyContent: "center",
        padding: 50
      }}
    >
      {" "}
      CenTex AIR{" "}
    </Text>
  </View>
  <ScrollView>
    <DrawerItems {...props} />
  </ScrollView>
</SafeAreaView>

  );

const HomeTabNavigator = createBottomTabNavigator(
  {
    Today,
    Forecast
  },
  {
    navigationOptions: {
      tabBarVisible: false
    },
    tabBarOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "royalblue",
      inactiveTintColor: "royalblue",
      inactiveBackgroundColor: "#E0E0E0",
      labelStyle: {
        fontSize: 20,
        padding: 10
      }
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerStyle: {
          marginTop: 0,
          backgroundColor: "royalblue"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        }
      };
    }
  }
);

const HomeStackNavigator = createStackNavigator(
  {
    HomeTabNavigator: HomeTabNavigator,
    Profile: { screen: Profile },
    Mission: { screen: Mission },
    Faq: { screen: Faq },
    Clean: { screen: Clean },
    Contact: { screen: Contact }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            name="setting"
            size={30}
            color="white"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: (
          <Icons
            style={{ paddingRight: 10 }}
            name="location"
            size={30}
            color="white"
            onPress={() => navigation.navigate("location")}
          />
        )
      };
    }
  }
);



const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeStackNavigator },
    MyProfile: { screen: MyProfile },
    Connect: { screen: Connect },
    Share: { screen: Share },
    DataSources: { screen: Sources },
    Terms: { screen: Terms }
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: width
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  welcome: { screen: HomeScreen },
  location: { screen: Location },
  Home: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator, AppDrawerNavigator);

export default NavRoutes;