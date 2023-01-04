import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";
import Sanityclient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurant] = useState([]);

    useEffect(() => {
        Sanityclient.fetch(
            `
            *[_type == "featured" && _id == $id ] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
            }
            }[0]
        `,
            { id }
        ).then((data) => {
            setRestaurant(data?.restaurants);
        });
    }, [id]);

    return (
        <View>
            <View className="flex-row justify-between items-center mr-4">
                <View>
                    <Text className="mx-4 mt-4 font-bold">{title}</Text>
                    <Text className="mx-4 mt-1 text-[11px] text-[#7d7c7c]">
                        {description}
                    </Text>
                </View>
                <AntDesign name="arrowright" size={16} color="#39b5d4" />
            </View>

            {/* Restaurant Cards  */}
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                className="px-4"
            >
                <View className="flex-row mr-4">
                    {restaurants?.map((items) => {
                        return (
                            <RestaurantCard
                                key={items._id}
                                id={items._id}
                                imgUrl={items.image}
                                address={items.address}
                                title={items.name}
                                dishes={items.dishes}
                                rating={items.rating}
                                short_Description={items.short_description}
                                genre={items.genre}
                                long={items.long}
                                lat={items.lat}
                            />
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;
