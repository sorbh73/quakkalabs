import React, { useState, createRef,useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  
} from "react-native";
import auth from "@react-native-firebase/auth";
import { useDispatch } from "react-redux";
import { Getstate, login } from "./auth/authaction";
import CheckBox from '@react-native-community/checkbox';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errortext, setErrortext] = useState("");
  const passwordInputRef = createRef();
  const [isSelected, setSelection] = useState(false);




  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    // Password must have minimum 8 characters, at least 1 uppercase letter, and at least 1 digit
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };




  const handleSubmitPress = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    if(validateEmail(userEmail)){
      if(validatePassword(userPassword)){
        auth()
        .signInWithEmailAndPassword(userEmail, userPassword)
        .then((user) => {
         
          if (user){
            const userr = {
              isLoggedIn: true,
              email: user.user.email,
              userName: user.user.displayName
          };
       
        dispatch(login(userr))
        .then((response) => {
          console.log('response',response);
          if (response.status == "success") {
            navigation.navigate("SideDrowernav");
          }
        })
        .catch((error) => {
          navigation.navigate("LoginScreen");
        });
            
          } 
        })
        .catch((error) => {
          console.log(error);
          if (error.code === "auth/invalid-email"){
            setErrortext(error.message);
          }
           
          else if (error.code === "auth/user-not-found"){
            setErrortext("No User Found");
  
          }
          else {
            setErrortext(
              "Please check your email id or password"
            );
          }
        });
      }else{
        alert('please Enter valid Password (Min 8 characters, At Least 1 uppercase and 1 number)')

      }
    }else{
      alert('please Enter valid email')

    }
   
  };

  return (
    <SafeAreaView style={styles.mainBody}>
     
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: "center" }}>
              {/* <Image
                source={require("../Image/aboutreact.png")}
                style={{
                  width: "50%",
                  height: 100,
                  resizeMode: "contain",
                  margin: 30,
                }}
              /> */}
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password"
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != "" ? (
              <Text style={styles.errorTextStyle}>
                {" "}
                {errortext}{" "}
              </Text>
            ) : null}

<View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>I accept the terms & conditions of the platform"</Text>
      </View>


            <TouchableOpacity
            disabled={isSelected == false ? true : false}
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <Text style={styles.buttonTextStyle}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() =>
                navigation.navigate("RegisterScreen")
              }
            >
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      
    
    </SafeAreaView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#307ecc",
    alignContent: "center",
  },
  sectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  registerTextStyle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent:'center'
  },
  checkbox: {
    alignSelf: 'center',
    
  },
  label: {
    margin: 8,
    color:'white'
  },
});