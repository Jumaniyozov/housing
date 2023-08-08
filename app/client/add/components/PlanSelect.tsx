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
import {Plan} from "@/types/Plans";

export const PlanSelect = ({handleChange, data}: {
    handleChange: (id: string, val: string | number | boolean) => void,
    data: Plan[]
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
                    {data.map((el) => (
                        <SelectItem key={el.id} value={el.id.toString()}>{el.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
