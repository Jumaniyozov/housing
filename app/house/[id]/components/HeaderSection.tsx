import React from 'react';
import {Ads} from "@/types/Ads";



const HeaderSection = ({data}: {
    data: Ads
}) => {
    const date = new Date(data.created_at);  // 2009-11-10
    const month = date.toLocaleString('default', {month: 'long'});

    return (
        <div className="flex flex-col gap-6 mt-8">
            <div className="flex justify-between w-full">
                <h2 className="text-3xl uppercase">{data.title}</h2>
                <h3 className="text-3xl text-brand-500">{data.sum} {data.currency} </h3>
            </div>
            <div className="flex justify-between w-full">

                <div className="flex gap-2 items-end">
                    <div className="">
                        <p className="text-lg cursor-pointer hover:text-brand-500 transition">Uylar</p>
                    </div>
                    <div>
                        <p className="text-gray-900/60 font-sansNarrow text-xl">|</p>
                    </div>
                    <div>
                        <p className="text-gray-900/60 font-sansNarrow"> {` ${month} ${date.getDate()},${date.getFullYear()}`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;