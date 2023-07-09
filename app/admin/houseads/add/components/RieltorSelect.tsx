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
    {name: "Rieltor"},
    {name: "Shaxsiy"},
]

export const RieltorSelect = () => {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Turi"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Rieltor yoki Shaxsiy</SelectLabel>
                    {vals.map((el) => (
                        <SelectItem key={el.name} value={el.name}>{el.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
