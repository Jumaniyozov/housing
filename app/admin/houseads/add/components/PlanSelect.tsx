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
    {name: "Kunlik", id: "1", price: 10000, duration: 1},
    {name: "Haftalik", id: "2", price: 50000, duration: 7},
    {name: "Oylik", id: "3", price: 100000, duration: 30},
]

export const PlanSelect = ({handleChange}: {
    handleChange: (id: string, val: string | number | boolean) => void
}) => {

    const onChange = (val: string) => {
        handleChange("plan_id", val)
    }


    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Plan"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Plan</SelectLabel>
                    {vals.map((el) => (
                        <SelectItem key={el.id} value={el.id}>{el.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
