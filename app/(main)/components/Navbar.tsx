import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";
import LogoutButton from "@/app/(main)/components/LogoutButton";
import {Button} from "@/components/ui/button";

interface NavbarProps {

}

const Navbar = async (props: NavbarProps) => {
    const session = await getServerSession(options);

    const {} = props;

    return (
        <div className="h-32 w-full px-12 border-b flex shadow-sm">
            <div className="flex gap-4 items-center w-full">
                <div className="w-1/2 flex justify-start px-24">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width="80" height="80"/>
                    </Link>
                </div>
                <div className="w-1/2 flex items-center">
                    <div className="flex justify-start w-1/2">
                    </div>
                    <div className="flex justify-end w-1/2 gap-4">
                        {session ? (
                                <>
                                    <Link href={"/admin"} className="bg-brand-500 hover:bg-brand-600">
                                        <Button className="bg-brand-500 hover:bg-brand-600" size="lg">Admin Panel</Button>
                                    </Link>
                                    <LogoutButton/>
                                </>
                            )
                            : (
                                <>
                                    <Link href={"/auth/login"} className="bg-brand-500 hover:bg-brand-600">
                                        <Button className="bg-brand-500 hover:bg-brand-600" size="lg">Login</Button>
                                    </Link>
                                    <Link href={"/auth/register"}>
                                        <Button className="bg-brand-500 hover:bg-brand-600" size="lg">Ro`yxatdan
                                            o`tish</Button>
                                    </Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;