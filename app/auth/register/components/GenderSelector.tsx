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
    {name: "Erkak", id: "M"},
    {name: "Ayol", id: "F"},
]

export const GenderSelector = ({handleChange}: { handleChange: (id: string, val: string) => void }) => {
    const onChange = (val: string) => {
        handleChange("sex", val)
    }


    return (
        <Select onValueChange={onChange} required>
            <SelectTrigger className="w-full col-span-3">
                <SelectValue placeholder="Jins"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Jinsingizni tanlang</SelectLabel>
                    {vals.map((el) => (
                        <SelectItem key={el.id} value={el.id}>{el.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
