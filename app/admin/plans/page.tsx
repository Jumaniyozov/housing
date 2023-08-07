import {PlansDataTableWithData} from "@/app/admin/components/table/plans/PlansDataTableWithData";

export default function Admin() {
    return (
        <main className="flex h-full flex-col w-full">
            <div className="w-full h-full">
                <PlansDataTableWithData/>
            </div>
        </main>
    )
}
