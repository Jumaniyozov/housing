import {generateFakeHouseColumnData} from "@/lib/generateFakeHouseColumnData";
import {columns, HouseDataType} from "@/app/admin/components/table/house/columns";
import {HouseDataTable} from "@/app/admin/components/table/house/data-table";
import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";

// const data: HouseDataType[] = generateFakeHouseColumnData(1000);

async function fetchAds() {
    const baseURL = `http://${process.env.NEXT_PUBLIC_API_URL}/api/ads?page=1&per_page=1000`
    const session = await getServerSession(options);

    const res = await fetch(baseURL, {
        headers: {
            "Authorization": `Bearer ${session?.user.access_token}`
        }
    });
    const data = await res.json();
    const ads = data.result.data;
    return ads;
}

export async function HouseDataTableWithData() {
    const data = await fetchAds();

    console.log(data);

    return (
        <div className="bg-white rounded-md px-4 py-2">
            <HouseDataTable columns={columns} data={data}/>
        </div>
    )

}