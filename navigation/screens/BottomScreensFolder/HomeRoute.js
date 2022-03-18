import React from "react";
import { View, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {heightPercentageToDP,widthPercentageToDP} from 'react-native-responsive-screen'
import { Ionicons } from "@expo/vector-icons";
import {
  BagIcon,
  CategoriesActiveIcon,
  CategoriesIcon,
  HeartIcon,
  HomeActiveIcon,
  HomeIcon,
  ProfileActiveIcon,
  ProfileIcon,
} from "../../../assets/svg";

// Screens

import CategoriesScreen from "./Screens/CategoriesScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import HomePage from "../Home/HomePage";
import DrawerNavigator from "./Screens/DrawerNavigator";

// Names
const homeName = "Home";
const catName = "Categories";
const profileName = "ProfileTab";

const Tab = createBottomTabNavigator();

const HomeRoute = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            // iconName = focused ? "home" : "home-outline";
            iconName = focused ? (
              <HomeActiveIcon width={heightPercentageToDP(3)} height={heightPercentageToDP(3)} />
            ) : (
              <HomeIcon width={heightPercentageToDP(3)} height={heightPercentageToDP(3)} />
            );
          } else if (rn === catName) {
            iconName = focused ? (
              <CategoriesActiveIcon width={heightPercentageToDP(3)} height={heightPercentageToDP(3)} />
            ) : (
              <CategoriesIcon width={heightPercentageToDP(3)} height={heightPercentageToDP(3)} />
            );
          } else if (rn === profileName) {
            iconName = focused ? (
              <ProfileActiveIcon width={heightPercentageToDP(3)} height={heightPercentageToDP(3)} />
            ) : (
              <ProfileIcon width={heightPercentageToDP(3)} height={heightPercentageToDP(3)} />
            );
          }

          // return <Ionicons name={iconName} size={size} color={color} />;

          return iconName;
        },
        tabBarActiveTintColor:"#FF3E6C",
        tabBarInactiveTintColor:"#0F0F0F",
        tabBarLabelStyle:{
          padding: 2,
          fontSize: widthPercentageToDP(3),
          fontFamily: "whitney-medium",
        }
      })
    }
      // screenOptions={{
      //   tabBarActiveTintColor: "#FF3E6C",
      //   inactiveTintColor: "#0F0F0F",

      //   labelStyle: {
      //     paddingBottom: 10,
      //     fontSize: widthPercentageToDP(2.5),
      //     fontFamily: "whitney-medium",
      //   },
      // }}
    >
      <Tab.Screen
        name={homeName}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={catName}
        component={CategoriesScreen}
        options={{
          headerTitle: "Categories",
          headerTitleStyle: {
            paddingVertical:5,
            fontSize: widthPercentageToDP(3.5),
            fontFamily: "whitney-semi-bold",
            color: "grey",
          },
          headerRight: () => (
            <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
              <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                <HeartIcon width={heightPercentageToDP(3)} height={heightPercentageToDP(3)} />
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                <BagIcon width={heightPercentageToDP(3)} height={heightPercentageToDP(3)} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={profileName}
        component={ProfileScreen}
        options={{
          headerTitle: "Profile",
          headerTitleStyle: {
            paddingVertical:5,
            fontSize: widthPercentageToDP(3.5),
            fontFamily: "whitney-semi-bold",
            color: "grey",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeRoute;
