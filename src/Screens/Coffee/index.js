import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const index = () => {
  const navigation = useNavigation(); 

  const handleGetStarted = () => {
    navigation.navigate('Login'); 
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('./coffee.png')}
    >
      <View style={styles.overlay}>
        <View style={styles.textcontainer}>
          <Text style={styles.text_1}>
            Coffee so good,{"\n"} your taste buds{"\n"}will love it
          </Text>

          <Text style={styles.text_2}>
            The best grain, the finest roast, the powerful flavour
          </Text>

          <TouchableOpacity onPress={handleGetStarted} style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: '#FFD7B4',
  },
  overlay: {
    flex: 1, 
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textcontainer: {
    marginBottom: 20,
  },
  text_1: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  text_2: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f4a460',
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default index;
