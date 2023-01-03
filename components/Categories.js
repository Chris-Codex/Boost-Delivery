import React from 'react'
import { View, Text, Image } from 'react-native'
import { Meal2 } from "../assets";
import CategoryCard from './CategoryCard';


const Categories = () => {
    return (
        <View className='flex-row space-x-2 mt-5 mb-[20px] px-4'>
            <CategoryCard imgSrc={Meal2} title="Cusine" />
            <CategoryCard imgSrc={Meal2} title="Saldo" />
            <CategoryCard imgSrc={Meal2} title="Shaks" />
            <CategoryCard imgSrc={Meal2} title="Mixa" />
            <CategoryCard imgSrc={Meal2} title="Mixa" />
            <CategoryCard imgSrc={Meal2} title="Mixa" />
        </View>
    )
}

export default Categories