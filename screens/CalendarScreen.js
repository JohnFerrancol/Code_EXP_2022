import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CalendarScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Calendar Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Calendar', { screen: "Add Reminder" })}>
                <Text>Add Reminder</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
});