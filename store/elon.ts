import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Elon {
    id: string;
    coordinates: {
        lat: number;
        lng: number;
    }
}

interface ElonState {
    elons: {}[]

    // increase: (by: number) => void
}

const useBearStore = create<ElonState>()(
    devtools(
        persist(
            (set) => ({
                elons: [],
                // increase: (by) => set((state) => ({ bears: state.bears + by })),
            }),
            {
                name: 'bear-storage',
            }
        )
    )
)