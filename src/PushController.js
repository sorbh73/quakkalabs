import React, {Component} from "react";
import PushNotification, {Importance} from "react-native-push-notification";
import AsyncStorage from '@react-native-async-storage/async-storage';


// var PushNotification = require("react-native-push-notification");

export default class PushController extends Component{
    componentDidMount(){
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function(token) {
              console.log("TOKEN:", token);
            },
          
            // (required) Called when a remote or local notification is opened or received
            onNotification: async function(notification) {
              console.log("NOTIFICATION:", notification);
              let dataa = {
                "title":notification.title,
                "message":notification.message
              }
              try {
                let notidata =  await AsyncStorage.getItem('my-key');
                if(notidata){
                   let data = JSON.parse(notidata);
                   data.push(dataa);
                   try {
                       await AsyncStorage.setItem('my-key', JSON.stringify(data));
                     } catch (e) {
                       // saving error
                     }
       
                }else{
                   let arrr = [];
                   arrr.push(dataa);
                   try {
                       await AsyncStorage.setItem('my-key', JSON.stringify(arrr));
                     } catch (e) {
                       // saving error
                     }
                }
               } catch (e) {
       console.log(e);
               }
              // process the notification here
          
              // required on iOS only 
            },
            // Android only
            senderID: "127631366625",
            // iOS only
           
            popInitialNotification: true,
            requestPermissions: true
          });
        //   PushNotification.createChannel(
        //     {
        //       channelId: "8979532289", // (required)
        //       channelName: "My channel", // (required)
        //       channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        //       playSound: false, // (optional) default: true
        //       soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        //       importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        //       vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
        //     },
        //     (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        //   );
          PushNotification.getChannels(function (channel_ids) {
            console.log(channel_ids); // ['channel_id_1']
          });
    }
 
    render(){
        return null;
    }
}