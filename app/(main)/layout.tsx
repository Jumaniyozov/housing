import Navbar from "@/app/(main)/components/Navbar";

export const metadata = {
    title: 'Housing',
    description: 'Search for houses',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}
