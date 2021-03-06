import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";


const renderItem = (itemData) => {
  console.log(itemData);
  return (
    <View style={styles.screen}>
      <View style={{ flex: 0.2 }}>
        <View
          style={{
            borderRadius: 50 / 2,
            backgroundColor: itemData.item.bg_color,
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 50,
          }}
        >
          <FontAwesome5 name={itemData.item.icon} size={18} color="white" />
        </View>
      </View>
      <View style={{ flex: 0.8, padding: 5 }}>
        <Text
          style={{
            fontFamily: "whitney-semi-bold",
            fontSize: 16,
            marginVertical: 2.5,
          }}
        >
          {itemData.item.heading}
        </Text>
        <Text
          style={{
            fontFamily: "whitney-book",
            fontSize: 12,
            color: "#B1B1B1",
            marginVertical: 2.5,
          }}
        >
          {itemData.item.time_to_send}
        </Text>
        <Text
          style={{
            fontFamily: "whitney-book",
            fontSize: 14,
            color: "grey",
            marginVertical: 2.5,
          }}
        >
          {itemData.item.link}
        </Text>
      </View>
    </View>
  );
};

const YouMissed = (props) => {
  return (
    <FlatList
      scrollEnabled={true}
      keyExtractor={(item, index) => {
        item.id;
      }}
      data={props.dataList}
      renderItem={renderItem}
      contentContainerStyle={styles.flatListStyle}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    padding: 10,
    margin: 10,
    elevation: 4,
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
  },
  flatListStyle: {
    flexGrow: 0,
  },
});

export default YouMissed;
