"use client"

import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function AdminLogoutButton() {
    const router = useRouter();

    const handleLogout = () => {
        router.push("/")
    }

    return <div className="flex h-[10%] justify-center w-full">
        <Button onClick={handleLogout} className="bg-brand-500 hover:bg-brand-600">Chiqish</Button>
    </div>;
}