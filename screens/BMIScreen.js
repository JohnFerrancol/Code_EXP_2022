import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

export default function HomeScreen() {

    const [bmiInformation, setBMIInformation] = useState({
        height: 100,
        weight: 20,
        bmi: 0,
        status: ""
    })

    useEffect(() => {
        let status
        if (bmiInformation.bmi === 0 ) {
            status = "No Status"
        } else if (bmiInformation.bmi < 18.5) {
            status = "Underweight"
        } else if (bmiInformation.bmi < 25) {
            status = "Normal"
        } else if (bmiInformation.bmi < 30) {
            status = "Overweight"
        } else {
            status = "Obese"
        }

        setBMIInformation(prevInformation => {
            return {
                ...prevInformation,
                status: status
            }
        })
    }, [bmiInformation.bmi])

    const showBMI = () => {
        const height = bmiInformation.height / 100
        const weight = bmiInformation.weight
        const bmi = weight / (height * height)

        setBMIInformation(prevInformation => {
            return {
                ...prevInformation,
                bmi: parseFloat(bmi).toFixed(1)
            }
        })
    }


    return (
        <View style={styles.container}>
            <Text style={styles.header}>BMI Tracker</Text>
            <Text style={{ color: "white" }}>BMI: { bmiInformation.bmi ? bmiInformation.bmi : "NO BMI" }</Text>
            <Text style={{ color: "white" }}>Status: { bmiInformation.status ? bmiInformation.status : "No Status" }</Text>
            <Text style={{ color: "white" }}>Height: {bmiInformation.height ? Math.round(bmiInformation.height) : 100} cm</Text>
            <Slider
                style={{ width: 300, height: 50, marginTop: 10}}
                onValueChange={value => setBMIInformation(prevInformation => {
                    const roundedValue = Math.round(value)
                    return {
                        ...prevInformation,
                        height: roundedValue
                    }
                })}
                minimumValue={100}
                maximumValue={250}
                thumbTintColor="#BD7AE3"
            />
            <Text style={{ color: "white" }}>Weight: {bmiInformation.weight ? Math.round(bmiInformation.weight) : 20} kg</Text>
            <Slider
                style={{ width: 300, height: 50}}
                onValueChange={value => setBMIInformation(prevInformation => {
                    const roundedValue = Math.round(value)
                    return {
                        ...prevInformation,
                        weight: roundedValue
                    }
                })}

                minimumValue={20}
                maximumValue={150}
                thumbTintColor="#BD7AE3"
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={showBMI}
            >
                <Text style={styles.buttonText}>Show BMI</Text>
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
        backgroundColor: "#6C63FF",
        padding: 20,
        borderRadius: 100,
        marginTop: 40,
        width: "50%",
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