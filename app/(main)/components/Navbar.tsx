import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {Login} from "@/components/authorization/Login";
import {Registration} from "@/components/authorization/Registration";

interface NavbarProps {

}

const Navbar = (props: NavbarProps) => {
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
                        <Login/>
                        <Registration/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;