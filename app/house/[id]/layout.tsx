import Navbar from "@/app/(main)/components/Navbar";
import Footer from "@/app/(main)/components/Footer";
import React from "react";

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
            <div className="bg-brandDark-900 w-full h-96 mt-12">
                <div className="w-8/12 mx-auto h-full">
                    <Footer/>
                </div>
            </div>
        </>
    )
}
