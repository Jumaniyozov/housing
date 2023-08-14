import {PieChartSell} from "@/app/admin/statistics/components/PieChartSell";
import {LineChartSell} from "@/app/admin/statistics/components/LineChartSell";
import {LineChartRent} from "@/app/admin/statistics/components/LineChartRent";
import {PieChartRent} from "@/app/admin/statistics/components/PieChartRent";
import {fetchCategories} from "@/app/admin/houseads/add/utils/fetcher";
import StatisticsFiltersSell from "@/app/admin/statistics/components/StatisticsFilterSell";
import StatisticsFiltersRent from "@/app/admin/statistics/components/StatisticsFilterRent";

export default async function Admin() {
    const categories = await fetchCategories();

    return (
        <main className="flex h-full flex-col w-full">
            <div className="w-full h-full min-h-screen flex">


                <div className="w-1/2 h-screen border-r-2 border-black p-4 flex flex-col gap-4">
                    <StatisticsFiltersSell categories={categories}/>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-3/4">
                            <PieChartSell/>
                        </div>
                        <div className="w-3/4">
                            <LineChartSell/>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 h-screen border-r-2 p-4 flex flex-col gap-4">
                    <StatisticsFiltersRent categories={categories}/>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-3/4">
                            <PieChartRent/>
                        </div>
                        <div className="w-3/4">
                            <LineChartRent/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
