

import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import RNTextDetector from "rn-text-detector";


const App=()=> {
  const [filePath, setFilePath] = useState({});
   const[test,settext]=useState('');
useEffect(()=>{
  let fun =()=>{
    SplashScreen.hide();
  }
 setTimeout(fun,2000);
 //setTimeout is only used for lofing gif completly 
  // spalse screen code is at android/app/src/main/res/layout/launch_screen.xml  file and mainActivity.java file
  
  
})


const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
        },
      );
      // If CAMERA Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else return true;
};

const requestExternalWritePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
        },
      );
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      alert('Write permission err', err);
    }
    return false;
  } else return true;
};

const captureImage = async () => {
  let options = {
    mediaType: 'photo',
    maxWidth: 300,
    maxHeight: 550,
    quality: 0.8,
    saveToPhotos: true,
  };
  let isCameraPermitted = await requestCameraPermission();
  let isStoragePermitted = await requestExternalWritePermission();
  if (isCameraPermitted && isStoragePermitted) {
    launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }

      onImageSelect(response.assets[0].uri)
      setFilePath(response);
    });
  }
};

const chooseFile = () => {
  let options = {
    mediaType: 'photo',
    maxWidth: 300,
    maxHeight: 550,
    quality: 0.8,
  };
  launchImageLibrary(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      alert('User cancelled camera picker');
      return;
    } else if (response.errorCode == 'camera_unavailable') {
      alert('Camera not available on device');
      return;
    } else if (response.errorCode == 'permission') {
      alert('Permission not satisfied');
      return;
    } else if (response.errorCode == 'others') {
      alert(response.errorMessage);
      return;
    }
    onImageSelect(response.assets[0].uri)
    setFilePath(response);
  });
};


//this fun is for cpature text from image 
const onImageSelect=async(data)=>{
  const textRecognition = await RNTextDetector.detectFromUri(data);
  settext(textRecognition[0].text);
};
  return (
    <SafeAreaView style={{flex: 1}}>
    <Text style={styles.titleText}>
      capture Image for recongnise text 
     </Text>
    <View style={styles.container}>
      <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',alignSelf:'center',margin:'5%'}}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonStyle}
        onPress={() => captureImage()}>
        <Text style={styles.textStyle}>
          Launch Camera for Image
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonStyle}
        onPress={() => chooseFile()}>
        <Text style={styles.textStyle}>Choose Image</Text>
      </TouchableOpacity>
      </View>
      <Image
        source={{uri: Object.keys(filePath).length === 0 ? null : filePath?.assets[0].uri}}
        style={styles.imageStyle}
      />
<Text style={{margin:20,color:'red'}}>{test == '' ? '':test}</Text>
    </View>
  </SafeAreaView>

  );
}



export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    color:'red',
    backgroundColor:'black',
    borderWidth:1,
    borderColor:'red'
  },
  textStyle: {
    padding: 10,
    color: 'red',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 5,
    borderWidth:0.6,
    borderColor:'red'
  },
  imageStyle: {
    width: '95%',
    height: 300,
    marginTop: 15,
    alignSelf:'center'
  },
});