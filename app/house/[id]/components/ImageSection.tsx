import React from 'react';
import Image from "next/image";

const ImageSection = () => {


    return (
        <div className="h-full bg-brandDark-900 w-full">
            <div className="w-full h-[640px] relative">
                <Image fill src="/img/house_d_1.jpg" alt="house image 1" className="object-cover"/>
            </div>
            <div className="flex gap-4 justify-center items-center py-6">
                <div className="relative h-36 w-36">
                    <Image fill className="object-cover" src="/img/house_d_1.jpg" alt="house image detail 1"/>
                </div>
                <div className="relative h-36 w-36">
                    <Image fill className="object-cover" src="/img/house_d_2.jpg" alt="house image detail 1"/>
                </div>
                <div className="relative h-36 w-36">
                    <Image fill className="object-cover" src="/img/house_d_3.jpg" alt="house image detail 1"/>
                </div>
                <div className="relative h-36 w-36">
                    <Image fill className="object-cover" src="/img/house_d_4.jpg" alt="house image detail 1"/>
                </div>
            </div>
        </div>
    );
};

export default ImageSection;