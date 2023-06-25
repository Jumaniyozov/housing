"use client"

import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

export function Registration() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-brand-500 hover:bg-brand-600" size="lg">Ro`yxatdan o`tish</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-none">
                <DialogHeader className="rounded-none">
                    <DialogTitle className="text-brand-500">Ro`yxatdan o`tish</DialogTitle>
                    <DialogDescription>
                        Ro`yxatdan o`tish uchun o`z ma`lumotlaringizni kiriting
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="login" className="text-right">
                            Login
                        </Label>
                        <Input id="login" className="col-span-3"/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right">
                            Telefon raqami
                        </Label>
                        <Input id="phone" className="col-span-3"/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right">
                            Parol
                        </Label>
                        <Input id="password" type="password" className="col-span-3"/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="confirm_password" className="text-right">
                            Parolni tasdiqlash
                        </Label>
                        <Input id="confirm_password" type="password" className="col-span-3"/>
                    </div>
                </div>
                <DialogFooter>
                    <Button className="bg-brand-500 hover:bg-brand-600" type="submit">Yuborish</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}