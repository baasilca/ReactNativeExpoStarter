import React, {useState,useEffect} from "react"
import {StyleSheet, Text,View, TextInput, FlatList,Image, ScrollView, SafeAreaView, TouchableOpacity} from "react-native"
//import { SearchBar } from 'react-native-elements';

export default function Index(props){
const[data,setData]=useState([])
const [selectedCoffee, setSelectedCoffee] = useState(null);
const[loading,setloading]=useState(true)
const url = "https://api.sampleapis.com/coffee/hot";

const CoffeeNames = [
  { id: 1, name: 'Espresso' },
  { id: 2, name: 'Cappuccino' },
  { id: 3, name: 'Latte' },
  { id: 4, name: 'Macchiato' },
  { id: 5, name: 'Americano' },
  { id: 6, name: 'Mocha' },
];

const handleCoffeePress = (name) => {
  setSelectedCoffee(name);
};


  const [searchText, setSearchText] = useState('');
  
  const filteredCoffeeNames = CoffeeNames.filter(coffee =>
    coffee.name.toLowerCase().includes(searchText.toLowerCase())
  );

  

useEffect(()=>{
  fetch(url)
  .then((response) => response.json())
  .then((json)=>setData(json))
  .catch((error)=>console.error(error))
  .finally(()=>setloading(false))
},[])

const renderItem = ({ item }) => {
    
  return (
    
      <View style={styles.box}>
       
    <Image
        style={styles.image}
        source={{ uri: item.image }}
      />
      <View>
      <Text style={{ fontSize: 25, fontWeight: "bold", alignSelf:"center" }}> {item.title}</Text>
      <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 15, fontWeight: "bold" }}>Description: {item.description}</Text>
      <View style={styles.spacefl} />
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignSelf:'flex-start' }}>
        <Text style={{fontSize:25}}>   Price: $4.7   </Text>
        <View style={styles.spacefl} />
        <TouchableOpacity style={{ backgroundColor: '#f4a460', padding: 5, borderRadius: 10, alignSelf:"flex-end" }}>
        <Text style={{ color: '#fff', fontSize:20}}>  +  </Text>
        </TouchableOpacity>
      </View>
    </View>
    <Text style={styles.text}></Text>
   
    
    </View>
   

  );
};

return (
    
  <View style={styles.container}>
    
    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignSelf:'flex-start' }}>
  <Text style={{ color: 'white' }}>Location:</Text>
  <Text style={{ color:'white', fontWeight:"bold", fontSize:20}}>Mathikere, Banglore</Text>
  <View style={styles.space} />
 </View>
 
 <TextInput
        style={styles.input}
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
  <View  style={{ flexDirection: 'row', justifyContent: 'flex-start', alignSelf:'flex-start' }}>
  <View style={styles.space} />
        {CoffeeNames.map((coffee) => (
          <TouchableOpacity key={coffee.id} onPress={() => handleCoffeePress(coffee.name)} style={styles.coffeeButton}>
            <Text style={styles.coffeeText}>{coffee.name}</Text>
          </TouchableOpacity>
        ))}
        </View>
      
      
      

    {loading ? (
      <Text>Loading...</Text>
    ) : (
      
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        //numColumns={2}
        
      />
    )}
  </View>

  
);
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',    
    alignItems: "center",
    justifyContent:"center",
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
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  text:{
    fontSize: 16,
    color: "black"
  },
  Framepic:{
    width:300,
    height:150,
    alignItems:"center",
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
    backgroundColor: '#f4a460',
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