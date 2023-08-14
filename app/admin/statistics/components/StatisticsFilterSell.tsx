"use client"

import React from 'react';
import {CategorySelect} from "@/app/admin/houseads/add/components/CategorySelect";
import {Category} from "@/types/Categories";
import {CitySelect} from "@/app/admin/houseads/add/components/CitySelect";


export default function StatisticsFiltersSell({categories}: {
    categories: Category[]
}) {

    const handleChange = () => {
    }

    return (
        <div className="w-full flex gap-3 items-start">
            <div className="flex flex-col gap-4 w-full">
                <div className="flex gap-2 w-full">
                    <CategorySelect handleChange={handleChange} data={categories}/>
                    <CitySelect handleChange={handleChange}/>
                </div>
                <div className="flex justify-center">
                    <p className="border-2 p-2 border-black mt-0">
                        Joriy kun holatiga ko’ra jami
                        100 ta obyekt sotuvga qo’yilgan
                    </p>
                </div>
            </div>
        </div>
    );
};