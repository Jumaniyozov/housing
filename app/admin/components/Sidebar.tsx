'use client';

import AdminLogoutButton from "@/app/admin/components/AdminLogoutButton";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const links = [
    {
        pathname: "/admin/statistics",
        title: "Statistika",
        isActive: false,
    },
    {
        pathname: "/admin",
        title: "Foydalanuvchilar ro`yxati",
        isActive: true,
    },
    {
        pathname: "/admin/houseads",
        title: "E`lonlar",
        isActive: false,
    },
    // {
    //     pathname: "/admin/issues",
    //     title: "Shikoyatlar",
    //     isActive: false,
    // },
    {
        pathname: "/admin/categories",
        title: "Kategoriyalar",
        isActive: false,
    },
    {
        pathname: "/admin/plans",
        title: "Planlar",
        isActive: false,
    },

    // {
    //     pathname: "/admin/services",
    //     title: "Xizmatlar",
    //     isActive: false,
    // },
]


const Sidebar = () => {
    const pathname = usePathname();
    // const [currentActive, setCurrentActive] = useState<string>("/admin");


    return (
        <div className="min-h-screen h-auto bg-brandDark-900 w-2/12 flex">
            <div className="flex flex-col gap-4 h-auto w-full px-3 py-2">
                <div className="w-full flex justify-center mt-3 h-[10%]">
                    <h1 className="text-white text-3xl">Admin panel</h1>
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