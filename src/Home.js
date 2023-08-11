import React,{useContext,useState,useEffect} from "react";
import { View,Text ,Dimensions,ActivityIndicator,FlatList,Image, TouchableOpacity} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useFocusEffect} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {logout } from "./auth/authaction";
import { useDispatch } from "react-redux";


const Home=({navigation})=>{
  const dispatch = useDispatch();


  const [loding,setloding] = useState(true);
  const [products,setproducts]=useState([]);
  const [productdata,setproductdata]=useState();

  const [flag,setflag] = useState(false);
  const [auth,setauth]=useState(true);
  const {t, i18n} = useTranslation();
// useEffect(()=>{
//   dispatch(logout()).then((response) => {
//     if (response.status === "success") {
//       navigation.replace("LoginScreen");
//     }
//   });
// })
    useFocusEffect(
        React.useCallback(() => {
         
          LoginHandler()
    
          return () => null;
        }, [])
      );
    
      const LoginHandler = () => {
 
    
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };
    
        fetch('https://dummyjson.com/products', requestOptions)
          .then(response => response.json())
          .then(result => {
            // console.log(result);
            if (result.products.length > 0) {
            setproducts(result.products);
            setloding(false);
            } else {
              setproducts([]);
              setloding(false);
            }
          })
          .catch(error => console.log('error', error));
      };
    return(
      
        <View style={{flex:1,backgroundColor:'white'}}>
         
         
           
            
            {loding ?  <View style={{flex:1,justifyContent:'center'}}>
            <ActivityIndicator />
            </View> : flag ? 
            <View style={{flex:1,justifyContent:'flex-start'}}>
              <View style={{width:windowWidth,height:windowHeight*0.08,backgroundColor:'black',flexDirection:'row'}}>
              <MaterialIcons name="keyboard-arrow-left" color={'red'} size={50} style={{marginTop:'2%'}} onPress={()=>setflag(false)} />
            <Text style={{fontSize:20,color:'red',left:'5%',marginTop:'5%'}}>products</Text>
            </View> 
            <View style={{height:200}}>
            <FlatList
        data={productdata.images}
        horizontal={true}
        renderItem={({item, index, separators}) => (
            <View
            style={{alignSelf:'center',backgroundColor:'lightgrey'}}
             >
              <View >
              <Image style={{width:windowWidth,height:200}}  resizeMode='cover' source={{uri:item}}/>
   {/* <Text>{item}</Text> */}
              </View>
            </View>
          )}
        
        keyExtractor={item => item.id}
      />
            </View>
            <View style={{width:'90%',alignSelf:'center'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'5%'}}>
                <Text style={{color:'black',fontSize:16,fontFamily:'YatraOne-Regular'}}>Name:</Text>
                <Text style={{color:'black',fontSize:16,fontFamily:'YatraOne-Regular'}}>{productdata.title}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'1%'}}>
                <Text style={{color:'black',fontSize:16,fontFamily:'YatraOne-Regular'}}>Description: </Text>
                <Text style={{color:'black',fontSize:16,fontFamily:'YatraOne-Regular' ,width:'70%'}}>{productdata.description}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'1%'}}>
                <Text style={{color:'black',fontSize:16,fontFamily:'YatraOne-Regular'}}>price: </Text>
                <Text style={{color:'black',fontSize:16,fontFamily:'YatraOne-Regular'}}>{productdata.price}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'1%'}}>
                <Text style={{color:'black',fontSize:16,fontFamily:'YatraOne-Regular'}}>DiscountPercentage: </Text>
                <Text style={{color:'black',fontSize:16,fontFamily:'YatraOne-Regular'}}>{productdata.discountPercentage}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'1%'}}>
                <Text style={{color:'black',fontSize:16,fontFamily:'YatraOne-Regular'}}>stock: </Text>
                <Text style={{color:'black',fontSize:16,fontFamily:'YatraOne-Regular'}}>{productdata.stock}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'1%'}}>
                <Text style={{color:'black',fontSize:16,fontFamily:'YatraOne-Regular'}}>brand: </Text>
                <Text style={{color:'black',fontSize:16,fontFamily:'YatraOne-Regular'}}>{productdata.brand}</Text>
              </View>
            </View>
          
            </View> :
            <View>
              
            <FlatList
              data={products}
              renderItem={({item, index, separators}) => (
                  <View
                  style={{width:'97%',alignSelf:'center'}}
                   >
                    <TouchableOpacity onPress={()=>{setflag(true);
                    setproductdata(item);}} style={{backgroundColor: 'lightgrey',margin:'2%',borderRadius:10}}>
                      <Image style={{width:'100%',height:windowHeight*0.25,margin:'2%'}}  resizeMode='contain' source={{uri:item.thumbnail}}/>
                      <Text style={{fontSize:20,left:'2%',fontFamily:'YatraOne-Regular'}}>{item.title}</Text>
      
                    </TouchableOpacity>
                  </View>
                )}
              
              keyExtractor={item => item.id}
            />
              </View>
             
            }
            {/* <Text style={{margin:'5%',fontSize:22,fontFamily:'YatraOne-Regular',alignSelf:'center'}}>{t('maintext')}</Text> */}

        </View>
    )
};
export default Home;