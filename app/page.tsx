import Image from 'next/image'
import {SearchIcon} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Toggle} from "@/components/ui/toggle";
import {filterData} from "@/settings/filterData";
import {GeneralMap} from "@/components/map/GeneralMap";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col pt-6">
            <div className="px-36 w-full">
                <div className="h-36 border border-neutral-200 w-full rounded-lg relative overflow-hidden">
                    <Image className="object-cover" fill src="/burger-king.jpg" alt="burger king"/>
                </div>
                {/*<div className="h-24 border border-neutral-200 w-full rounded-lg mt-6 px-12 flex items-center">*/}
                {/*    <div className="flex gap-4 items-center w-full">*/}
                {/*        <div className="w-6/12">*/}
                {/*            <div className="relative mt-2 rounded-md shadow-sm">*/}
                {/*                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">*/}
                {/*                    <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>*/}
                {/*                </div>*/}
                {/*                <Input*/}
                {/*                    type="email"*/}
                {/*                    name="email"*/}
                {/*                    id="email"*/}
                {/*                    className="py-1.5 pl-10 focus-visible:ring-cyan-500"*/}
                {/*                    placeholder="Qidirish"*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="w-6/12 flex justify-end items-center">*/}
                {/*            <div className="relative mt-2 rounded-md shadow-sm flex gap-4 ">*/}
                {/*                /!*<Button className="bg-cyan-500 hover:bg-cyan-700">*!/*/}
                {/*                /!*    Ro`yxatdan o`tish*!/*/}
                {/*                /!*</Button>*!/*/}
                {/*                <Button className="bg-cyan-500 hover:bg-cyan-700 p-6 text-lg">*/}
                {/*                    Login*/}
                {/*                </Button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="h-24 border border-neutral-200 w-full rounded-lg mt-6 pl-12 flex items-center gap-3">
                    <div className="flex items-center w-3/12 h-full">
                        <Input placeholder="Manzil yoki ZIP code" id="search_house" type="text"
                               className="w-full h-full border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"/>
                    </div>
                    <div className="flex items-center w-3/12 h-full">
                        <Select>
                            <SelectTrigger className="w-full min-w-[180px] focus:ring-cyan-500">
                                <SelectValue placeholder="Hududni tanlang"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Hudud</SelectLabel>
                                    <SelectItem value="Toshkent">Toshkent</SelectItem>
                                    <SelectItem value="Toshkent Viloyati">Toshkent Viloyati</SelectItem>
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
                    <div className="flex items-center w-4/12 h-full  py-2">
                        {/*<div>*/}
                        {/*    <p>Summa (So`m)</p>*/}
                        {/*</div>*/}
                        <div className="flex gap-4">
                            <Input placeholder="Narxi ...dan" id="search_house" type="number"
                                   className="w-full h-full focus-visible:ring-cyan-500"/>
                            <Input placeholder="Narxi ...gacha" id="search_house" type="number"
                                   className="w-full h-full focus-visible:ring-cyan-500"/>
                        </div>
                    </div>
                    <div className="flex items-start w-2/12 h-full flex-col justify-end">
                        <div className="w-full h-full flex justify-end">
                            <Button
                                className="rounded-l-none bg-cyan-500 hover:bg-cyan-700 h-full w-1/2"><SearchIcon/></Button>
                        </div>
                    </div>
                </div>
                <div className="h-24 mt-2 px-12 flex items-center gap-3">
                    <div className="flex items-center gap-4 w-full h-full">
                        {filterData.map((el) => (
                            <Toggle
                                key={el.id}
                                className="data-[state=on]:bg-cyan-500 data-[state=on]:text-white bg-neutral-200/90 hover:bg-cyan-300 h-12 p-3"
                                size="lg" aria-label={`Toggle filter ${el.id}`}>
                                <p>{el.id}</p>
                            </Toggle>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full h-[640px]">
                <GeneralMap/>
            </div>
        </main>
    )
}
