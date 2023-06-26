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

export const FilterArea = () => {

    return (
        <Select>
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

export const FilterClient = () => {

    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Buyurtmachi"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Buyurtmachi</SelectLabel>
                    <SelectItem value="Golden House MCHJ">Golden House MCHJ</SelectItem>
                    <SelectItem value="Xon Saroy MCHJ">Xon Saroy MCHJ</SelectItem>
                    <SelectItem value="Internal">Internal</SelectItem>
                    <SelectItem value="Enterprise LTD">Enterprise LTD</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export const FilterDesigner = () => {

    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Loyihachi"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Loyihachi</SelectLabel>
                    <SelectItem value="ARXIPROEKT DESIGN GROUP MCHJ">ARXIPROEKT DESIGN GROUP MCHJ</SelectItem>
                    <SelectItem value="Fullhouse Group">Fullhouse Group</SelectItem>
                    <SelectItem value="Archium LTD">Archium LTD</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export const FilterDocument = () => {

    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Xujjat turi"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Xujjat</SelectLabel>
                    <SelectItem value="Ruxsatnoma">Ruxsatnoma</SelectItem>
                    <SelectItem value="Art">Art</SelectItem>
                    <SelectItem value="Kengash xulosasi">Kengash xulosasi</SelectItem>
                    <SelectItem value="Ekspertiza">Ekspertiza</SelectItem>
                    <SelectItem value="Gach xabarnoma">Gach xabarnoma</SelectItem>
                    <SelectItem value="GACH AKT vvod">GACH AKT vvod</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};