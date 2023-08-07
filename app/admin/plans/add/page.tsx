import {PlanAdd} from "@/app/admin/plans/add/components/PlanAdd";

export default function AddPlan() {
    return (
        <main className="flex h-full flex-col w-full">
            <div className="w-full h-full">
                <div className="bg-white rounded-md px-4 py-4 flex flex-col gap-4">
                    <div>
                        <h1>
                            Plan qo`shish
                        </h1>
                    </div>
                    <PlanAdd/>
                </div>
            </div>
        </main>
    )
}
