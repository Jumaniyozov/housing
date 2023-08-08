"use client"

import {Label} from "@/components/ui/label";
import React, {ChangeEvent, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {PriceSelect} from "@/app/client/add/components/PriceSelect";
import {Textarea} from "@/components/ui/textarea";
import {Switch} from "@/components/ui/switch";
import {useSession} from "next-auth/react";
import {PlanSelect} from "@/app/client/add/components/PlanSelect";
import {CategorySelect} from "@/app/client/add/components/CategorySelect";
import {MapToAdd} from "@/app/client/add/components/MapToAdd";
import FormData from "form-data";
import axios from "axios";
import {Plan} from "@/types/Plans";
import {Category} from "@/types/Categories";
import {useQuery} from "@tanstack/react-query";
import {fetchCategories, fetchPlans} from "@/app/client/add/utils/fetcher";
import {CitySelect} from "@/app/client/add/components/CitySelect";
import {DistrictSelect} from "@/app/client/add/components/DistrictSelect";
import {useToast} from "@/components/ui/use-toast";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/ads/upload`

export const HouseAdd = ({
                             plans, categories
                         }: {
    plans: Plan[], categories: Category[]
}) => {
    const {toast} = useToast()

    const {data: plansData} = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPlans,
        initialData: plans,
    })

    const {data: categoriesData} = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
        initialData: categories,
    })

    const {data: session, status} = useSession();
    const [fileList, setFileList] = useState<FileList | null>(null);
    const files = fileList ? [...fileList] : [];
    const formRef = useRef<HTMLFormElement>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFileList(e.target.files);
    };

    const [values, setValues] = useState({
        category: undefined,
        is_rent: false,
        title: undefined,
        city: undefined,
        district: undefined,
        sum: undefined,
        currency: undefined,
        images: [],
        description: undefined,
        room_quantity: undefined,
        total_area: undefined,
        living_area: undefined,
        floor: undefined,
        lat: undefined,
        long: undefined,
        phone_number: undefined,
        telegram_url: undefined,
        auto_prolong: false,
        user_id: session?.user.id,
        plan_id: undefined,
    })

    const handleChange = (id: string, val: string | number | boolean) => {
        setValues((prev) => ({
            ...prev,
            [id]: val,
        }))
    }


    const handleSubmit = () => {
        if (!fileList) {
            return;
        }

        const formData = new FormData();

        Array.from(files).forEach(file => {
            if (file.name !== "" && file.name !== undefined && file.name !== null) {
                formData.append('files', file);
            }
        });

        formData.append("category", values.category)
        formData.append("title", values.title)
        formData.append("city", values.city)
        formData.append("district", values.district)
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

        axios.post(baseURL, formData, config)
            .then(response => {
                formRef.current?.reset();
                toast({
                    title: "E`lon",
                    description: "E`lon muvaffaqiyatli yaratildi",
                })
                setValues({
                    category: undefined,
                    is_rent: false,
                    title: undefined,
                    city: undefined,
                    district: undefined,
                    sum: undefined,
                    currency: undefined,
                    images: [],
                    description: undefined,
                    room_quantity: undefined,
                    total_area: undefined,
                    living_area: undefined,
                    floor: undefined,
                    lat: undefined,
                    long: undefined,
                    phone_number: undefined,
                    telegram_url: undefined,
                    auto_prolong: false,
                    user_id: session?.user.id,
                    plan_id: undefined,
                })
            })
            .catch(error => {
                toast({
                    title: "E`lon",
                    description: "E`lon yaratishda xato yuz berdi",
                    variant: "destructive"
                })
            });
    }

    return (
        <>
            <form ref={formRef} className="grid w-full max-w-md items-center gap-1.5">
                {/*<Label htmlFor="price">Turi</Label>*/}
                <div className="flex gap-3">
                    <Label htmlFor="category" className="w-4/12">
                        Kategoriya
                    </Label>
                    <div className="w-8/12">
                        <CategorySelect data={categoriesData} handleChange={handleChange}/>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Label htmlFor="title" className="w-4/12">
                        Plan
                    </Label>
                    <div className="w-8/12">
                        <PlanSelect data={plansData} handleChange={handleChange}/>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Label htmlFor="title" className="w-4/12">
                        Plan
                    </Label>
                    <div className="w-8/12">
                        <CitySelect handleChange={handleChange}/>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Label htmlFor="title" className="w-4/12">
                        Plan
                    </Label>
                    <div className="w-8/12">
                        <DistrictSelect city={values.city} handleChange={handleChange}/>
                    </div>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="title" className="w-4/12">
                        Nomi
                    </Label>
                    <Input id="title" className="w-8/12"
                        // value={values.title}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                           required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="sum" className="w-4/12">
                        Narxi
                    </Label>
                    <Input id="sum" className="w-8/12" type="number"
                        // value={values.sum}
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
                        // value={values.description}
                              onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                              required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="room_quantity" className="w-4/12">
                        Xonalar soni
                    </Label>
                    <Input id="room_quantity" className="w-8/12" type="number"
                        // value={values.room_quantity}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                           required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="total_area" className="w-4/12">
                        Umumiy maydoni
                    </Label>
                    <Input id="total_area" className="w-8/12" type="number"
                        // value={values.total_area}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                           required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="living_area" className="w-4/12">
                        Yashash maydoni
                    </Label>
                    <Input id="living_area" className="w-8/12" type="number"
                        // value={values.living_area}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                           required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="floor" className="w-4/12">
                        Qavat soni
                    </Label>
                    <Input id="floor" className="w-8/12" type="number"
                        // value={values.floor}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                           required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="phone_number" className="w-4/12">
                        Telefon raqami
                    </Label>
                    <Input id="phone_number" className="w-8/12" type="number" maxLength={12} minLength={12}
                        // value={values.phone_number}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                           required/>
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
                    <Label htmlFor="telegram_url" className="w-4/12">
                        Telegram manzili
                    </Label>
                    <Input id="telegram_url" className="w-8/12" type="text"
                        // value={values.telegram_url}
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
            </form>
        </>
    )
}

