import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { UserIcon } from "../assets";
import { AntDesign } from '@expo/vector-icons';




const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <SafeAreaView>
            <View className="flex-row items-center justify-between mx-4 mt-2">
                <View className="flex-row space-x-2">
                    <View>
                        <Image source={UserIcon} alt="userIcon" className="w-[40px] h-[40px] object-cover rounded-full" />
                    </View>
                    <View>
                        <Text className="text-[12px] text-[#959292]">Deliver now!</Text>
                        <View className="flex-row space-x-1 items-center">
                            <Text className="font-bold">Current Location</Text>
                            <AntDesign name="down" size={14} color="#39b5d4" />
                        </View>
                    </View>
                </View>
                <View>
                    <AntDesign name="user" size={26} color="#39b5d4" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen