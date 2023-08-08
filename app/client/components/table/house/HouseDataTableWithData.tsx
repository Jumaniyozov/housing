import {columns} from "@/app/client/components/table/house/columns";
import {HouseDataTable} from "@/app/client/components/table/house/data-table";
import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";
import {Ads} from "@/types/Ads";

async function fetchAds(id: string | undefined): Promise<Ads[]> {
    const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/ads/byuser?page=1&per_page=1000`
    const session = await getServerSession(options);

    if (id) {
        const res = await fetch(baseURL, {
            method: "POST",
            body: JSON.stringify({
                id: id
            }),
            headers: {
                "Authorization": `Bearer ${session?.user.access_token}`,
                "Content-Type": "application/json"
            },
            cache: "no-cache"
        });
        const data = await res.json();
        if (data.result) {
            const ads = data.result.data;
            return ads;
        }
    }

    return [];
}

export async function HouseDataTableWithData() {
    const session = await getServerSession(options);

    const data = await fetchAds(session?.user.id);
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