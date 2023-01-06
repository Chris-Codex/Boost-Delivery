import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurants } from '../features/restaurantSlice/restaurantSlice';
import { MaterialIcons } from '@expo/vector-icons';
import * as Progress from "react-native-progress"
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurants)

    console.log("RESTAU", restaurant)


    return (
        <View className="bg-[#39b5d4] flex-1">
            <SafeAreaView className="z-index">
                <View className="flex-row justify-between items-center px-5">
                    <TouchableOpacity className={() => navigation.navigate("Home")}>
                        <MaterialIcons name="cancel" size={32} color="white" />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                            <Text className="text-4xl font-bold">45-55 Minutes</Text>
                        </View>
                        <Image source={{ uri: "http://links.papareact.com/fls" }} className="h-20 w-20" />
                    </View>

                    <Progress.Bar size={30} color="#39b5d4" indeterminate={true} />

                    <Text className="mt-3 text-gray-500">
                        Your order at {restaurant.title} is being prepared
                    </Text>
                </View>
            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                className="flex-1 mt-6 z-0"
                mapType="mutedStandard"
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_Description}
                    identifier="origin"
                    pinColor='#39b5d4'
                />
            </MapView>

            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
                <Image source={{ uri: "https://links.papareact.com/wru" }} className='h-12 w-12 bg-slate-300 rounded-full ml-5' />
                <View className="flex-1">
                    <Text className="text-lg">Kola Ayinde</Text>
                    <Text className="text-gray-400">Your rider</Text>
                </View>

                <Text className="text-[#39b5d4] text-lg mr-5 font-bold">Call</Text>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen