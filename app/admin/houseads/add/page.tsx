import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {PriceSelect} from "@/app/admin/houseads/add/components/PriceSelect";
import {MapToAdd} from "@/app/admin/houseads/add/components/MapToAdd";
import {SaveButton} from "@/app/admin/houseads/add/components/SaveButton";
import {Switch} from "@/components/ui/switch"
import {CategorySelect} from "@/app/admin/houseads/add/components/CategorySelect";

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
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="price">Turi</Label>
                        <div className="flex gap-3">
                            <CategorySelect/>
                        </div>
                    </div>
                    <HouseAdd/>
                </div>
            </div>
        </main>
    )
}


const HouseAdd = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 border-b-2 py-4 border-brand-500">
                <h3>Sotiladigan uy</h3>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="name">E`lon nomi</Label>
                    <Input id="name" type="text"/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="price">Summa</Label>
                    <div className="flex gap-3">
                        <Input id="sum" type="number"/>
                        <PriceSelect/>
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="images">Rasm Yuklash</Label>
                    <Input id="images" accept="image/png, image/jpeg" type="file" multiple/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="description">Tavsif</Label>
                    <Textarea id="description" placeholder="E`lon haqida qo`shimcha ma`lumot" maxLength={1000}/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>Xonalar soni</Label>
                    <Input id="rooms" type="number"/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>Umumiy maydon (metr kvadrat ko`rinishida)</Label>
                    <Input id="area" type="number"/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>Telefon raqami</Label>
                    <Input id="phone" type="text"/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>Telegram manzili</Label>
                    <Input id="telegram" type="text"/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>E`lonni muddati (kun hisobida)</Label>
                    <Input id="activedate" type="number"/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>E`lonni avtomatik aktivlashtirish</Label>
                    <Switch/>
                </div>

                <div className=" w-full items-center gap-1.5">
                    <div className="h-64 w-[480px] rounded-md overflow-hidden">
                        <Label>Xaritada joylashuvi</Label>
                        <MapToAdd/>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-sm">
                <SaveButton/>
            </div>
        </div>
    )
}

const RentAdd = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 border-b-2 py-4 border-brand-500">
                <h3>Arenda kvartira</h3>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="name">E`lon nomi</Label>
                    <Input id="name" type="text"/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="price">Summa</Label>
                    <div className="flex gap-3">
                        <Input id="sum" type="number"/>
                        <PriceSelect/>
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="images">Rasm Yuklash</Label>
                    <Input id="images" accept="image/png, image/jpeg" type="file" multiple/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="description">Tavsif</Label>
                    <Textarea id="description" placeholder="E`lon haqida qo`shimcha ma`lumot" maxLength={1000}/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>Xonalar soni</Label>
                    <Input id="rooms" type="number"/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>Umumiy maydon (metr kvadrat ko`rinishida)</Label>
                    <Input id="area" type="number"/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>Yashash maydon (metr kvadrat ko`rinishida)</Label>
                    <Input id="arealive" type="number"/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>Ko’p qavatli xonadon qavati</Label>
                    <Input id="arealive" type="number"/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>Telefon raqami</Label>
                    <Input id="phone" type="text"/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>Telegram manzili</Label>
                    <Input id="telegram" type="text"/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>E`lonni muddati (kun hisobida)</Label>
                    <Input id="activedate" type="number"/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>E`lonni avtomatik aktivlashtirish</Label>
                    <Switch/>
                </div>
                <div className=" w-full items-center gap-1.5">
                    <div className="h-64 w-[480px] rounded-md overflow-hidden">
                        <Label>Xaritada joylashuvi</Label>
                        <MapToAdd/>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-sm">
                <SaveButton/>
            </div>
        </div>
    )
}