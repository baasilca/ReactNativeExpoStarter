import React, {useEffect} from 'react';
import { StyleSheet, View, Text ,TouchableOpacity, ImageBackground} from 'react-native';
import coffeeImage from './coffee.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Index = (props) => {

useEffect(()=>{

  AsyncStorage.getItem("getStartedButtonPressed").then((value) => {
    console.log("--------",value);
    if(value == "true"){
      props.navigation.navigate('Login')
    }
})
.then(res => {
    //do something else
});

},[])

  return (
    <ImageBackground
    style={styles.container}
    source={coffeeImage}
  >
      <View style={styles.content}>
      <View style={styles.space} />
        <Text style={styles.text}>
          Coffee so good, your taste buds will love it.
        </Text>

        <Text style={styles.text2}>
          The best grain, the finest roast, the powerful flavour. 
        </Text>

         <TouchableOpacity style={{ backgroundColor: '#f4a460', padding: 10, borderRadius: 10 }}  onPress={() => {
                      AsyncStorage.setItem("getStartedButtonPressed","true")
                      props.navigation.navigate('Login')
                    }}>
  <Text style={{ color: '#fff', fontSize:20}}> Get started </Text>
</TouchableOpacity>
      </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FFD7B4',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color:'white',
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },

  space: {
    width: 50, 
    height: 400,
  },

  text2:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:30,
    textAlign:'center',
    color:'#dcdcdc',
  }
});
export default Index;