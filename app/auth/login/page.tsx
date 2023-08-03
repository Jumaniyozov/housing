"use client"

import React, {useRef} from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";


function Login() {
    const userName = useRef("");
    const password = useRef("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            login: userName.current,
            password: password.current,
            redirect: true,
            callbackUrl: "/"
        });
    };

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="sm:max-w-[425px] rounded-none border-2 border-brand-500 p-4">
                <div className="rounded-none">
                    <h2 className="text-brand-500">Akkauntga kirish</h2>
                    {/*<DialogDescription>*/}
                    {/*    Make changes to your profile here. Click save when you`re done.*/}
                    {/*</DialogDescription>*/}
                </div>
                <form className="grid gap-4 py-4" onSubmit={handleLogin}>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="login" className="text-right">
                            Login
                        </Label>
                        <Input id="login" className="col-span-3" onChange={(e) => (userName.current = e.target.value)}
                               required/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right">
                            Parol
                        </Label>
                        <Input id="password" type="password" className="col-span-3"
                               onChange={(e) => (password.current = e.target.value)} required/>
                    </div>
                    <div>
                        <Button className="bg-brand-500 hover:bg-brand-600" type="submit">Kirish</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;