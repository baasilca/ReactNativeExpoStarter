import React from 'react';
import { StyleSheet, View, Text, Button , ImageBackground} from 'react-native';

const CoffeeUI = () => {
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

          <Button 
            title="Get Started"
            color="#f4a460"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    //justifyContent: 'flex-end',
    backgroundColor: '#FFD7B4',
  },
  overlay: {
    flex: 1, 
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textContainer: {
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
    backgroundColor: '#FFD7B4',
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default CoffeeUI;
