import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput, useTheme } from 'react-native-paper';


const index = (props) => {
    const theme = useTheme()
    return (

        <ScrollView style={[styles.container, { backgroundColor: theme.colors.primary }]}>
            <View style={{ justifyContent: "center", alignItems: "center", padding: 100 }}>
                <Text style={{ color: "#fff", fontSize: 40 }}>EXPO</Text>
            </View>
            <View style={{ backgroundColor: "#f0f0f0", flex: 1, borderTopLeftRadius: 100 }}>
                <View style={{ padding: 10, justifyContent: "center", alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 30 }}>Login</Text>
                </View>
                <View style={{ padding: 30, flex: 1 }}>
                    <TextInput
                        label="Email"
                        style={{ backgroundColor: "#fff" }}
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

                    <TouchableOpacity  style={[styles.loginButton, { backgroundColor: theme.colors.primary }]}>
                                <Text style={{ color: "#fff", fontSize: 20 }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', }} />
            </View>
            <View style={{ backgroundColor: "#f0f0f0", height: 120, justifyContent: "center", alignItems: "center", flexDirection: 'row' }}>
                <Text style={{}}>Dont't have any account ? </Text>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('Signup')
                }}>
                    <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );

}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginButton: {
        padding: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20,
        minHeight: 65
    }
})