"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useSession} from "next-auth/react";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/plans`

export const PlanAdd = () => {
    const {data: session, status} = useSession();
    const [values, setValues] = useState({
        name: "",
        price: 0,
        duration: 0
    });

    const handleChange = (id: string, val: string | number) => {
        setValues((prev) => (
            {
                ...prev,
                [id]: val
            }
        ))
    }

    const handleSubmit = async () => {
        const res = await axios({
            method: 'post',
            url: baseURL,
            data: values,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session?.user.access_token}`
            }
        });

        if (res.status === 200 || res.status === 201) {
            setValues({
                name: "",
                price: 0,
                duration: 0
            })
        }
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 border-b-2 py-4 border-brand-500">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="name">Nomi</Label>
                    <Input id="name" type="text"
                           value={values.name}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="price">Summa</Label>
                    <div className="flex gap-3">
                        <Input id="price" type="number"
                               value={values.price}
                               onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}/>
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="duration">Muddat (kun xisobida)</Label>
                    <Input id="duration" type="number"
                           value={values.duration}
                           onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}/>
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
    )
}
