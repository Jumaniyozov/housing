import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'


interface Category {
    name: string,
    id: number,
    is_rent: boolean
}

interface CategoriesState {
    categories: Category[]
    setCategories: (cats: Category[]) => void
}

export const useCategoriesStore = create<CategoriesState>()(
    persist(
        (set) => ({
            categories: [],
            setCategories: (cats) => set((state) => ({...state, categories: cats})),
        }),
        {
            name: 'categories-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
)