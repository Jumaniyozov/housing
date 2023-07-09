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
    {name: "Ha"},
    {name: "O`tqizsa bo`ladi"},
    {name: "Yo`q"},
]

export const ElectricitySelect = () => {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Mavjudmi"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Elektr ta`minot</SelectLabel>
                    {vals.map((el) => (
                        <SelectItem key={el.name} value={el.name}>{el.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
