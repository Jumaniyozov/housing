import {CategoryAdd} from "@/app/admin/categories/add/components/CategoryAdd";

export default function AddCategory() {
    return (
        <main className="flex h-full flex-col w-full">
            <div className="w-full h-full">
                <div className="bg-white rounded-md px-4 py-4 flex flex-col gap-4">
                    <div>
                        <h1>
                            Kategoriya qo`shish
                        </h1>
                    </div>
                    <CategoryAdd/>
                </div>
            </div>
        </main>
    )
}


