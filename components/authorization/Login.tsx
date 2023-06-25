"use client"

import {Button} from "@/components/ui/button"
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useRouter} from "next/navigation";
import {FormEvent} from "react";

export function Login() {
    const router = useRouter()

    const handleLogin = (evt: FormEvent) => {
        evt.preventDefault()
        router.push("/admin")
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-brand-500 hover:bg-brand-600" size="lg">Login</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-none">
                <DialogHeader className="rounded-none">
                    <DialogTitle className="text-brand-500">Akkauntga kirish</DialogTitle>
                    {/*<DialogDescription>*/}
                    {/*    Make changes to your profile here. Click save when you`re done.*/}
                    {/*</DialogDescription>*/}
                </DialogHeader>
                <form className="grid gap-4 py-4" onSubmit={handleLogin}>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="login" className="text-right">
                            Login
                        </Label>
                        <Input id="login" className="col-span-3" required/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right">
                            Parol
                        </Label>
                        <Input id="password" type="password" className="col-span-3" required/>
                    </div>
                    <DialogFooter>
                        <Button className="bg-brand-500 hover:bg-brand-600" type="submit">Kirish</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}