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
import {cities} from "@/lib/cities";

export const CitySelect = ({handleChange}: {
    handleChange: (id: string, val: string | number | boolean) => void
}) => {

    const onChange = (val: string) => {
        handleChange("city", val)
    }


    return (
        <Select onValueChange={onChange} required>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Shahar"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Shahar</SelectLabel>
                    {cities.map((el) => (
                        <SelectItem key={el} value={el}>{el}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
