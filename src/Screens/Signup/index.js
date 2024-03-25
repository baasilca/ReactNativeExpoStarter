import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput, useTheme } from 'react-native-paper';
import axios from 'axios';

const index = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const theme = useTheme();

    const signup_func = async () => {
        try {
            const response = await axios.post('https://api.dev.returnredirect.com/api/1.0/auth/signup', {
                name: name,
                email: email,
                phone: phone,
                password: password,
                confirmPassword: confirmPassword
            });
            
            console.log('Signup successful:', response.data);
        } catch (error) {
            
            console.error('Signup error:', error);
        }
    };

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
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        label="Email"
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        label="Phone"
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                        value={phone}
                        onChangeText={setPhone}
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
                    <TextInput
                        label="Confirm Password"
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />

                    <TouchableOpacity onPress={signup_func} style={[styles.signupButton, { backgroundColor: theme.colors.primary }]}>
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
});

export default index;
