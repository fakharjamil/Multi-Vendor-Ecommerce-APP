import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import FastImage from "react-native-fast-image";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import { Ionicons } from "@expo/vector-icons";
import { titleCase } from "../Constants/title_case";
import Colors from "../Constants/colors";
import { Fonts } from "../Constants/fonts";
import { HeartIcon } from "../../assets/svg";

const ShoppingCards = (props) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={props.detaislScreen}>
        <View style={styles.cardStyle}>
          <FastImage
            // source={{uri: props.feature_image,}}
            source={{
              uri: props.feature_image,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
            style={styles.backgroundStyle}
          >
            <View style={{ paddingVertical: 10, flex: 1 }}>
              {/* <Image
                source={require("../assets/tag.png")}
                resizeMode="contain"
              /> */}
            </View>
            <View style={styles.raitingCard}>
              <Text style={styles.textPicRaiting}>{props.rating}</Text>
              <Ionicons name="md-star" size={14} color={"#03956E"} />
              <View
                style={{
                  width: 1,
                  height: "80%",
                  backgroundColor: "#C1C1C1",
                  marginHorizontal: 3,
                }}
              />
              <Text
                style={{
                  fontSize: widthPercentageToDP(3),
                  marginHorizontal: 5,
                  color: "#C1C1C1",
                }}
              >
                112
              </Text>
            </View>
          </FastImage>
        </View>
        <View style={styles.descriptioStyle}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: Fonts.whitney_medium,
                  fontSize: widthPercentageToDP(4),
                  color: "#545454",
                }}
              >
                {titleCase(props.name)}
              </Text>

              <Text
                style={{
                  fontSize: widthPercentageToDP(3.5),
                  fontFamily: Fonts.whitney_light,
                  // flex: 1,
                  marginTop: 3,
                  color: "#9F9F9F",
                }}
              >
                {props.category_name}
              </Text>
            </View>

            <View>
              <HeartIcon
                height={heightPercentageToDP(2.5)}
                width={heightPercentageToDP(2.5)}
              />
            </View>
          </View>

          <Text
            style={{
              fontSize: widthPercentageToDP(3.5),
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: "#9F9F9F",
                textDecorationLine: "line-through",
                fontFamily: "whitney-book",
              }}
            >
              {props.regular_Price}$
            </Text>
            <Text
              style={{
                color: "black",
                fontFamily: "whitney-semi-bold",
                marginTop: 3,
              }}
            >
              {"  "}
              {props.discounted_Price}$
            </Text>
            <Text
              style={{
                color: "#FF3E6C",
                fontFamily: "whitney-book",
                fontSize: widthPercentageToDP(3),
                // marginTop: 5,
                // marginLeft: 5,
              }}
            >
              {"  "}
              {props.discount}% OFF
            </Text>
          </Text>

          <Text
            style={{
              color: "#FF3E6C",
              fontFamily: Fonts.whitney_medium,
              fontSize: widthPercentageToDP(3.5),
              marginTop: 3,
            }}
          >
            Quantity {props.quantity}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.5,
    backgroundColor: "white",
    // elevation: 4,
    borderWidth: 0.25,
    borderColor: "#91A1BD",
    // marginVertical: 10,
    // marginHorizontal: 5,
    // borderRadius: 20,
    overflow: "hidden",
  },
  cardStyle: {
    height: heightPercentageToDP(32),
    // paddingHorizontal: 10,
    // paddingTop: 5,
    alignItems: "flex-end",
  },
  backgroundStyle: {
    width: "100%",
    height: "100%",
  },
  raitingCard: {
    marginVertical: heightPercentageToDP(1),
    marginHorizontal: 5,
    alignSelf: "flex-end",
    width: "50%",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderRadius: 20,
    paddingVertical: heightPercentageToDP(0.75),
    justifyContent: "center",
    alignItems: "center",
    // elevation: 4,
  },
  textPicRaiting: {
    fontSize: widthPercentageToDP(3),
    marginHorizontal: 5,
    color: "black",
  },
  descriptioStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
});

export default ShoppingCards;
