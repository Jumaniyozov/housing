
import {columns, UserDataType} from "@/app/admin/components/table/users/columns";
import {UserDataTable} from "@/app/admin/components/table/users/data-table";

import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";

async function fetchPlans() {
    const baseURL = `http://${process.env.NEXT_PUBLIC_API_URL}/api/plans?page=1&per_page=100`
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
            <UserDataTable columns={columns} data={plans}/>
        </div>
    )

}