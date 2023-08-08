import {columns} from "@/app/admin/components/table/categories/columns";

import {CategoriesDataTable} from "@/app/admin/components/table/categories/data-table";
import {Category} from "@/types/Categories";

async function fetchCategories(): Promise<Category[]> {
    const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/categories?page=1&per_page=100`

    const res = await fetch(baseURL);
    const data = await res.json();
    const categories = data.result.data;
    if (categories && categories.length > 0) {
        return categories;
    }
    return [];
}

export async function CategoriesDataTableWithData() {
    const categories = await fetchCategories();

    return (
        <div className="bg-white rounded-md px-4 py-2">
            <CategoriesDataTable columns={columns} data={categories}/>
        </div>
    )

}