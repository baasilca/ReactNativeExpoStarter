import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const theme = useTheme();




    const postJSON = async (email, password) => {
        try {
            const postData = {
                email: email,
                password: password,
            };
            const headers = {
                'device-id': 'd12121',
                'app-type': 'web'
            };
            const response = await fetch("https://api.dev.returnredirect.com/api/1.0/auth/login", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(postData),
            });
            const result = await response.json();
            console.log("Success:", result);
            // Perform further actions with the response if needed
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleSubmit = () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted successfully!');
            // You can perform further actions like API call here
            postJSON(email, password);
        } else {
            console.log('Form has errors. Please correct them.');
        }
    };
    
    const validateForm = () => {
        let errors = {};

        // Validate email field
        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }

        // Validate password field
        if (!password) {
            errors.password = 'Password is required.';
        }

        setErrors(errors);
        return errors;
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
                    />
                    {errors.email && <Text style={styles.error}>{errors.email}</Text>}

                    <TextInput
                        label="Password"
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    {errors.password && <Text style={styles.error}>{errors.password}</Text>}

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
        fontSize: 16,
        marginBottom: 10,
    },
});

export default Login;
