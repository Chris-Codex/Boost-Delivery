import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CategoryCard = ({ imgSrc, title }) => {
    return (
        <TouchableOpacity className="reelative w-[60px] h-[60px] bg-gray-600 rounded-lg mr-2">
            <Image source={{
                uri: urlFor(imgSrc).url()
            }} alt="meal2" className="w-[60px] h-[60px] rounded-lg" />
            <View className="absolute left-1">
                <Text className="text-[12px] top-9 text-[#fff] font-bold">{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryCard