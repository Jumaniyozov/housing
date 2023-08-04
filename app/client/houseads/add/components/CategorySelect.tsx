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
    {name: "Sotiladigan uy", id: "house"},
    {name: "Arenda", id: "rent"},
]

export const CategorySelect = () => {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Kategoriyani tanlang"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Turi</SelectLabel>
                    {vals.map((el) => (
                        <SelectItem key={el.name} value={el.name}>{el.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
