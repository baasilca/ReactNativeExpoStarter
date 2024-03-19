import React, { useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground,TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Context } from '../../store';


const index = (props) => {
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        if (state?.taskDatas?.length) {
            props.navigation.navigate("TaskList")
        }
    }, [state])
    return (

        <View style={styles.container}>
            <View style={{ height: "70%", backgroundColor: "#7c4afa", borderBottomLeftRadius: 100, borderBottomRightRadius: 100 }}>
                <ImageBackground source={require('../../../assets/elipse.png')} style={{ height: 300, width: 300, flex: 1, justifyContent: 'center' }}>
                    <Image source={require('../../../assets/task.png')} style={{ height: 350, width: 350, alignSelf: 'center', marginTop: 100, marginLeft: 100 }} />
                </ImageBackground>
            </View>
            <View style={{ justifyContent: "center", marginTop: 30 }}>
                <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>Add a task {'\n'} to get started</Text>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("CreateTask")
                }} style={{ justifyContent: 'center', alignSelf: 'center', backgroundColor: "#7c4afa", borderRadius: 30, padding: 15, marginTop: 30 }}>
                    <MaterialCommunityIcons name="plus" size={25} color={"#fff"} />
                </TouchableOpacity>
            </View>
        </View>
    );

}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
