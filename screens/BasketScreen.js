import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectRestaurants } from '../features/restaurantSlice/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal, selectBasketItemsWithId } from '../features/basketSlice/basketSlice'
import { useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';
import UserIcon from "../assets/usericon.webp"
import { urlFor } from '../sanity';




const BasketScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const restaurant = useSelector(selectRestaurants)
    const basketTotal = useSelector(selectBasketTotal)
    const items = useSelector(selectBasketItems)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

    const roundTotal = basketTotal + 6.00
    const totalBasket = Math.round(roundTotal * 100) / 100

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results
        }, {})

        setGroupedItemsInBasket(groupedItems)
    }, [items])

    console.log("GROUPED", groupedItemsInBasket)
    return (
        <SafeAreaView className="flex-1">
            <View className="relative">
                <View className="flex-row justify-between items-center px-5 bg-[#39b5d4] h-[80px]">
                    <View className="items-center justify-center">
                        <Text className="text-[#fff] font-bold text-[19px]">Your group order</Text>
                        <View className="flex-row items-center">
                            <MaterialIcons name="food-bank" size={26} color="black" />
                            <Text className="text-[#dedbdb] font-bold text-[14px]">{restaurant.title}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <MaterialIcons name="cancel" size={28} color="black" />
                    </TouchableOpacity>
                </View>

                <View className="relative bg-[#efecec] h-[60px] flex-row justify-between items-center px-5">
                    <View className="flex-row space-x-3 items-center justify-center">
                        <Image source={UserIcon} alt="name" className="w-[30px] h-[30px] rounded-full" />
                        <Text className="text-[#999]">Deliver in 50-75 min</Text>
                    </View>
                    <TouchableOpacity>
                        <Text className="text-[#39b5d4]">Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className="mt-10 shadow-lg">
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => {
                        console.log("ITEMS", items)
                        return (
                            <View className="bg-[#efecec] h-[60px] items-center flex-row justify-between w-full border-gray-300 border-y" key={key}>
                                <View className="flex-row space-x-3 px-5 items-center">
                                    <Text className="text-[#39b5d4]">{items.length} x</Text>
                                    <Image source={{ uri: urlFor(items[0]?.image).url() }} alt="name" className="w-[30px] h-[30px] rounded-full" />
                                    <Text>{items[0]?.name}</Text>
                                </View>
                                <View className="flex-row space-x-3 px-5 items-center">
                                    <View className="w-[70px] h-[40px] bg-[#e1dede] items-center justify-center rounded-full">
                                        <Text>${items[0]?.price}</Text>
                                    </View>

                                    <TouchableOpacity>
                                        <Text className="text-[#39b5d4]" onPress={() => dispatch(removeFromBasket({ id: key }))}>remove</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>


                <View className="bg-[#e1dede] mt-[115px] w-full h-[250px] ">
                    <View className="flex-row justify-between px-5 mt-4">
                        <Text className="text-[#848484]">Subtotal</Text>
                        <Text className="text-[#848484]">${basketTotal}</Text>
                    </View>
                    <View className="flex-row justify-between px-5 mt-4">
                        <Text className="text-[#848484]">Delivery Fee</Text>
                        <Text className="text-[#848484]">$6.00</Text>
                    </View>
                    <View className="flex-row justify-between px-5 mt-4">
                        <Text>Order Total</Text>
                        <Text className="font-bold">${totalBasket}</Text>

                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("PreparingOrder")} className="bg-[#39b5d4] mt-4 w-[350px] h-[60px] mx-5 rounded-lg items-center justify-center">
                        <Text className="text-center text-[#fff] text-[16px] font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen



