import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';
import axios from 'axios';

const index = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const theme = useTheme();

    /*const login_func = async () => {
        try {
            const response = await axios.post('https://api.dev.returnredirect.com/api/1.0/auth/login', {
                email: email,
                password: password
            });
            
            console.log('Login successful:', response.data);
        } catch (error) {
            
            console.error('Login error:', error);
        }
    };*/

    async function postJSON(email,password) {
        try {
          const postData={
    
            email: email,
            
            password: password,
           
      
          }
          const headers = {
            'device-id': 'd12121',
            'app-type': 'web'
          };
          const response = await fetch("https://api.dev.returnredirect.com/api/1.0/auth/login", {
            method: "POST", // or 'PUT'
            headers: headers,
            body: JSON.stringify(postData),
          });
      
          const result = await response.json();
          console.log("Success:", result);
        } catch (error) {
          console.error("Error:", error);
        }
      }

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
                        value={email}
                        onChangeText={setEmail}

                    />
                    <TextInput
                        label="Password"
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity onPress={() =>  postJSON(email, password)}  style={[styles.loginButton, { backgroundColor: theme.colors.primary }]}>
                        <Text style={{ color: "#fff", fontSize: 20 }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', }} />
            </View>
            <View style={{ backgroundColor: "#f0f0f0", height: 120, justifyContent: "center", alignItems: "center", flexDirection: 'row' }}>
                <Text style={{}}>Don't have any account? </Text>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('Signup')
                }}>
                    <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

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
});

export default index;
