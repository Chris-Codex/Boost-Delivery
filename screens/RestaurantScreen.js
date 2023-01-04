import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import DishRow from "../components/DishRow"


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
                <Image source={{ uri: urlFor(imgUrl).url() }} className="w-full h-[200px]" />
                <View className="absolute flex-row justify-between w-full px-4 mt-10">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")} className="w-[35px] bg-white h-[35px]bg-white rounded-lg items-center justify-center shadow-lg">
                        <AntDesign name="left" size={18} color="#39b5d4" />
                    </TouchableOpacity>
                    <View className="w-[35px] h-[35px] bg-white rounded-lg items-center justify-center shadow-lg">
                        <MaterialIcons name="restaurant" size={18} color="#39b5d4" />
                    </View>
                </View>

                <View className="bg-white pb-1">
                    <Text className="px-4 mt-4 font-bold text-[20px]">{title}</Text>
                    <View className="flex-row px-4 mt-1 space-x-2 items-center">
                        <View className="mt-1">
                            <Foundation name="star" size={13} color="#248da8" />
                        </View>
                        <Text className="text-[12.5px] text-[#39b5d4] mt-1">{rating}</Text>
                        <Text className="text-[12.5px] text-[#9da1a2] mt-1">Offers</Text>
                        <View className="flex-row mt-1 space-x-1">
                            <FontAwesome name="map-marker" size={13} color="#a2a0a0" />
                            <Text className="text-[12.5px] text-[#a2a0a0]">{address}</Text>
                        </View>
                    </View>
                    <Text className="px-4 mt-3 text-[#a2a0a0] text-[13.5px]">{short_Description}</Text>

                    <TouchableOpacity className="flex-row px-4 mt-4 border-gray-100 border-y py-4 justify-between">
                        <View className="flex-row space-x-2">
                            <EvilIcons name="question" size={24} color="black" />
                            <Text className="font-bold">Have a good Alergy</Text>
                        </View>
                        <AntDesign name="arrowright" size={16} color="#39b5d4" />
                    </TouchableOpacity>
                </View>

                <Text className="font-bold text-[20px] px-4 mt-4">Menu</Text>

                <View className="mt-4">

                    {dishes.map((dish) => {
                        console.log("DISHES", dish.short_description)
                        return (
                            <DishRow
                                key={dish._id}
                                id={dish._id}
                                name={dish.name}
                                short_description={dish.short_description}
                                price={dish.price}
                                image={dish.image}
                            />
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen