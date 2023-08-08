import {columns} from "@/app/admin/components/table/plans/columns";

import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";
import {PlansDataTable} from "@/app/admin/components/table/plans/data-table";
import {Plan} from "@/types/Plans";

async function fetchPlans(): Promise<Plan[]> {
    const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/plans?page=1&per_page=100`
    const session = await getServerSession(options);


    const res = await fetch(baseURL, {
        headers: {
            "Authorization": `Bearer ${session?.user.access_token}`
        }
    });
    const data = await res.json();
    const plans = data.result.data;
    return plans;
}

export async function PlansDataTableWithData() {
    const plans = await fetchPlans();

    return (
        <div className="bg-white rounded-md px-4 py-2">
            <PlansDataTable columns={columns} data={plans}/>
        </div>
    )

}