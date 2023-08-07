"use client"

import {Label} from "@/components/ui/label";
// import {CategorySelect} from "@/app/admin/houseads/add/components/CategorySelect";
import React, {ChangeEvent, useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {PriceSelect} from "@/app/admin/houseads/add/components/PriceSelect";
import {Textarea} from "@/components/ui/textarea";
import {Switch} from "@/components/ui/switch";
import {useSession} from "next-auth/react";
// import {CategorySelect} from "@/app/admin/houseads/add/components/CategorySelect";
import {PlanSelect} from "@/app/admin/houseads/add/components/PlanSelect";
import {CategorySelect} from "@/app/admin/houseads/add/components/CategorySelect";
import {MapToAdd} from "@/app/admin/houseads/add/components/MapToAdd";
import FormData from "form-data";
import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/ads/upload`

export const HouseAdd = () => {
    const {data: session, status} = useSession();
    // const images = useRef<HTMLInputElement>(null);

    const [fileList, setFileList] = useState<FileList | null>(null);

    // @ts-ignore
    const files = fileList ? [...fileList] : [];

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFileList(e.target.files);
    };

    const handleUploadClick = () => {


        // 👇 Uploading the files using the fetch API to the server
        // fetch('https://httpbin.org/post', {
        //     method: 'POST',
        //     // @ts-ignore
        //     body: data,
        // })
        //     .then((res) => res.json())
        //     .then((data) => console.log(data))
        //     .catch((err) => console.error(err));
    };

    const [values, setValues] = useState({
        category: "",
        is_rent: false,
        title: "",
        sum: 0,
        currency: "",
        images: [],
        description: "",
        room_quantity: 0,
        total_area: 0,
        living_area: 0,
        floor: 1,
        lat: 0.0,
        long: 0.0,
        phone_number: "",
        telegram_url: "",
        auto_prolong: false,
        user_id: session?.user.id,
        plan_id: "",
    })

    const handleChange = (id: string, val: string | number | boolean) => {
        setValues((prev) => ({
            ...prev,
            [id]: val,
        }))
    }


    const handleSubmit = () => {
        // const formData = new FormData();

        if (!fileList) {
            return;
        }

        // 👇 Create new FormData object and append files
        const formData = new FormData();
        // files.forEach((file, i) => {
        //     formData.append(`files`, file);
        // });

        Array.from(files).forEach(file => {
            if (file.name !== "" && file.name !== undefined && file.name !== null) {
                formData.append('files', file);
            }
        });

        // formData.append(`files`, files);

        // console.log(formData.get("files"));

        formData.append("category", values.category)
        formData.append("title", values.title)
        formData.append("sum", values.sum)
        formData.append("currency", values.currency)
        formData.append("description", values.description)
        formData.append("room_quantity", values.room_quantity)
        formData.append("total_area", values.total_area)
        formData.append("living_area", values.living_area)
        formData.append("floor", values.floor)
        formData.append("lat", values.lat)
        formData.append("long", values.long)
        formData.append("phone_number", values.phone_number)
        formData.append("telegram_url", values.telegram_url)
        formData.append("auto_prolong", values.auto_prolong)
        formData.append("user_id", values.user_id)
        formData.append("plan_id", values.plan_id)

        const config = {
            headers: {'content-type': 'multipart/form-data', "Authorization": `Bearer ${session?.user.access_token}`},
        }

        console.log(values, files);

        axios.post(baseURL, formData, config)
            .then(response => {
                console.log(response);
                setValues({
                    category: "",
                    is_rent: false,
                    title: "",
                    sum: 0,
                    currency: "",
                    images: [],
                    description: "",
                    room_quantity: 0,
                    total_area: 0,
                    living_area: 0,
                    floor: 1,
                    lat: 0.0,
                    long: 0.0,
                    phone_number: "",
                    telegram_url: "",
                    auto_prolong: false,
                    user_id: session?.user.id,
                    plan_id: "",
                })
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <>
            <div className="grid w-full max-w-md items-center gap-1.5">
                {/*<Label htmlFor="price">Turi</Label>*/}
                <div className="flex gap-3">
                    <Label htmlFor="category" className="w-4/12">
                        Kategoriya
                    </Label>
                    <div className="w-8/12">
                        <CategorySelect handleChange={handleChange}/>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Label htmlFor="title" className="w-4/12">
                        Plan
                    </Label>
                    <div className="w-8/12">
                        <PlanSelect handleChange={handleChange}/>
                    </div>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="title" className="w-4/12">
                        Nomi
                    </Label>
                    <Input id="title" className="w-8/12"
                           value={values.title}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                           required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="sum" className="w-4/12">
                        Narxi
                    </Label>
                    <Input id="sum" className="w-8/12" type="number"
                           value={values.sum}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                           required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="currency" className="w-4/12">
                        Valyuta
                    </Label>
                    <div className="w-8/12">
                        <PriceSelect handleChange={handleChange}/>
                    </div>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="description" className="w-4/12">
                        Tasnifi
                    </Label>
                    <Textarea id="description" className="w-8/12 rounded-none" maxLength={1000}
                              value={values.description}
                              onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                              required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="room_quantity" className="w-4/12">
                        Xonalar soni
                    </Label>
                    <Input id="room_quantity" className="w-8/12" type="number"
                           value={values.room_quantity}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                           required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="total_area" className="w-4/12">
                        Umumiy maydoni
                    </Label>
                    <Input id="total_area" className="w-8/12" type="number"
                           value={values.total_area}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                           required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="living_area" className="w-4/12">
                        Yashash maydoni
                    </Label>
                    <Input id="living_area" className="w-8/12" type="number"
                           value={values.living_area}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                           required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="floor" className="w-4/12">
                        Qavat soni
                    </Label>
                    <Input id="floor" className="w-8/12" type="number"
                           value={values.floor}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                           required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="phone_number" className="w-4/12">
                        Telefon raqami
                    </Label>
                    <Input id="phone_number" className="w-8/12" type="number" maxLength={12} minLength={12}
                           value={values.phone_number}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                           required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="telegram_url" className="w-4/12">
                        Telegram manzili
                    </Label>
                    <Input id="telegram_url" className="w-8/12" type="text"
                           value={values.telegram_url}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                           required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="images" className="w-4/12">
                        Rasmlar
                    </Label>
                    <Input onChange={handleFileChange} id="images" className="w-8/12" type="file" multiple/>
                </div>
                <div className="flex gap-3  items-center w-full">
                    <Label htmlFor="auto_prolong" className="w-4/12">
                        E`lonni avtomatik yangilash
                    </Label>
                    <Switch
                        checked={values.auto_prolong}
                        onCheckedChange={(e) => handleChange("auto_prolong", !values.auto_prolong)}/>
                </div>
                <div className=" w-full items-center gap-1.5">
                    <div className="h-64 w-[480px] rounded-md overflow-hidden">
                        <Label>Xaritada joylashuvi</Label>
                        <MapToAdd handleChange={handleChange}/>
                    </div>
                </div>

                <div className="w-full max-w-sm">
                    <Button className="bg-brand-500 hover:bg-brand-600"
                            onClick={handleSubmit} type="button"
                    >
                        Saqlash
                    </Button>
                </div>
            </div>
        </>
    )
}

