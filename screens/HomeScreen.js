import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to NSNitro!</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Fitness Tracker')}>
                <Text style={styles.buttonText}>Fitness Tracker</Text>
                <FontAwesome name="heart" size={30} color="red" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Calendar')}
            >
                <Text style={styles.buttonText}>Calendar</Text>
                <FontAwesome name="calendar" size={30} color="yellow" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000"
    },
    header: {
        color: "white",
        justifyContent: "center",
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 10
    },
    button: {
        backgroundColor: "#303134",
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 10,
    },

});
