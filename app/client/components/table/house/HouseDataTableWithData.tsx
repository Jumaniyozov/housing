import {columns} from "@/app/admin/components/table/house/columns";
import {HouseDataTable} from "@/app/admin/components/table/house/data-table";

// const data: HouseDataType[] = generateFakeHouseColumnData(1000);

export function HouseDataTableWithData() {
    return (
        <div className="bg-white rounded-md px-4 py-2">
            <HouseDataTable columns={columns} data={[]}/>
        </div>
    )

}