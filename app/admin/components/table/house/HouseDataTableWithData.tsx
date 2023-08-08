import {columns} from "@/app/admin/components/table/house/columns";
import {HouseDataTable} from "@/app/admin/components/table/house/data-table";
import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";
import {Ads} from "@/types/Ads";

// const data: HouseDataType[] = generateFakeHouseColumnData(1000);

async function fetchAds(): Promise<Ads[]> {
    const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/ads?page=1&per_page=1000`
    const session = await getServerSession(options);

    const res = await fetch(baseURL, {
        headers: {
            "Authorization": `Bearer ${session?.user.access_token}`
        }
    });
    const data = await res.json();
    if (data.result) {
        const ads = data.result.data;
        return ads;
    }
    return []
}

export async function HouseDataTableWithData() {
    const session = await getServerSession(options);
    const data = await fetchAds();

    const dataWithToken = data.map((el) => ({
        ...el,
        token: session?.user.access_token
    }))

    dataWithToken.sort((a, b) => {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }

        return 0;
    })

    return (
        <div className="bg-white rounded-md px-4 py-2">
            {/*@ts-ignore*/}
            <HouseDataTable columns={columns} data={dataWithToken}/>
        </div>
    )

}