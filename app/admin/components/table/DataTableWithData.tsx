import {generateFakeColumnData} from "@/lib/generateFakeColumnData";
import {columns, DataType} from "@/app/admin/components/table/columns";
import {DataTable} from "@/app/admin/components/table/data-table";

const data: DataType[] = generateFakeColumnData(1000);

export function DataTableWithData() {
    return (
        <div className="bg-white rounded-md px-4 py-2">
            <DataTable columns={columns} data={data}/>
        </div>
    )

}