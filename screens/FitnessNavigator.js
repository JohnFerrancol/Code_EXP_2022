import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FitnessScreen from "./FitnessScreen";
import IPPTScreen from "./IPPTScreen";
import BMIScreen from "./BMIScreen";

const FitnessStack = createStackNavigator();

export default function FitnessNavigator() {
 return (
   <FitnessStack.Navigator>
    <FitnessStack.Screen name="Fitness Home" options={{ headerShown: false }} component={FitnessScreen} />
    <FitnessStack.Screen name="IPPT Tracker" options={{ headerShown: false }} component={IPPTScreen} />
    <FitnessStack.Screen name="BMI Tracker"  options={{ headerShown: false }} component={BMIScreen} />
   </FitnessStack.Navigator>
 );
}
