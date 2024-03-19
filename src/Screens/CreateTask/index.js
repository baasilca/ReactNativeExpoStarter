import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {s} from '../../Screens/utils/scale';
function Calculator({props}) {
  const [daysCount, setDaysCount] = useState(0);
  const [opacity, setOpacity] = useState(false);
  const [wish, setWish] = useState(false);
  const pulseAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = () => {
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1.2,
          duration: 600,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 600,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
      ]).start(() => pulse());
    };

    pulse();
  }, [pulseAnimation]);

  useEffect(() => {
    // Parse the birthday string to create a Date object
    const birthdayDate = new Date('2021-02-06');
    // Set the time of both dates to midnight to get accurate day count
    birthdayDate.setHours(0, 0, 0, 0);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // Calculate the difference in days
    const timeDifference = currentDate - birthdayDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const targetDate = new Date(currentDate.getFullYear(), 1, 15);
    const isFebruary15 =
      currentDate.toDateString() === targetDate.toDateString();
    setWish(isFebruary15);
    setDaysCount(daysDifference);

  }, []);

  return (
    <View style={[styles.mainContainer]}>
      {opacity ? (
        <Image
          source={require('../../assets/s.jpg')}
          style={{
            height: s(800),
            width: s(400),
            resizeMode: 'contain',
          }}
        />
      ) : (
        <></>
      )}
      <Text
        style={{
          color: 'black',
          position: 'absolute',
          fontSize: s(15),
          textAlign: 'center',
          fontWeight: 'bold',
          margin: s(10),
          marginTop:s(50)
        }}>{`Happy ${ wish ? "BirthDay" : `${daysCount}th day`}, my love! 🎉💖 On this special milestone, I can't help but marvel at the incredible journey we've shared together. It feels like just yesterday when our hearts started this beautiful adventure, and here we are, celebrating over a thousand days of pure love and joy.

        Our love story is like a breathtaking novel filled with unforgettable chapters. Each day with you is a page-turner, bringing new surprises, laughter, and moments that make my heart skip a beat. From the first day to the ${daysCount}th, our love has only grown stronger, deeper, and more enchanting.
        
        Your love is like a sweet melody that plays in the background of my life, creating a symphony of happiness and warmth. It's the kind of love that feels like a cozy blanket on a chilly day, comforting and reassuring. With you, every day is a celebration of love, filled with sweet gestures, shared dreams, and the magic of togetherness.
        
        Here's to us and our fantastic love that has stood the test of time! 🥂💑 Thank you for being the sweetest part of my life, for turning ordinary moments into extraordinary memories, and for making each day more beautiful than the last. I don't know what the future holds for us, but one thing's for sure – with you by my side, it will be nothing short of amazing.
        
        Happy ${ wish ? "BirthDay" : `${daysCount}th day`}, my love! Here's to countless more days of love, laughter, and sweetness. I love you more than words can express! 💕😘`}</Text>
      <View style={{flex: 1}}></View>
      <View style={{flex: 1}} />
      {!opacity  ? (
        <Pressable
          onPress={() => {
            setOpacity(true);
          }}>
          <Animated.Image
            source={require('../../assets/letter.png')}
            style={{
              height: s(100),
              width: s(100),
              resizeMode: 'contain',
              marginBottom: s(40),
              transform: [{scale: pulseAnimation}],
            }}
          />
        </Pressable>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
});

export default Calculator;
