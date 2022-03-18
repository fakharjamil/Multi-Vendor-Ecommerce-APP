import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
// import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { ScrollView } from "react-native-gesture-handler";
import Recent from "./components/Recent";
import YouMissed from "./components/YouMissed";
import Colors from "../../../constants/constants";
import SimpleHeader from '../Header/simple_header';

const NotificationScreen = (props) => {
  const [showScreen, setShowScreen] = useState(0);

  let content = <Recent />;

  if (showScreen == 0) {
    content = <Recent />;
  } else {
    content = <YouMissed />;
  }

  const FirstRoute = () => <Recent />;

  const SecondRoute = () => <YouMissed />;

  const renderScene = SceneMap({
    recent: FirstRoute,
    youmissed: SecondRoute,
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: Colors.Primary }}
      style={{
        backgroundColor: "white",
      }}
      inactiveColor={"grey"}
      activeColor={Colors.Primary}
    />
  );

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "recent", title: "Recent" },
    { key: "youmissed", title: "You Missed" },
  ]);

  return (
    <View style={styles.screen}>
      <SimpleHeader clickHandler={()=>props.navigation.goBack()} headerTitle={'Notifications'} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        style={{
          backgroundColor: "white",
        }}
      />
      {/* <View
        style={{
          width: "100%",
          flex: 0.04,
          elevation: 4,
          flexDirection: "row",
          backgroundColor: "white",
          padding: 20,
        }}
      >
        <View style={{ flex: 1, overflow: "hidden" }}>
          <TouchableOpacity
            style={{ width: "100%", height: "100%", alignItems: "center" }}
            onPress={() => setShowScreen(0)}
          >
            <Text
              style={
                showScreen == 0 ? styles.activeButton : styles.unActiveButton
              }
            >
              Recent
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, overflow: "hidden" }}>
          <TouchableOpacity
            style={{ width: "100%", height: "100%", alignItems: "center" }}
            onPress={() => setShowScreen(1)}
          >
            <Text
              style={
                showScreen == 1 ? styles.activeButton : styles.unActiveButton
              }
            >
              You Missed
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, flex: 0.8 }}>
        {content}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  activeButton: {
    fontFamily: "kepler-bold",
    fontSize: 20,
    color: "#FF2C5E",
    textDecorationLine: "underline",
  },
  unActiveButton: {
    fontFamily: "kepler-bold",
    fontSize: 20,
    color: "#C9C9C9",
  },
});

export default NotificationScreen;
