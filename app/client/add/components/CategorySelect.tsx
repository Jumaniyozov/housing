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
import {Category} from "@/types/Categories";

export const CategorySelect = ({handleChange, data}: {
    handleChange: (id: string, val: string | number | boolean) => void,
    data: Category[]
}) => {
    const onChange = (val: string) => {
        handleChange("category", val);
        const category = data.find((el) => el.id.toString() === val);
        const is_rent = category?.is_rent;
        handleChange("is_rent", is_rent!);
    }

    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Kategoriya"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Kategoriya</SelectLabel>
                    {data.map((el) => (
                        <SelectItem key={el.id} value={el.id.toString()}>{el.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
