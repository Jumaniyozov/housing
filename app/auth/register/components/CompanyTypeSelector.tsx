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
///
const vals = [
    {name: "MCHJ", id: "MCHJ"},
    {name: "YaTT", id: "YATT"},
    {name: "Qo’shma korxona", id: "QK"},
    {name: "Chet el korxonasi", id: "CHK"},
]

export const CompanyTypeSelector = ({handleChange}: { handleChange: (id: string, val: string) => void }) => {

    const onChange = (val: string) => {
        handleChange("company_type", val)
    }


    return (
        <Select onValueChange={onChange} required>
            <SelectTrigger className="w-full col-span-3">
                <SelectValue placeholder="Korxona turi"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Korxona turi</SelectLabel>
                    {vals.map((el) => (
                        <SelectItem key={el.id} value={el.id}>{el.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
