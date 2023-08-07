import {CategoriesDataTableWithData} from "@/app/admin/components/table/categories/CategoriesDataTableWithData";

export default function Admin() {
    return (
        <main className="flex h-full flex-col w-full">
            <div className="w-full h-full">
                <CategoriesDataTableWithData/>
            </div>
        </main>
    )
}
