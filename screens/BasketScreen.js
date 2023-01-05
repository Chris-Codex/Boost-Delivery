import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectRestaurants } from '../features/restaurantSlice/restaurantSlice'
import { selectBasketItems } from '../features/basketSlice/basketSlice'
import { useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';


const BasketScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const restaurant = useSelector(selectRestaurants)
    const items = useSelector(selectBasketItems)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results
        }, {})

        setGroupedItemsInBasket(groupedItems)
    }, [])

    console.log("GROUPED", groupedItemsInBasket)
    return (
        <SafeAreaView>
            <View className="flex-row justify-between items-center px-5 bg-[#39b5d4] h-[70px]">
                <View className="items-center justify-center">
                    <Text className="text-[#fff] font-bold text-[17px]">Your group order</Text>
                    <View className="flex-row items-center">
                        <MaterialIcons name="food-bank" size={26} color="black" />
                        <Text className="text-[#dedbdb] font-bold text-[14px]">Melon Lime</Text>
                    </View>
                </View>
                <View>
                    <MaterialIcons name="cancel" size={26} color="black" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen