"use client";

import {signOut} from "next-auth/react"
import {Button} from "@/components/ui/button";


export const LogoutButton = async () => {


    return (
        <Button className="bg-brand-500 hover:bg-brand-600" size="lg" onClick={() => {
            signOut()
        }}>Chiqish</Button>
    );
};

export default LogoutButton;