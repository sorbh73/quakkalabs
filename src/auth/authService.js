import AsyncStorage from "@react-native-async-storage/async-storage";
const logIn = async (userr) => {
  console.log("user info", userr);
  const { isLoggedIn, email,userName } = userr;
    AsyncStorage.setItem("user", JSON.stringify(userr));
    return {
      status: "success",
      message: "You are redirecting to home page",
      user: userName,
    };
  
};
const logOut = async () => {
  AsyncStorage.clear();
  return {
    status: "success",
    message: "You are logged out",
  };
};

export default {
  logIn,
  logOut,
};