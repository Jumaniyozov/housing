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

interface FilterProps {
    onChange: (event: any) => void | undefined;
    value: string;
}

export const FilterObject = (
    {onChange, value}: FilterProps
) => {

    return (
        <Select
            onValueChange={onChange}
            value={value === "" ? undefined : value}
        >
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Obyekt nomi"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Obyekt</SelectLabel>
                    <SelectItem value="Yangiobod Residence">Yangiobod Residence</SelectItem>
                    <SelectItem value="Inifinity">Inifinity</SelectItem>
                    <SelectItem value="Aviasozlar Plaza">Aviasozlar Plaza</SelectItem>
                    <SelectItem value="Kislorod">Kislorod</SelectItem>
                    <SelectItem value="Istanbul city">Istanbul city</SelectItem>
                    <SelectItem value="Mini towers">Mini towers</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export const FilterArea = (
    {onChange, value}: FilterProps
) => {

    return (
        <Select
            onValueChange={onChange}
            value={value === "" ? undefined : value}
        >
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Xududi"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Xudud</SelectLabel>
                    <SelectItem value="Olmazor">Olmazor</SelectItem>
                    <SelectItem value="Yangiobod">Yangiobod</SelectItem>
                    <SelectItem value="Sergeli">Sergeli</SelectItem>
                    <SelectItem value="Mirzo Ulug`bek">Mirzo Ulug`bek</SelectItem>
                    <SelectItem value="Uchtepa">Uchtepa</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};