import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function FitnessScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Fitness Tracker</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Fitness Tracker', { screen: "IPPT Tracker" })}
            >
                <Text style={styles.buttonText}>IPPT Tracker</Text>
                <FontAwesome5 name="dumbbell" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Fitness Tracker', { screen: 'BMI Tracker' })}
            >
                <Text style={styles.buttonText}>BMI Tracker</Text>
                <MaterialCommunityIcons name="scale-bathroom" size={30} color="white" />
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
        marginTop: 40,
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

