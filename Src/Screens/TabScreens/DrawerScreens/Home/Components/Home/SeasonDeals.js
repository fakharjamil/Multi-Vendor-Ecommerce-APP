import React from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";
import SeasonCards from "../../../../../../Components/SeasonCards";

const renderGridItem = (itemData) => {
  return <SeasonCards imageurl={itemData.item.image} />;
};

const SeasonDeals = (props) => {
  return (
    <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }}>
      <FlatList
        keyExtractor={(item, index) => {
          item.id;
        }}
        data={props.data}
        renderItem={renderGridItem}
        numColumns={2}
        contentContainerStyle={{ ...styles.flatlistStyle, ...props.style }}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flatlistStyle: {
    // flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SeasonDeals;
