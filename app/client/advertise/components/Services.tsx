import React from 'react';
import {Checkbox} from "@/components/ui/checkbox";

const Services = () => {

    return (
        <div className="w-[50%] p-4">
            <ul className="flex flex-col gap-3">
                <li className="border-2 border-black p-2 flex gap-3 items-center"><Checkbox
                    className="data-[state=checked]:bg-brand-500 data-[state=checked]:border-brand-500"/>Ijtimoiy
                    tarmoq
                </li>
                <li className="border-2 border-black p-2 flex gap-3 items-center"><Checkbox
                    className="data-[state=checked]:bg-brand-500 data-[state=checked]:border-brand-500"/>Bildirishnoma
                </li>
                <li className="border-2 border-black p-2 flex gap-3 items-center"><Checkbox
                    className="data-[state=checked]:bg-brand-500 data-[state=checked]:border-brand-500"/>E`lon
                </li>
                <li className="border-2 border-black p-2 flex gap-3 items-center"><Checkbox
                    className="data-[state=checked]:bg-brand-500 data-[state=checked]:border-brand-500"/>Band
                    qilish
                </li>
            </ul>
        </div>
    );
};

export default Services;