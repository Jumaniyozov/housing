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
    {name: "so`m"},
    {name: "y.e."},
]

export const PriceSelect = () => {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Valyuta"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Valyuta</SelectLabel>
                    {vals.map((el) => (
                        <SelectItem key={el.name} value={el.name}>{el.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
