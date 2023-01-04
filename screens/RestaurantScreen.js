import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const RestaurantScreen = () => {
    const navigation = useNavigation()
    const { params: {
        id, imgUrl, title, rating, genre, address, short_Description, dishes, long, lat
    } } = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])


    return (
        <ScrollView>
            <View className="relative">
                <Image source={{ uri: urlFor(imgUrl).url() }} className="w-full h-[180px]" />
                <View className="absolute flex-row justify-between w-full px-4 mt-10">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")} className="w-[35px] bg-white h-[35px]bg-white rounded-lg items-center justify-center">
                        <AntDesign name="left" size={18} color="#39b5d4" />
                    </TouchableOpacity>
                    <View className="w-[35px] h-[35px] bg-white rounded-lg items-center justify-center">
                        <MaterialIcons name="restaurant" size={18} color="#39b5d4" />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen