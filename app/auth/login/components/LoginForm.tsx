"use client"

import React, {useState} from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";


const LoginForm = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        await signIn("credentials", {
            login: login,
            password: password,
            redirect: true,
            callbackUrl: "/"
        });
    };


    return (
        <form className="grid gap-4 py-4" onSubmit={handleLogin}>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="login" className="text-right">
                    Login
                </Label>
                <Input id="login" className="col-span-3"
                       onChange={(e) => (setLogin(e.currentTarget.value))}
                       required/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                    Parol
                </Label>
                <Input id="password" type="password" className="col-span-3"
                       onChange={(e) => (setPassword(e.currentTarget.value))} required/>
            </div>
            <div className="flex justify-between">
                <Link href={"/auth/register"}>
                    <Button className="bg-brand-500 hover:bg-brand-600" type="button">Ro`yxatdan
                        o`tish</Button>
                </Link>
                <Button className="bg-brand-500 hover:bg-brand-600" type="submit">Kirish</Button>
            </div>
        </form>
    );
};

export default LoginForm;