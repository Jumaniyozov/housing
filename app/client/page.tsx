import {HouseDataTableWithData} from "@/app/client/components/table/house/HouseDataTableWithData";

export default function Admin() {
    return (
        <main className="flex h-full flex-col w-full">
            <div className="w-full h-full">
                <HouseDataTableWithData/>
            </div>
        </main>
    )
}
