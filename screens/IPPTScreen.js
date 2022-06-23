import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function HomeScreen() {

    const [ipptInformation, setIPPTInformation] = useState({
        vocation: "",
        pushUps: 0,
        sitUps: 0,
        run: 510,
    })

    const [ipptPoints, setIPPTPoints] = useState({
        pushUp: 0,
        sitUp: 0,
        run: 0,
        result: "Bronze"
    })

    const convertToMinSec = (value) => {
        const minutes = Math.floor(value / 60);
        const seconds = value - minutes * 60;

        return `${minutes} min ${seconds} seconds`
    }

    useEffect(() => {
        fetch(`https://ippt.vercel.app/api?age=${25}&situps=${Math.round(ipptInformation.sitUps)}&pushups=${Math.round(ipptInformation.pushUps)}&run=${Math.round(ipptInformation.run)}`)
            .then((response) => response.json())
            .then(data => {
                setIPPTPoints({
                    pushUp: data.pushups.score,
                    sitUp: data.situps.score,
                    run: data.run.score,
                    result: data.result.name
                })
            })
            .catch(error => console.log(error))
    }, [ipptInformation])

    return (
        <View style={styles.container}>
            <Text style={styles.header}>IPPT Tracker</Text>
            {/* <Text style={{ color: "white", marginTop: 10 }}>Select Vocation</Text> */}
            {/* <Picker
                selectedValue={ipptInformation.vocation}
                onValueChange={ itemValue => setIPPTInformation(prevInformation => {
                    return {
                        ...prevInformation, 
                        vocation: itemValue
                    }
                })}
                style={{ width: 300 }}
            >
                <Picker.Item style={{ padding: 0 }} label="Combat/Service" value="normal" color="white" />
                <Picker.Item style={{ padding: 0 }} label="Commando/Diver/Guards" value="special" color="white" />
            </Picker> */}
            <Text style={{ color: "white" }}>Push ups: {Math.round(ipptInformation.pushUps)} Points: {ipptPoints.pushUp}</Text>
            <Slider
                style={{ width: 300, height: 50, marginTop: 10}}
                onValueChange={value => setIPPTInformation(prevInformation => {
                    return {
                        ...prevInformation,
                        pushUps: value
                    }
                })}

                minimumValue={0}
                maximumValue={60}
                thumbTintColor="#BD7AE3"
            />
            <Text style={{ color: "white" }}>Sit ups: {Math.round(ipptInformation.sitUps)} Points: {ipptPoints.sitUp}</Text>
            <Slider
                style={{ width: 300, height: 50}}
                onValueChange={value => setIPPTInformation(prevInformation => {
                    return {
                        ...prevInformation,
                        sitUps: value
                    }
                })}

                minimumValue={0}
                maximumValue={60}
                thumbTintColor="#BD7AE3"
            />
            <Text style={{ color: "white" }}>2.4km : {convertToMinSec(Math.round(ipptInformation.run))} Points: {ipptPoints.run}</Text>
            <Slider
                style={{ width: 300, height: 50}}
                onValueChange={value => setIPPTInformation(prevInformation => {
                    return {
                        ...prevInformation,
                        run: value
                    }
                })}

                minimumValue={510}
                maximumValue={1100}
                thumbTintColor="#BD7AE3"
            />

            <Text style={{ color: "white" }}>Total: {ipptPoints.pushUp + ipptPoints.sitUp + ipptPoints.run}</Text>
            <Text style={{ color: "white" }}>Result: {ipptPoints.result}</Text>
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
});