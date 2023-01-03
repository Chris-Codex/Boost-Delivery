import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { urlFor } from '../sanity';

const RestaurantCard = ({
    id, imgUrl, title, rating, genre, address, short_Description, dishes, long, lat
}) => {
    return (
        <View className="flex-row mt-4 mr-2">
            <TouchableOpacity className="w-[180px] h-[182px] bg-white" key={id}>
                <Image source={{
                    uri: urlFor(imgUrl).url()
                }} alt="meal2" className="w-[180px] h-[110px]" />
                <View className="ml-2">
                    <Text className="text-[12px] text-center top-9 text-[#fff] font-bold">{title}</Text>
                </View>
                <Text className="mt-[-5px] mx-2 font-bold text-[13px]">{title}</Text>
                <View className="mx-2 flex-row space-x-1 items-center">
                    <Entypo name="star" size={13} color="#39b5d4" />
                    <Text className="text-[10px] text-[#39b5d4]">{rating}</Text>
                    <Text className="text-[11px] text-[#a2a0a0]">{genre}</Text>
                </View>
                <View className="flex-row mx-2 mt-1 space-x-1">
                    <FontAwesome name="map-marker" size={13} color="#a2a0a0" />
                    <Text className="text-[11px] text-[#a2a0a0]">{address}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default RestaurantCard