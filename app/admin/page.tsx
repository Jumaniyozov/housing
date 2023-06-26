import {DataTableWithData} from "@/app/admin/components/table/DataTableWithData";

export default function Admin() {
    return (
        <main className="flex h-full flex-col">
            <div className="w-full h-full">
                <DataTableWithData/>
            </div>
        </main>
    )
}
