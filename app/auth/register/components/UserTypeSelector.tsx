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
    {name: "Yuridik", id: "Y"},
    {name: "Jismoniy", id: "J"},
]

export const UserTypeSelector = ({handleChange}: { handleChange: (id: string, val: string) => void }) => {

    const onChange = (val: string) => {
        handleChange("entity", val)
    }


    return (
        <Select onValueChange={onChange} required>
            <SelectTrigger className="w-full col-span-3">
                <SelectValue placeholder="Shaxs turi"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Shaxs turi</SelectLabel>
                    {vals.map((el) => (
                        <SelectItem key={el.id} value={el.id}>{el.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
