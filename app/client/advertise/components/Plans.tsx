"use client"

import {Toggle} from "@/components/ui/toggle";
import {useState} from "react";

const plans = [
    {
        title: "Bronze",
        description: "Tez boshlash",
        price: "50000 so`m"
    },
    {
        title: "Silver",
        description: "Tezkor sotuv",
        price: "10000 so`m"
    },
    {
        title: "Gold",
        description: "Jadal sotuv",
        price: "150000 so`m"
    }
]

const Plans = () => {
    const [isPressed, setIsPressed] = useState<string | null>(null);

    return (
        <div className="flex p-4 gap-3 w-[50%]">
            {plans.map((el) => (
                <div key={el.title} className="w-1/3 h-48 flex justify-center">
                    <div className="flex flex-col gap-3 items-center border-2 border-black shadow-md w-full p-3">
                        <h3 className="text-3xl font-bold">{el.title}</h3>
                        <p className="text-xl">{el.description}</p>
                        <p className="text-2xl text-brand-500">{el.price}</p>
                        <Toggle
                            pressed={el.title === isPressed}
                            onClick={() => setIsPressed(el.title)}
                            className="data-[state=on]:bg-brand-500 data-[state=on]:text-white bg-neutral-200/90 hover:bg-brand-300 hover:text-white p-2"
                            size="lg">
                            <p>Tanlash</p>
                        </Toggle>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Plans;