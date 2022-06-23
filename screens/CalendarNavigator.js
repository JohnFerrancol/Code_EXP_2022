import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CalendarScreen from "./CalendarScreen";
import ReminderScreen from "./ReminderScreen";

const CalendarStack = createStackNavigator();

export default function FitnessNavigator() {
 return (
   <CalendarStack.Navigator>
    <CalendarStack.Screen name="Calendar Screen" options={{ headerShown: false }} component={CalendarScreen} />
    <CalendarStack.Screen name="Add Reminder" options={{ headerShown: false }} component={ReminderScreen} />
   </CalendarStack.Navigator>
 );
}