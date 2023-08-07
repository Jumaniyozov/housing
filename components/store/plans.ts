import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'


interface Plan {
    name: string;
    id: number;
    price: number;
    duration: number;
}

interface PlansState {
    plans: Plan[]
    setPlans: (plns: Plan[]) => void
}

export const usePlansStore = create<PlansState>()(
    persist(
        (set) => ({
            plans: [],
            setPlans: (plns) => set((state) => ({...state, plans: plns})),
        }),
        {
            name: 'plans-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
)