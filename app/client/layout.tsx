import Sidebar from "@/app/client/components/Sidebar";

export const metadata = {
    title: 'Admin sahifasi',
    description: 'Admin page',
}

export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return (
        <div className="flex w-full">
            <Sidebar/>
            {children}
        </div>
    )
}
