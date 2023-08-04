import {UserDataTableWithData} from "@/app/admin/components/table/users/UserDataTableWithData";

export default function Admin() {
    return (
        <main className="flex h-full flex-col w-full">
            <div className="w-full h-full">
                <UserDataTableWithData/>
            </div>
        </main>
    )
}
