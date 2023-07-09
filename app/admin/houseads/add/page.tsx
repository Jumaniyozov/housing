import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {PriceSelect} from "@/app/admin/houseads/add/components/PriceSelect";
import {RieltorSelect} from "@/app/admin/houseads/add/components/RieltorSelect";
import {FurnitureSelect} from "@/app/admin/houseads/add/components/FurnitureSelect";
import {HouseTypeSelect} from "@/app/admin/houseads/add/components/HouseTypeSelect";
import {ElectricitySelect} from "@/app/admin/houseads/add/components/ElectricitySelect";
import {HouseConditionSelect} from "@/app/admin/houseads/add/components/HouseConditionSelect";
import {CategorySelect} from "@/app/admin/houseads/add/components/CategorySelect";
import {WaterSelect} from "@/app/admin/houseads/add/components/WaterSelect";
import {WarmingSelect} from "@/app/admin/houseads/add/components/WarmingSelect";
import {GasSelect} from "@/app/admin/houseads/add/components/GasSelect";
import {SanuzelSelect} from "@/app/admin/houseads/add/components/SanuzelSelect";
import {YearSelect} from "@/app/admin/houseads/add/components/YearSelect";
import {MapToAdd} from "@/app/admin/houseads/add/components/MapToAdd";
import {SaveButton} from "@/app/admin/houseads/add/components/SaveButton";

export default function AddHouseAd() {
    return (
        <main className="flex h-full flex-col w-full">
            <div className="w-full h-full">
                <div className="bg-white rounded-md px-4 py-4 flex flex-col gap-4">
                    <div>
                        <h1>
                            E`lon qo`shish
                        </h1>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3 border-b-2 py-4 border-brand-500">
                            <h3>Asosiy ma`lumotlar</h3>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="name">Nomi</Label>
                                <Input id="name" type="text"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label>Kategoriya</Label>
                                <CategorySelect/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Rasm Yuklash</Label>
                                <Input id="images" accept="image/png, image/jpeg" type="file"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="description">Ma`lumot</Label>
                                <Textarea id="description" placeholder="E`lon haqida qo`shimcha ma`lumot"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="price">Narxi</Label>
                                <div className="flex gap-3">
                                    <Input id="price" type="number"/>
                                    <PriceSelect/>
                                </div>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label>Rieltor yoki Shaxsiy</Label>
                                <RieltorSelect/>
                            </div>

                            <div className=" w-full items-center gap-1.5">
                                <div className="h-64 w-[480px] rounded-md overflow-hidden">
                                    <Label>Xaritada joylashuvi</Label>
                                    <MapToAdd/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 border-b-2 py-4 border-brand-500">
                            <h3>Uy ma`lumotlari</h3>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Xonalar soni</Label>
                                <Input id="images" type="text"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Umumiy maydoni</Label>
                                <Input id="images" type="number" placeholder="㎡"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Yashash maydoni</Label>
                                <Input id="images" type="number" placeholder="㎡"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Uy qavati</Label>
                                <Input id="images" type="number"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Qavat balandligi</Label>
                                <Input id="images" type="number" placeholder="m"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Uy xolati</Label>
                                <HouseConditionSelect/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Mebellanganmi?</Label>
                                <FurnitureSelect/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Mebellanganmi?</Label>
                                <FurnitureSelect/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Uy turi</Label>
                                <HouseTypeSelect/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Elektr ta`minot</Label>
                                <ElectricitySelect/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Suv ta`minot</Label>
                                <WaterSelect/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Isitish tizimi</Label>
                                <WarmingSelect/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Gaz ta`minoti</Label>
                                <GasSelect/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Sanuzel</Label>
                                <SanuzelSelect/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="images">Qurilish yili</Label>
                                <YearSelect/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 border-b-2 py-4 border-brand-500">
                            <h3>Kontakt ma`lumotlari</h3>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="username">Murojat uchun shaxs</Label>
                                <Input id="username" type="text" placeholder="F.I.SH"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="mail">Email</Label>
                                <Input id="mail" type="email" placeholder="test@mail.com"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="phone">Telefon raqami</Label>
                                <Input id="phone" type="text" placeholder="+998901234567"/>
                            </div>
                        </div>
                        <div className="w-full max-w-sm">
                            <SaveButton/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
