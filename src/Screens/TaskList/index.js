import React, { useEffect, useState, useRef } from "react";
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
  SafeAreaView,
} from "react-native";
import { s } from "../../Screens/utils/scale";
import { Portal, Modal } from "react-native-paper";
import { Audio } from "expo-av";

function index({ navigation }) {
  const [daysCount, setDaysCount] = useState(0);
  const [wish, setWish] = useState(false);
  const [isPlayerReady, setisPlayerReady] = useState(false);
  const [sound, setSound] = React.useState("");
  const pulseAnimation = useRef(new Animated.Value(1)).current;

  // async function setup() {
  //   let isSetup = await setupPlayer();
  //     await addTrack();
  // }

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(require("./love.mp3"));
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function stopeSound() {

    console.log('stope Sound');
    await sound.unloadAsync();
    setSound("")
  }

  //   useEffect(() => {
  //     playSound();
  //   }, []);

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

  // const start = async () => {
  //   // Set up the player
  //   await TrackPlayer.setupPlayer();

  //   // Add a track to the queue
  //   await TrackPlayer.add({
  //     id: 'trackId',
  //     url: require('../../love.mp3'),
  //     title: 'Track Title',
  //     artist: 'Track Artist',
  //     // artwork: require('track.png')
  //   });

  //   // Start playing it
  //   await TrackPlayer.play();
  // };

  useEffect(() => {
    // start();
    // Parse the birthday string to create a Date object
    const birthdayDate = new Date("2021-02-06");
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
    setTimeout(() => {
      setWish(false);
    }, 10000);
    setDaysCount(daysDifference);
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/pich.jpg")}
      resizeMode="contain"
      style={[styles.mainContainer]}
    >
      <TouchableOpacity onPress={async () => {}}>
        <Text style={{ color: "#EC4E4E", fontSize: 100 }}>{daysCount}</Text>
      </TouchableOpacity>
      <Image
        source={require("../../assets/textl.png")}
        style={{
          height: s(40),
          width: "100%",
          resizeMode: "contain",
          tintColor: "red",
        }}
      />
      <Portal>
        <Modal
          visible={wish}
          //  onDismiss={hideModal}
          //  contentContainerStyle={containerStyle}
        >
          <View
            style={{
              backgroundColor: "#f7f5ff",
              margin: s(10),
              borderRadius: s(10),
            }}
          >
            <Image
              source={require("../../assets/bday.jpg")}
              style={{
                width: s(350),
                resizeMode: "cover",
                height: s(400),
                margin: s(10),
              }}
            />
          </View>
        </Modal>
      </Portal>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1 }} />
      <Pressable
        onPress={async () => {
          if (!sound) {
            playSound();
          }
          navigation.navigate("CreateTask");
        }}
      >
        <Animated.Image
          source={require("../../assets/love-letter.png")}
          style={{
            height: s(100),
            width: s(100),
            resizeMode: "contain",
            marginBottom: s(40),
            transform: [{ scale: pulseAnimation }],
          }}
        />
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    resizeMode: "contain",
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default index;
