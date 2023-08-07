import React from 'react';
import Image from "next/image";

const apiURL = `${process.env.NEXT_PUBLIC_SELF_URL}/api/static`;

const ImageSection = ({data}: {
    data: string[]
}) => {


    return (
        <> {
            data.length > 0 &&
            <div className="h-full bg-brandDark-900 w-full">
                <div className="w-full h-[640px] relative">
                    <Image fill src={`${apiURL}/${data[0]}`} alt="house image 1" className="object-cover"/>
                </div>
                <div className="flex gap-4 justify-center items-center py-6">
                    {data.map((el) => (
                        <div className="relative h-36 w-36" key={el}>
                            <Image fill className="object-cover" src={`${apiURL}/${el}`} alt="house image detail 1"/>
                        </div>
                    ))
                    }
                </div>
            </div>
        }
        </>
    );
};

export default ImageSection;