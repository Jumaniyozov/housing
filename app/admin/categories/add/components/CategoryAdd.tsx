"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Switch} from "@/components/ui/switch";
import {Button} from "@/components/ui/button";
import {useSession} from "next-auth/react";
import {useState} from "react";
import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/categories`

export const CategoryAdd = () => {
    const {data: session, status} = useSession();
    const [values, setValues] = useState({
        name: "",
        is_rent: false
    });

    const handleChange = (id: string, val: string | boolean) => {
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
                is_rent: false
            })
        }
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 border-b-2 py-4 border-brand-500">
                <h3>Sotiladigan uy</h3>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="name">Nomi</Label>
                    <Input value={values.name} id="name" type="text" onChange={(e) => handleChange("name", e.currentTarget.value)}/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="is_rent">Ijarami</Label>
                    <div className="flex gap-3">
                        <Switch
                            checked={values.is_rent}
                            onCheckedChange={(e) => handleChange("is_rent", !values.is_rent)}/>
                    </div>
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
