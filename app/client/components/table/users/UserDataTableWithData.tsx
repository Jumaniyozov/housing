import {columns, UserDataType} from "@/app/admin/components/table/users/columns";
import {UserDataTable} from "@/app/admin/components/table/users/data-table";

// const data: UserDataType[] = generateFakeUserColumnData(1000);

export function UserDataTableWithData() {

    return (
        <div className="bg-white rounded-md px-4 py-2">
            <UserDataTable columns={columns} data={[]}/>
        </div>
    )

}