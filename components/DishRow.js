import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'
import { Entypo } from '@expo/vector-icons';

const DishRow = ({ id, name, short_description, price, image }) => {
    return (
        <View className="bg-white border-gray-100 border-y pb-6">
            <View className="flex-row px-4 items-center justify-between">
                <View className="py-4 w-[280px] px-1">
                    <Text className="text-[16px] font-bold text-[#373636]">{name}</Text>
                    <Text className="mt-2 text-[#a2a0a0]">{short_description}</Text>
                </View>
                <Image source={{ uri: urlFor(image).url() }} className="w-[70px] h-[70px]" />
            </View>
            <View className="px-5 flex-row items-center space-x-1">
                <TouchableOpacity>
                    <Entypo name="circle-with-minus" size={24} color="#39b5d4" />
                </TouchableOpacity>
                <Text className="text-[#a2a0a0]">3</Text>
                <TouchableOpacity>
                    <Entypo name="circle-with-plus" size={24} color="#39b5d4" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DishRow