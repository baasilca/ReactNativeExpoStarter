import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';

const Index = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const theme = useTheme();

    const { email: storedEmail, password: storedPassword } = props.route.params || { email: '', password: '' };


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
    
           
        if (email.trim() && password.trim() ) {
          try {
            const response = await fetch('https://api.dev.returnredirect.com/api/1.0/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
            
                email,
                password,
                }),
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
              //Alert.alert('Error', errorData.error);
            }
          } catch (error) {
            console.log('Network error:', error);
            //Alert.alert('Error', 'Network error');
          }
        }
      };


   

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
                        error={emailError ? true : false}
                    />
                    {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
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
                    <TouchableOpacity onPress={handleSubmit} style={[styles.loginButton, { backgroundColor: theme.colors.primary }]}>
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
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
    }
});

export default Index;