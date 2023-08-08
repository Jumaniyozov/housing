import {HouseAdd} from "@/app/admin/houseads/add/components/HouseAdd";
import {fetchCategories, fetchPlans} from "@/app/admin/houseads/add/utils/fetcher";





export default async function AddHouseAd() {
    const categories = await fetchCategories();
    const plans = await fetchPlans()
    
    return (
        <main className="flex h-full flex-col w-full">
            <div className="w-full h-full">
                <div className="bg-white rounded-md px-4 py-4 flex flex-col gap-4">
                    <div>
                        <h1>
                            E`lon qo`shish
                        </h1>
                    </div>
                    <HouseAdd
                        categories={categories}
                        plans={plans}
                    />
                </div>
            </div>
        </main>
    )
}
