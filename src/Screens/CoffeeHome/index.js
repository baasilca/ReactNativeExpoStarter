import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, TextInput, FlatList, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native"

export default function Index(props) {
  const [data, setData] = useState([])
  const [selectedCoffee, setSelectedCoffee] = useState('hot');
  const [searchText, setSearchText] = useState('');
  const [loading, setloading] = useState(true)

  const url = `https://api.sampleapis.com/coffee/${selectedCoffee}`;

  const CoffeeNames = [
    { id: 1, name: 'Espresso' },
    { id: 2, name: 'Cappuccino' },
    { id: 3, name: 'Latte' },
    { id: 4, name: 'Macchiato' },
    { id: 5, name: 'Americano' },
    { id: 6, name: 'hot' },
  ];

  const handleCoffeePress = (name) => {
    setSelectedCoffee(name);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setloading(false))
  }, [selectedCoffee])

  const filteredCoffeeNames = CoffeeNames.filter(coffee =>
    coffee.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredData = data.filter(coffee => 
    coffee.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item, index }) => {

    return (

      <View style={{ marginLeft: index % 2 != 0 ? 10 : 0, backgroundColor: "#fff", padding: 5, marginBottom: 10 }}>
        <Image
          style={styles.image}
          source={{ uri: item.image }}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}> {item.title}</Text>
        <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 15, fontWeight: "bold" }}>Description: {item.description.slice(0, 10)}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 18 }}>   Price: $4.7   </Text>
          <TouchableOpacity style={{ backgroundColor: '#f4a460', padding: 5, borderRadius: 10, alignSelf: "flex-end" }}>
            <Text style={{ color: '#fff', fontSize: 20 }}>  +  </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (

    <View style={styles.container}>

      <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
        <Text style={{ color: 'white' }}>Location:</Text>
        <Text style={{ color: 'white', fontWeight: "bold", fontSize: 20 }}>Indiranagar, Banglore</Text>
        <View style={styles.space} />
      </View>

      <TextInput
        style={[styles.input, { color: '#fff' }]}
        placeholder="Search coffee..."
        placeholderTextColor="#fff"
        onChangeText={setSearchText}
        value={searchText}
        underlineColorAndroid="transparent"
        borderWidth={2} // Increase the border thickness
        width="90%"
        borderRadius={10}

      />

      <Image
        style={{ alignSelf: 'center' }}
        source={require('./Frame1.png')}
      />
      <View style={styles.space} />
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
        <View style={styles.space} />
        <ScrollView horizontal>
          {filteredCoffeeNames.map((coffee) => (
            <TouchableOpacity key={coffee.id} onPress={() => handleCoffeePress(coffee.name)} style={[styles.coffeeButton,{ backgroundColor:selectedCoffee == coffee.name ? '#f4a460' : "black",}]}>
              <Text style={styles.coffeeText}>{coffee.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {loading ? (
        <Text>Loading...</Text>
      ) : (

        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          numColumns={2}

        />
      )}
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center",
    padding: 20,


  },
  box: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white',
    margin: 3,
    marginVertical: 3,
    marginBottom: 10,

  },
  image: {
    width: 160,
    height: 120,
    borderRadius: 30,
    resizeMode: "contain",
  },
  text: {
    fontSize: 16,
    color: "black"
  },
  Framepic: {
    width: 300,
    height: 150,
    alignItems: "center",
  },
  space: {
    width: 20,
    height: 20,
  },
  spacefl: {
    width: 75,
    height: 15,
  },
  selectedCoffeeContainer: {
    marginTop: 20,
  },
  selectedCoffeeText: {
    fontSize: 20,
    color: 'black',
  },
  coffeeText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  coffeeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  coffeeButton: {
    padding: 15,
    margin: 10,
    borderRadius: 10,

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },



})
