import React from 'react';
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {SearchIcon} from "lucide-react";
import {filterData} from "@/settings/filterData";
import {Toggle} from "@/components/ui/toggle";


const Filters = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="h-20 border border-neutral-200 w-full mt-6 pl-12 flex items-center justify-center gap-3">
                {/*<div className="flex items-center w-3/12 h-full">*/}
                {/*    <Input placeholder="Manzil yoki ZIP code" id="search_house" type="text"*/}
                {/*           className="font-sansNarrow w-full h-full border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"/>*/}
                {/*</div>*/}
                <div className="flex items-center w-3/12 h-full">
                    <Select>
                        <SelectTrigger className="w-full min-w-[180px] focus:ring-cyan-500">
                            <SelectValue placeholder="Hududni tanlang"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Hudud</SelectLabel>
                                <SelectItem className="hover:bg-brand-500 " value="Toshkent">Toshkent</SelectItem>
                                <SelectItem className="hover:bg-brand-500 " value="Toshkent Viloyati">Toshkent Viloyati</SelectItem>
                                {/*<SelectItem value="Andijon">Andijon</SelectItem>*/}
                                {/*<SelectItem value="Buxoro">Buxoro</SelectItem>*/}
                                {/*<SelectItem value="Fargʻona">Fargʻona</SelectItem>*/}
                                {/*<SelectItem value="Jizzax">Jizzax</SelectItem>*/}
                                {/*<SelectItem value="Xorazm">Xorazm</SelectItem>*/}
                                {/*<SelectItem value="Namangan">Namangan</SelectItem>*/}
                                {/*<SelectItem value="Navoiy">Navoiy</SelectItem>*/}
                                {/*<SelectItem value="Qashqadaryo">Qashqadaryo</SelectItem>*/}
                                {/*<SelectItem value="Qoraqalpogʻiston">Qoraqalpogʻiston Respublikasi</SelectItem>*/}
                                {/*<SelectItem value="Samarqand">Samarqand</SelectItem>*/}
                                {/*<SelectItem value="Sirdaryo">Sirdaryo</SelectItem>*/}
                                {/*<SelectItem value="Surxondaryo">Surxondaryo</SelectItem>*/}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center w-3/12 h-full">
                    <Select>
                        <SelectTrigger className="w-full min-w-[180px] focus:ring-cyan-500">
                            <SelectValue placeholder="Tumanni tanlang"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Tuman</SelectLabel>
                                <SelectItem value="Bektemir">Bektemir</SelectItem>
                                <SelectItem value="Chilonzor">Chilonzor</SelectItem>
                                <SelectItem value="Mirobod">Mirobod</SelectItem>
                                <SelectItem value="Mirzo Ulug`bek">Mirzo Ulug`bek</SelectItem>
                                <SelectItem value="Olmazor">Olmazor</SelectItem>
                                <SelectItem value="Sergeli">Sergeli</SelectItem>
                                <SelectItem value="Shayhontohur">Shayhontohur</SelectItem>
                                <SelectItem value="Uchtepa">Uchtepa</SelectItem>
                                <SelectItem value="Yakkasaroy">Yakkasaroy</SelectItem>
                                <SelectItem value="Yashnaobod">Yashnaobod</SelectItem>
                                <SelectItem value="Yunusobod">Yunusobod</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center w-3/12 h-full  py-2">
                    {/*<div>*/}
                    {/*    <p>Summa (So`m)</p>*/}
                    {/*</div>*/}
                    <div className="flex gap-4">
                        <Input placeholder="Narxi ...dan" id="search_house" type="number"
                               className="focus-visible:ring-brand-500"/>
                        <Input placeholder="Narxi ...gacha" id="search_house" type="number"
                               className="focus-visible:ring-brand-500"/>
                    </div>
                </div>
                <div className="flex items-center w-2/12 h-full  py-2">
                    <div className="flex gap-4">
                        <Toggle placeholder="Narxi ...dan" id="search_house"
                                className="data-[state=on]:bg-brand-500 data-[state=on]:text-white bg-neutral-200/90 hover:bg-brand-300 hover:text-white h-10 p-4 px-8">y.e.</Toggle>
                        <Toggle placeholder="Narxi ...gacha" id="search_house"
                                className="data-[state=on]:bg-brand-500 data-[state=on]:text-white bg-neutral-200/90 hover:bg-brand-300 hover:text-white h-10 p-4 px-8">so`m</Toggle>
                    </div>
                </div>
                <div className="flex w-1/12 h-full">
                        <Button
                            className="rounded-l-none bg-brand-500 hover:bg-brand-700 h-full w-full"><SearchIcon/></Button>
                </div>
            </div>
            <div className="h-24 mt-2 px-12 flex items-center gap-3 w-full">
                <div className="grid grid-cols-8 gap-4 w-full h-full">
                    {filterData.map((el) => (
                        <Toggle
                            key={el.id}
                            className="data-[state=on]:bg-brand-500 data-[state=on]:text-white bg-neutral-200/90 hover:bg-brand-300 hover:text-white h-14 p-4 px-8"
                            size="lg" aria-label={`Toggle filter ${el.id}`}>
                            <p>{el.id}</p>
                        </Toggle>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filters;