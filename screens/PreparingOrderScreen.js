import { View, Image, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { food_delivery } from "../assets";
import * as Animatable from "react-native-animatable";
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000)
    }, [])

    return (
        <SafeAreaView className="bg-[#39b5d4] flex-1 justify-center items-center">
            <Animatable.Image
                source={food_delivery}
                animation="slideInUp"
                iterationCount={1}
                className="w-[330px] h-[300px] rounded-md"
                alt="food"
            />

            <Animatable.View className="absolute top-[500px] mt-2 w-[330px] ml-2">
                <Text className="font-bold text-center">Orders will be accepted soon!</Text>
            </Animatable.View>

            <Progress.Circle size={60} indeterminate={true} color="white" className="mt-10" />
        </SafeAreaView>
    );
};

export default PreparingOrderScreen;
