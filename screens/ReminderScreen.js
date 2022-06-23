import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ReminderScreen() {
    return (
        <View style={styles.container}>
            <Text>Reminder Screen</Text>
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