import React from "react";
import Plans from "@/app/client/advertise/components/Plans";
import Services from "@/app/client/advertise/components/Services";
import ConfirmAdvertise from "@/app/client/advertise/components/ConfirmAdvertise";

export default function Advertise() {
    return (
        <main className="flex h-full min-h-screen flex-col w-full">
            <div className="w-full h-full flex flex-col">
                <Plans/>
                <Services/>
                <ConfirmAdvertise/>
            </div>
        </main>
    )
}
