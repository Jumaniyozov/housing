import {columns} from "@/app/admin/components/table/users/columns";
import {UserDataTable} from "@/app/admin/components/table/users/data-table";

import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";

async function fetchUsers() {
    const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/users?page=1&per_page=1000`
    const session = await getServerSession(options);


    const res = await fetch(baseURL, {
        headers: {
            "Authorization": `Bearer ${session?.user.access_token}`
        },
        cache: "no-cache"
    });
    const data = await res.json();
    const users = data.result.data;
    return users;
}

export async function UserDataTableWithData() {
    const users = await fetchUsers();

    return (
        <div className="bg-white rounded-md px-4 py-2">
            <UserDataTable columns={columns} data={users}/>
        </div>
    )

}