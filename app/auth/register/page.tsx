"use client"

import React, {useState} from 'react';
import { useRouter } from 'next/navigation'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {GenderSelector} from "@/app/auth/register/components/GenderSelector";
import {UserTypeSelector} from "@/app/auth/register/components/UserTypeSelector";
import {CompanyTypeSelector} from "@/app/auth/register/components/CompanyTypeSelector";

//     login varchar(255) unique,
//     password varchar(255),
//     name varchar(255),
//     phone_number varchar(20),
//     email varchar(255) unique,
//     sex varchar(5),
//     entity varchar(5),
//     company_name varchar(255) null,
//     company_type varchar(10) null,
//     company_address varchar(255) null,
//     company_contact varchar(20) null,


function Register() {
    const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/users/register`;
    const loginURL = `${process.env.NEXT_PUBLIC_SELF_URL}/auth/login`;
    const router = useRouter();

    const [errMsg, setErrMsg] = useState("");
    // const [successMsg, setSuccessMSg] = useState("");

    const [userData, setUserData] = useState({
        login: "",
        password: "",
        confirmpassword: "",
        name: "",
        phone_number: "",
        email: "",
        sex: "",
        entity: "",
        company_name: "",
        company_type: "",
        company_address: "",
        company_contact: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (userData.password !== userData.confirmpassword) {
            setErrMsg("Iltimos parollarni bir xil to'ldiring")
        } else {
            const res = await fetch(baseURL, {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (res.ok) {
                router.push(loginURL);
            }
        }
    };


    const handleChange = (id: string, val: string) => {
        setUserData((prev) => ({
            ...prev,
            [id]: val,
        }))
    }

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="sm:max-w-[425px] rounded-none border-2 border-brand-500 p-4">
                <div className="rounded-none">
                    <h2 className="text-brand-500">Akkauntga kirish</h2>
                </div>
                {errMsg !== "" && (
                    <>
                        <div className="flex justify-center gap-4">
                            <p className="text-red-500">
                                {errMsg}
                            </p>
                        </div>
                    </>
                )}
                <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                            Foydalanuvchi turini tanlang
                        </Label>

                        <UserTypeSelector handleChange={handleChange}/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="login" className="text-right">
                            Login
                        </Label>
                        <Input id="login" className="col-span-3"
                               onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                               required/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right">
                            Parol
                        </Label>
                        <Input id="password" type="password" className="col-span-3"
                               onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                               required/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="confirmpassword" className="text-right">
                            Parolni tasdiqlang
                        </Label>
                        <Input id="confirmpassword" type="password" className="col-span-3"
                               onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                               required/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Ism Sharif
                        </Label>
                        <Input id="name" type="text" className="col-span-3"
                               onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                               required/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone_number" className="text-right">
                            Telefon raqam
                        </Label>
                        <Input inputMode="numeric"
                               pattern="[0-9\s]{12,12}"
                               maxLength={12}
                               minLength={12}
                               id="phone_number" type="text" className="col-span-3"
                               onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                               required/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input id="email" type="email" className="col-span-3"
                               onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                               required/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                            Jinsi
                        </Label>
                        <GenderSelector handleChange={handleChange}/>
                    </div>

                    {userData.entity === "Y" && (
                        <>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="company_name" className="text-right">
                                    Korxona nomi
                                </Label>
                                <Input id="company_name" className="col-span-3" type="text"
                                       onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                                       required/>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="company_type" className="text-right">
                                    Korxona turi
                                </Label>
                                <CompanyTypeSelector handleChange={handleChange}/>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="company_address" className="text-right">
                                    Korxona Manzili
                                </Label>
                                <Input id="company_address" type="text" className="col-span-3"
                                       onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                                       required/>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="company_contact" className="text-right">
                                    Korxona raqami
                                </Label>
                                <Input inputMode="numeric"
                                       pattern="[0-9\s]{12,12}"
                                       maxLength={12}
                                       minLength={12}
                                       id="company_contact" type="text" className="col-span-3"
                                       onChange={(e) => handleChange(e.currentTarget.id, e.currentTarget.value)}
                                       required/>
                            </div>
                        </>
                    )}

                    <div className="flex justify-between">
                        <Link href={"/auth/login"}>
                            <Button className="bg-brand-500 hover:bg-brand-600" type="button">Login</Button>
                        </Link>
                        <Button className="bg-brand-500 hover:bg-brand-600" type="submit">Tasdiqlash</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;