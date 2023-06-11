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
        <main className="flex h-full flex-col">
            <div className="w-full xl:h-[480px]">
                <GeneralMap/>
            </div>
            <div className="px-36 w-full">
                <div className="h-24 border border-neutral-200 w-full mt-6 pl-12 flex items-center gap-3">
                    <div className="flex items-center w-3/12 h-full">
                        <Input placeholder="Manzil yoki ZIP code" id="search_house" type="text"
                               className="font-sansNarrow w-full h-full border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"/>
                    </div>
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
                    <div className="flex items-center w-4/12 h-full  py-2">
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
                    <div className="flex items-start w-2/12 h-full flex-col justify-end">
                        <div className="w-full h-full flex justify-end">
                            <Button
                                className="rounded-l-none bg-brand-500 hover:bg-brand-700 h-full w-1/2"><SearchIcon/></Button>
                        </div>
                    </div>
                </div>
                <div className="h-24 mt-2 px-12 flex items-center gap-3">
                    <div className="flex items-center gap-4 w-full h-full">
                        {filterData.map((el) => (
                            <Toggle
                                key={el.id}
                                className="data-[state=on]:bg-brand-500 data-[state=on]:text-white bg-neutral-200/90 hover:bg-brand-300 hover:text-white h-12 p-3"
                                size="lg" aria-label={`Toggle filter ${el.id}`}>
                                <p>{el.id}</p>
                            </Toggle>
                        ))}
                    </div>
                </div>
            </div>

        </main>
    )
}
