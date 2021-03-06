import { StyleSheet, Dimensions } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import Colors from "../Constants/colors";
import { Fonts } from "../Constants/fonts";

export const commonStyles = StyleSheet.create({
  // Home Style
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  firstContainer: {
    paddingVertical: heightPercentageToDP(0.75),
    height: Dimensions.get("window").height * 0.13,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").width * 0.76,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },

  imageBannerContainer: {
    marginVertical: heightPercentageToDP(1.5),
    width: "100%",
    height: heightPercentageToDP(2),
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  sliderContainer: {
    // backgroundColor: "#ffff",
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").width * 0.74,
    paddingBottom: 8,
    elevation: 4,
    overflow: "hidden",
  },
  sliderContainer2: {
    width: widthPercentageToDP(100),
    // paddingBottom: 8,
    marginTop: heightPercentageToDP(1.5),
    elevation: 4,
    overflow: "hidden",
  },
  dealCards: {
    // backgroundColor: "white",
    marginTop: heightPercentageToDP(1.5),
  },
  dealBannerCards: {
    flex: 1,
    // padding: 10,
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").width * 0.9,
    // backgroundColor: "#ffff",
    elevation: 4,
    marginVertical: 10,
  },
  textTop: {
    backgroundColor: Colors.Primary,
    elevation: 4,
  },
  textTop1: {
    flex: 0.1,
    padding: 15,
  },
  seasonCards: {
    // backgroundColor: "white",
    // elevation: 4,
    marginTop: 10,
  },
  seasonCardsdeals: {
    flex: 1,
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").width * 1.59,
    backgroundColor: "#ffff",
    elevation: 4,
    marginVertical: 10,
  },
  influencerCardsdeals: {
    flex: 1,
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").width * 0.7,
    backgroundColor: "#ffff",
    elevation: 4,
    marginVertical: 10,
  },

  imageBanner2Container: {
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").width * 0.67,

    // overflow: 'hidden',
    marginTop: Dimensions.get("window").height / 60,
  },

  flatlistPrediction: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  flatlistPrediction2: {
    flex: 1,
    margin: 0,
    backgroundColor: "#f6f6f6",
    // padding: 10,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  customFlatlistStyle: {
    // width: "100%",
    // height: "100%",
  },

  imageBanner3Container: {
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").width * 0.37,
    elevation: 4,
    backgroundColor: "white",
    overflow: "hidden",
    marginTop: heightPercentageToDP(1.5),
  },

  imageBanner2: {
    width: "100%",
    height: "100%",
  },

  mainContainerdealsCard: {
    marginVertical: 0,
    marginHorizontal: 15,
  },
  mainContainerdeals2Card: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  imageContainerstyle1: {
    height: heightPercentageToDP(20),
    width: widthPercentageToDP(15),
  },
  imageContainerstyle2: {
    height: heightPercentageToDP(25),
    width: widthPercentageToDP(26),
    // resizeMode: 'cover'
  },
  weadingCardsStyle: {
    width: Dimensions.get("window").width * 0.75,
    // height: Dimensions.get('window').width * 0.75,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },

  textheadingStyle: {
    fontFamily: Fonts.whitney_semi_bold_italic,
    // backgroundColor: Colors.Primary,
    color: "white",
    fontSize: widthPercentageToDP(4),
    marginVertical: 10,
    textAlign: "center",
    paddingLeft: 16,
  },

  // Home Style End

  buttonStyle: {
    padding: heightPercentageToDP(1.75),
    backgroundColor: Colors.Primary,
    alignItems: "center",
    marginVertical: heightPercentageToDP(1),
    borderRadius: heightPercentageToDP(1),
    // elevation: 2,
  },
});
