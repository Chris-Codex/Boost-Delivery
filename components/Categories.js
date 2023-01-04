import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { Meal2 } from "../assets";
import SanityClient, { urlFor } from "../sanity";
import CategoryCard from "./CategoryCard";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    console.log("CAT", categories);

    useEffect(
        () => [
            SanityClient.fetch(
                `
            *[_type  == "category"]
        `
            ).then((data) => {
                setCategories(data);
            }),
        ],
        []
    );

    return (
        <View className="flex-row space-x-2 mt-5 mb-[20px] px-4">
            {categories.map((category) => {
                return <CategoryCard key={category._id} imgSrc={category.image} title={category.name} />;
            })}
        </View>
    );
};

export default Categories;
