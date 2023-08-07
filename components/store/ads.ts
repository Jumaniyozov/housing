import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'


export interface Ads {
    id: number,
    category: number,
    title: string,
    sum: number,
    currency: string,
    images: string[],
    description: string,
    room_quantity: number,
    total_area: number,
    living_area: number,
    floor: number,
    lat: number,
    long: number,
    phone_number: string,
    telegram_url: string,
    auto_prolong: boolean,
    is_active: boolean,
    created_at: string,
    updated_at: string,
    user_id: number,
    plan_id: number
}

 interface AdsState {
    ads: Ads[]
    setAds: (ad: Ads[]) => void
}

export const useAdsStore = create<AdsState>()(
    persist(
        (set) => ({
            ads: [],
            setAds: (ad) => set((state) => ({...state, ads: ad})),
        }),
        {
            name: 'ads-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
)