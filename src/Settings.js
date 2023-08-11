import React, { useState,useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";

import {logout } from "./auth/authaction";

const Settings = ({navigation}) => {
  const dispatch = useDispatch();

const logoutt =()=>{
    dispatch(logout()).then((response) => {
    if (response.status === "success") {
      navigation.replace("LoginScreen");
    }
  });
}
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={()=>logoutt()}>
         <Text>Logout</Text>
        </TouchableOpacity>
      </View>
  );
};

export default Settings;
