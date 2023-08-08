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
import {districts} from "@/lib/districts";

export const DistrictSelect = ({handleChange, city}: {
    handleChange: (id: string, val: string | number | boolean) => void,
    city: string | undefined
}) => {

    const district = districts[city || 0];

    const onChange = (val: string) => {
        handleChange("district", val)
    }


    return (
        <Select onValueChange={onChange} required>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Tuman"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Tuman</SelectLabel>
                    {district && district.length > 0 &&
                        <>
                            {
                                district.map((el) => (
                                    <SelectItem key={el} value={el}>{el}</SelectItem>
                                ))
                            }
                        </>
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
