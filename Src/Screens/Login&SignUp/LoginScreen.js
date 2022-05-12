import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import SimpleHeader from "../../Components/Header/simple_header";
import FastImage from "react-native-fast-image";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import httpClients from '../../Redux/utils'
import { userToken } from '../../Redux/action'
import Loader from '../../Components/Loader'
import { useDispatch, useSelector } from 'react-redux'

const LoginScreen = (props) => {
  const [isLoading, setLoading] = useState();
  const [phone, setPhone] = useState(0)
  const dispatch = useDispatch()

  const validateNumber = () => {
    const regex = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm
    if (regex.test(phone)) {
      loginSignupApi()
    } else {
      Alert.alert('Incorrect Number', 'Please provide your phone number in this format 03xx xxx xxxx')
    }
  }

  const loginSignupApi = async () => {
    setLoading(true)
    const res = await httpClients.get(`otp_login?phone=+92` + phone)
    setLoading(false)
    if (res.data.status === "success") {
      dispatch(userToken(res.data.tokken))
      props.navigation.navigate('OTP', {
        isLogin: res.data.userAlreadyExist
      })
    }
  }


  return (
    <View style={styles.screen}>
      <SimpleHeader
        clickHandler={() => props.navigation.goBack()}
        headerTitle={"Login . SignUp"}
      />
      <KeyboardAwareScrollView >
        <View style={styles.imageStyle} >
          <FastImage
            source={require("../../../assets/loginPic.png")}
            style={styles.images}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={styles.textLogin}>
          <Text
            style={{
              fontFamily: "whitney-book",
              fontSize: heightPercentageToDP(3),
            }}
          >
            <Text style={{ fontFamily: "whitney-semi-bold" }}>Login </Text>
            or <Text style={{ fontFamily: "whitney-semi-bold" }}>Signup</Text>
          </Text>
        </View>
        <View style={styles.phoneNumber}>
          <View style={styles.phoneTextInput}>
            <Text
              style={{
                fontFamily: "whitney-book",
                fontSize: heightPercentageToDP(2),
                color: "grey",
              }}
            >
              +92
            </Text>
            <View
              style={{
                height: "60%",
                width: 1,

                marginHorizontal: 5,
                backgroundColor: "#C9C9C9",
              }}
            />
            <TextInput
              placeholder="Mobile Number"
              keyboardType="numeric"
              style={{
                marginLeft: 5,
                fontFamily: "whitney-book",
                fontSize: heightPercentageToDP(2),
                color: "black",
              }}
              onChangeText={(text) => setPhone(text)}
            />
          </View>
        </View>
        <View style={{ paddingHorizontal: 25, marginVertical: 20, width: "90%" }}>
          <Text
            style={{
              fontFamily: "whitney-book",
              fontSize: heightPercentageToDP(2),
              color: "grey",
            }}
          >
            By Continuing, I agree to the{" "}
            <Text style={{ color: "#FF3E6C" }}>Terms of Use</Text> &{" "}
            <Text style={{ color: "#FF3E6C" }}>Privacy Policy</Text>
          </Text>
        </View>
        <View style={styles.buttonLayout}>
          <TouchableOpacity
            onPress={() => {
              validateNumber()
            }}
            style={{ width: "100%", padding: 10, alignItems: "center" }}
          >
            <Text
              style={{
                fontFamily: "whitney-semi-bold",
                color: "white",
                fontSize: heightPercentageToDP(1.75),
              }}
            >
              CONTINUE
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", padding: 20 }}>
          <Text
            style={{
              fontFamily: "whitney-book",
              fontSize: heightPercentageToDP(1.75),
            }}
          >
            Having trouble logging in?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: "whitney-semi-bold",
                fontSize: heightPercentageToDP(1.75),
                color: "#FF2C5E",
              }}
            >
              {" "}
              Get help
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      {isLoading &&
        <Loader
          color="black"
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  imageStyle: {
    // padding:10,
    flex: 1,
    // width: "100%",
    justifyContent: 'center'
    // height: heightPercentageToDP(20),
  },
  images: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(30),
  },
  textLogin: {
    width: "100%",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  phoneNumber: {
    width: "100%",
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  phoneTextInput: {
    borderWidth: widthPercentageToDP(0.1),
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: "grey",
    flexDirection: "row",
    paddingVertical: 8,
    alignItems: "center",
  },
  buttonLayout: {
    marginHorizontal: 25,
    marginVertical: 10,
    backgroundColor: "#FF3E6C",
  },
});

export default LoginScreen;