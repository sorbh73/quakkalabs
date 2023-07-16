import React, { useState,useContext } from 'react';
import { View, Text } from 'react-native';
import { useTheme ,DefaultTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import { AuthContext } from '../App';
import './assets/lang/i18n';
import { RadioButton } from 'react-native-paper';

const Settings = () => {
  const [checkedd, setCheckedd] = useState('English');
  const {t, i18n} = useTranslation();
  const [authState,setAuthState] = useContext(AuthContext);
  const [checked, setChecked] = useState(authState.fontFemily);

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };


  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontFamily: authState.fontFemily, fontSize: 24 }}>{t('change font')}</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
      <RadioButton
        value="Poppins-Bold"
        status={ checked === 'Poppins-Bold' ? 'checked' : 'unchecked' }
        onPress={() => {
          setChecked('Poppins-Bold');
          // DefaultTheme.fonts = {fontFemily :'Poppins-Bold'};
          setAuthState({fontFemily:'Poppins-Bold'})

        }}
      />
             <Text style={{alignSelf:'center',fontSize:16,color:'black',fontFamily:'Poppins-Bold'}}>Poppins-Bold</Text>

        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <RadioButton
        value="Poppins-Medium"
        status={ checked === 'Poppins-Medium' ? 'checked' : 'unchecked' }
        onPress={() =>{
          setChecked('Poppins-Medium');
          setAuthState({fontFemily:'Poppins-Medium'})



        }  }
      />
          <Text style={{alignSelf:'center',fontSize:16,color:'black',fontFamily:'Poppins-Medium'}}>Poppins-Medium</Text>


          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <RadioButton
        value="YatraOne-Regular"
        status={ checked === 'YatraOne-Regular' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('YatraOne-Regular');
      
        setAuthState({fontFemily:'YatraOne-Regular'})

      }}
      />
          <Text style={{alignSelf:'center',fontSize:16,color:'black',fontFamily:'YatraOne-Regular'}}>YatraOne-Regular</Text>


          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <RadioButton
        value="Poppins-SemiBold"
        status={ checked === 'Poppins-SemiBold' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('Poppins-SemiBold');
        setAuthState({fontFemily:'Poppins-SemiBold'})


      }}
      />
          <Text style={{alignSelf:'center',fontSize:16,color:'black',fontFamily:'Poppins-SemiBold'}}>Poppins-SemiBold</Text>


          </View>

          <Text style={{ fontFamily: authState.fontFemily, fontSize: 24,marginTop:'5%' }}>{t('change language')}</Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <RadioButton
        value="English"
        status={ checkedd === 'English' ? 'checked' : 'unchecked' }
        onPress={() => {setCheckedd('English');
        changeLanguage('en');

      }}
      />
          <Text style={{alignSelf:'center',fontSize:16,color:'black',fontFamily:authState.fontFemily}}>English</Text>


          </View> 
           <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <RadioButton
        value="Hindi"
        status={ checkedd === 'Hindi' ? 'checked' : 'unchecked' }
        onPress={() => {setCheckedd('Hindi');
        changeLanguage('hi');
      }}
      />
          <Text style={{alignSelf:'center',fontSize:16,color:'black',fontFamily:authState.fontFemily}}>Hindi</Text>


          </View>
      </View>
  );
};

export default Settings;
