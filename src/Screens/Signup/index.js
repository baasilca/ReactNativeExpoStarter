import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput, useTheme } from 'react-native-paper';

const Index = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const theme = useTheme();

    const handleSubmit = async () => {
        if (!email.trim()) {
          setEmailError('Email is required');
        } else {
          setEmailError('');
        }
    
        if (!password.trim()) {
          setPasswordError('Password is required');
        } else {
          setPasswordError('');
        }
    
        if (!name.trim()) {
          setNameError('Name is required');
        } else {
          setNameError('');
        }
    
        if (!phone.trim()) {
          setPhoneError('Phone number is required');
        } else {
          setPhoneError('');
        }
    
        if (!confirmPassword.trim()) {
          setConfirmPasswordError('Confirm Password is required');
        } else if (password !== confirmPassword) {
          setConfirmPasswordError('Passwords do not match');
        } else {
          setConfirmPasswordError('');
        }
    
        if (email.trim() && password.trim() && name.trim() && phone.trim() && confirmPassword.trim() && password === confirmPassword) {
          try {
            const postData={
                name: name,
                email: email,
                phoneNumber: phone,
                password: password,
                confirmPassword: confirmPassword
          
              }
              const headers = {
                'device-id': 'd12121',
                'app-type': 'web'
              };
              const response = await fetch("https://api.dev.returnredirect.com/api/1.0/auth/signup", {
                method: "POST", // or 'PUT'
                headers: headers,
                body: JSON.stringify(postData),
            });
    
            if (response.ok) {
              // Sign up successful
              console.log('Sign up successful');
              // Navigate to the login page
              props.navigation.navigate('Login');
            } else {
              // Sign up failed
              const errorData = await response.json();
              console.log('Sign up error:', errorData.error);
              Alert.alert('Error', errorData.error);
            }
          } catch (error) {
            console.log('Network error:', error);
            Alert.alert('Error', 'Network error');
          }
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
                        error={nameError ? true : false}
                    />
                    {nameError ? <Text style={styles.error}>{nameError}</Text> : null}
                    <TextInput
                        label="Email"
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                        value={email}
                        onChangeText={setEmail}
                        error={emailError ? true : false}
                    />
                    {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
                    <TextInput
                        label="Phone"
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                        value={phone}
                        onChangeText={setPhone}
                        error={phoneError ? true : false}
                    />
                    {phoneError ? <Text style={styles.error}>{phoneError}</Text> : null}
                    <TextInput
                        label="Password"
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                        error={passwordError ? true : false}
                    />
                    {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
                    <TextInput
                        label="Confirm Password"
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        error={confirmPasswordError ? true : false}
                    />
                    {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}

                    <TouchableOpacity onPress={handleSubmit} style={[styles.signupButton, { backgroundColor: theme.colors.primary }]}>
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
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
    }
});

export default Index;