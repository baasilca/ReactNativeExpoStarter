import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput, useTheme } from 'react-native-paper';


const index = (props) => {
    const theme = useTheme()

    return (

        <ScrollView style={[styles.container, { backgroundColor: theme.colors.primary }]}>
            <View style={{ justifyContent: 'space-between', alignItems: "center", padding: 50, flexDirection: "row" }}>
                <MaterialCommunityIcons name='arrow-left' size={40} color={"#fff"} onPress={() => { props.navigation.goBack() }} />
                <Text style={{ color: "#fff", fontSize: 40 }}>Sign Up</Text>
                <View></View>
            </View>
            <View style={{ backgroundColor: "#f0f0f0", flex: 1, borderTopLeftRadius: 100 }}>
                <View style={{ padding: 30, flex: 1, marginTop: 20 }}>
                    <TextInput
                        label="Name"
                        style={{ backgroundColor: "#fff" }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                    />
                    <TextInput
                        label="Email"
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                    />
                          <TextInput
                        label="Phone"
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                    />
                    <TextInput
                        label="Password"
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                        secureTextEntry={true}
                    />
                    <TextInput
                        label="Confirm Password"
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={[styles.signupButton, { backgroundColor: theme.colors.primary }]}>
                            <Text style={{ color: "#fff", fontSize: 20 }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 120, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{}}>You have account ? </Text>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate('Login')
                    }}>
                        <Text style={{ fontWeight: "bold" }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    signupButton: {
        padding: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20,
        minHeight: 65
    }
})