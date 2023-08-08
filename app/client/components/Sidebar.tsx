'use client';

import AdminLogoutButton from "@/app/client/components/AdminLogoutButton";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";

const links = [
    {
        pathname: "/client",
        title: "E`lonlar",
        isActive: true,
    },
    // {
    //     pathname: "/client/balance",
    //     title: "Balans",
    //     isActive: false,
    // }
]


const Sidebar = () => {
    const {data: session, status} = useSession();

    const pathname = usePathname();

    console.log(session?.user);


    return (
        <div className="min-h-screen h-auto bg-brandDark-900 w-2/12 flex">
            <div className="flex flex-col gap-4 h-auto w-full px-3 py-2">
                <div className="w-full flex justify-center mt-3 h-[10%]">
                    <h1 className="text-white text-3xl">Dashbord</h1>
                </div>
                <div className="w-full flex flex-col justify-center mt-3 h-[10%] px-8">
                    <h3 className="text-white text-xl">Foydalanuvchi: {session?.user.name}</h3>
                    <h3 className="text-white text-xl">Balans: {session?.user.balance}</h3>
                </div>
                <ul className="h-[80%] w-full flex flex-col gap-2 px-8">
                    {
                        links.map((el) => (
                            <li key={el.pathname} className="w-full">
                                <Link href={{
                                    pathname: el.pathname,
                                }} className={
                                    cn(
                                        pathname === el.pathname ? "bg-brand-500" : "hover:text-brand-500",
                                        "text-white transition p-3 w-full flex"
                                    )
                                }>{el.title}</Link>
                            </li>
                        ))
                    }
                </ul>
                <AdminLogoutButton/>
            </div>
        </div>
    );
};

export default Sidebar;