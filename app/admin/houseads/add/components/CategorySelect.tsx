"use client"

import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

const vals = [
    {name: "Sotiladigan uy", id: "2", is_rent: false},
    {name: "Arenda kvartira", id: "1", is_rent: true},
]

export const CategorySelect = ({handleChange}: {
    handleChange: (id: string, val: string | number | boolean) => void
}) => {
    // const categories = useCategoriesStore(state => state.categories);
    // console.log(categories);

    const onChange = (val: string) => {
        handleChange("category", val);
        const is_rent = val === "2";
        handleChange("is_rent", is_rent);
    }


    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Kategoriya"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Kategoriya</SelectLabel>
                    {vals.map((el) => (
                        <SelectItem key={el.id} value={el.id}>{el.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
