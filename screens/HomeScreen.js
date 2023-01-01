import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import { Meal2, Meal3, Meal4, Meal5, Meal6, Meal7, Meal8, UserIcon } from "../assets";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <SafeAreaView>
            {/* HEADER */}
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

            {/* SEARCH FORM */}
            <View className="flex-row justify-between mx-4 mt-2 items-center">
                <View className="w-[315px] h-[40px] bg-[#e3e2e2] justify-center">
                    <TextInput placeholder="Restaurants and cuisine" className="mx-4" />
                </View>
                <MaterialIcons name="format-indent-increase" size={18} color="#39b5d4" />
            </View>

            {/* LIST OF DISHES HEADER */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-[350px] mx-4">
                <View className='flex-row space-x-2 mx-4 mt-4 
                '>
                    <View className="w-[60px] h-[60px] bg-gray-600 rounded-lg">
                        <Image source={Meal2} alt="meal2" className="w-[60px] h-[60px] rounded-lg" />
                        <View className="absolute ml-2">
                            <Text className="text-[12px] text-center top-9 text-[#fff] font-bold">Cusiine</Text>
                        </View>
                    </View>
                    <View className="w-[60px] h-[60px] bg-gray-600 rounded-lg">
                        <Image source={Meal3} alt="meal2" className="w-[60px] h-[60px] rounded-lg" />
                        <View className="absolute ml-2">
                            <Text className="text-[12px] text-center top-9 text-[#fff] font-bold">Cusiine</Text>
                        </View>
                    </View>
                    <View className="w-[60px] h-[60px] bg-gray-600 rounded-lg">
                        <Image source={Meal4} alt="meal2" className="w-[60px] h-[60px] rounded-lg" />
                        <View className="absolute ml-2">
                            <Text className="text-[12px] text-center top-9 text-[#fff] font-bold">Cusiine</Text>
                        </View>
                    </View>
                    <View className="w-[60px] h-[60px] bg-gray-600 rounded-lg">
                        <Image source={Meal5} alt="meal2" className="w-[60px] h-[60px] rounded-lg" />
                        <View className="absolute ml-2">
                            <Text className="text-[12px] text-center top-9 text-[#fff] font-bold">Cusiine</Text>
                        </View>
                    </View>
                    <View className="w-[60px] h-[60px] bg-gray-600 rounded-lg">
                        <Image source={Meal6} alt="meal2" className="w-[60px] h-[60px] rounded-lg" />
                        <View className="absolute ml-2">
                            <Text className="text-[12px] text-center top-9 text-[#fff] font-bold">Cusiine</Text>
                        </View>
                    </View>
                    <View className="w-[60px] h-[60px] bg-gray-600 rounded-lg">
                        <Image source={Meal7} alt="meal2" className="w-[60px] h-[60px] rounded-lg" />
                        <View className="absolute ml-2">
                            <Text className="text-[12px] text-center top-9 text-[#fff] font-bold">Cusiine</Text>
                        </View>
                    </View>
                    <View className="w-[60px] h-[60px] bg-gray-600 rounded-lg">
                        <Image source={Meal8} alt="meal2" className="w-[60px] h-[60px] rounded-lg" />
                        <View className="absolute ml-2">
                            <Text className="text-[12px] text-center top-9 text-[#fff] font-bold">Cusiine</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen