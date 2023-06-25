import Sidebar from "@/app/admin/components/Sidebar";

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
        <>
            <Sidebar/>
            {children}
        </>
    )
}
