import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from "react-redux"
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice/basketSlice'
import { useNavigation } from '@react-navigation/native'



const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const navigate = useNavigation()

    if (items.length === 0) return null

    return (
        <View className="absolute bottom-10 px-5 w-full z-index">
            <TouchableOpacity onPress={() => navigate.navigate("Basket")} className="flex-row bg-[#39b5d4] w-full h-[60px] justify-between px-4 items-center rounded-lg shadow-lg">
                <View className="bg-[#1b6578] w-[30px] h-[30px] items-center justify-center">
                    <Text className="text-[#fff] font-bold">{items.length}</Text>
                </View>
                <Text className="flex-1 text-center text-[#fff] text-[15px] font-bold">View Basket</Text>
                <View>
                    <Text className="text-[#fff] font-bold">${basketTotal}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon