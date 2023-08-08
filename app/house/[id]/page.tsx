"use client"

import React, {useEffect, useState} from 'react';
import ImageSection from "@/app/house/[id]/components/ImageSection";
import HeaderSection from "@/app/house/[id]/components/HeaderSection";
import {MapPin} from "lucide-react";
import {useParams} from "next/navigation";
import {Ads} from "@/types/Ads";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/ads`

const Page = () => {
    const [houseData, setHouseData] = useState<Ads | null>(null);

    const params = useParams();

    useEffect(() => {
        const gethouse = async () => {
            const res = await fetch(baseURL + `/${params.id}`)
            const resJson = await res.json()
            return resJson;
        }
        gethouse().then(r => setHouseData(r)).catch(err => console.error(err));
    }, [params.id]);

    return (
        <>
            {houseData &&
                <main className="flex h-full flex-col mt-8">
                    <div className="w-8/12 mx-auto h-full">
                        <ImageSection data={houseData.images}/>
                        <HeaderSection data={houseData}/>
                        <div className="mt-8 border-t border-neutral-400">
                            <div className="mt-8 flex flex-col gap-10">
                                <div className="flex gap-3 items-end">
                                    <MapPin className="text-gray-900/60 h-6 w-6"/>
                                </div>
                                <div className="flex gap-3 flex-col text-lg">
                                    <p className="font-sansNarrow text-gray-900/60">{houseData.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-neutral-400">
                            <div className="mt-8 flex flex-col gap-10">
                                <div className="flex gap-3 items-end">
                                </div>
                                <div className="gap-3 text-md grid grid-cols-3">
                                    <p className="text-gray-900/60 font-sansNarrow">Umumiy
                                        maydoni: {houseData.total_area}</p>
                                    <p className="text-gray-900/60 font-sansNarrow">Yashash
                                        maydoni: {houseData.living_area}</p>
                                    <p className="text-gray-900/60 font-sansNarrow">Xonalar: {houseData.room_quantity}</p>
                                    {houseData.floor > 0 &&
                                        <p className="text-gray-900/60 font-sansNarrow">Qavat: {houseData.floor}</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </main>}
        </>
    );
};

export default Page;