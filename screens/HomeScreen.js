import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { UserIcon } from "../assets";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategory, setFeaturedCategory] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "featured"] {
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->
                }
                }
            `
            )
            .then((data) => {
                setFeaturedCategory(data);
            });
    }, []);


    return (
        <SafeAreaView className="mt-6">
            {/* HEADER */}
            <View className="relative bg-white h-[140px] mt-[-30px]">
                <View className="flex-row items-center justify-between mx-4 mt-8">
                    <View className="flex-row space-x-2">
                        <View>
                            <Image
                                source={UserIcon}
                                alt="userIcon"
                                className="w-[40px] h-[40px] object-cover rounded-full"
                            />
                        </View>
                        <View>
                            <Text className="text-[12px] text-[#959292]">Deliver now!</Text>
                            <View className="flex-row space-x-1 items-center">
                                <Text className="font-bold">Current Location</Text>
                                <AntDesign name="down" size={14} color="#39b5d4" />
                            </View>
                        </View>
                    </View>
                    <View>
                        <AntDesign name="user" size={26} color="#39b5d4" />
                    </View>
                </View>

                {/* SEARCH FORM */}
                <View className="absolute flex-row justify-between mx-4 mt-2 items-center top-[74px] space-x-2">
                    <View className="w-[315px] h-[40px] bg-[#e3e2e2] justify-center">
                        <TextInput placeholder="Restaurants and cuisine" className="mx-4" />
                    </View>
                    <MaterialIcons
                        name="format-indent-increase"
                        size={18}
                        color="#39b5d4"
                    />
                </View>
            </View>



            {featuredCategory.length > 0 ? (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    className="w-full mb-[120px]"
                >
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        className=""
                    >
                        {/* CATEGORIES */}
                        <Categories />
                    </ScrollView>

                    {/* Featured Row */}
                    {featuredCategory?.map((category) => {
                        return (
                            <FeaturedRow
                                key={category._id}
                                id={category._id}
                                title={category.featured}
                                description={category.short_description}
                            />
                        );
                    })}
                </ScrollView>
            ) : (
                <View>
                    <Text>No Data Available</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

export default HomeScreen;
