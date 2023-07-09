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
    {name: "Sotiladigan uy"},
    {name: "Sotiladigan kvartira"},
    {name: "Sotiladigan yangi uy"},
    {name: "Sotiladigan tijoriy bino"},
    {name: "Sotiladigan noturar jo"},
    {name: "Sotiladigan dala hovli"},
    {name: "Sotiladigan yer"},
    {name: "Uy ijarasi"},
    {name: "Kvartira ijarasi"},
    {name: "Yangi uy ijarasi"},
    {name: "Tijoriy bino ijarasi"},
    {name: "Noturar joy ijarasi"},
    {name: "Dala hovli ijarasi"},
    {name: "Yer ijarasi"},
]

export const CategorySelect = () => {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Kategoriyani tanlang"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Kategoriya</SelectLabel>
                    {vals.map((el) => (
                        <SelectItem key={el.name} value={el.name}>{el.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
