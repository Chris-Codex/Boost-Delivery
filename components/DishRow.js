import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { Entypo } from '@expo/vector-icons';
import { addToBasket, removeFromBasket } from '../features/basketSlice/basketSlice';
import { useDispatch, useSelector } from "react-redux"



const DishRow = ({ id, name, short_description, price, image }) => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.basket.items.filter((item) => item.id === id))
    console.log("SATTE", items)
    const [isPressed, setIsPressed] = useState(false)


    const handlePress = () => {
        setIsPressed(!isPressed)
    }

    const handleAddItemsToBasket = () => {
        dispatch(addToBasket({ id, name, short_description, price, image }))
    }

    const handleRemoveItemsFromBasket = () => {

    }


    return (
        <>
            <TouchableOpacity onPress={handlePress} className={`bg-white border-gray-100 border pb-[65px]  ${!isPressed && "pb-2"}`} key={id}>
                <View className="flex-row px-4 items-center justify-between">
                    <View className="py-4 w-[280px] px-1">
                        <Text className="text-[16px] font-bold text-[#373636]">{name}</Text>
                        <Text className="mt-2 text-[#a2a0a0]">{short_description}</Text>
                    </View>
                    <Image source={{ uri: urlFor(image).url() }} className="w-[70px] h-[70px]" />
                </View>
                <Text className="px-5 mt-[-8px] mb-3 text-[13px] text-[#a2a0a0]">${price}</Text>
            </TouchableOpacity>

            {isPressed && (
                <View className="px-5 mt-[-62px] flex-row items-center space-x-1 mb-2">
                    <TouchableOpacity>
                        <Entypo name="circle-with-minus" size={28} color="#39b5d4" />
                    </TouchableOpacity>
                    <Text className="text-[#a2a0a0]">{items.length}</Text>
                    <TouchableOpacity onPress={handleAddItemsToBasket}>
                        <Entypo name="circle-with-plus" size={28} color="#39b5d4" />
                    </TouchableOpacity>
                </View>
            )}
        </>
    )
}

export default DishRow