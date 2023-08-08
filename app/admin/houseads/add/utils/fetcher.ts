import {Category} from "@/types/Categories";
import {Plan} from "@/types/Plans";

export async function fetchCategories(): Promise<Category[]> {
    const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/categories?page=1&per_page=1000`
    const res = await fetch(baseURL);
    const data = await res.json();
    const categories = data.result.data;
    if (categories && categories.length > 0) {
        return categories;
    }
    return [];
}

export async function fetchPlans(): Promise<Plan[]> {
    const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/plans?page=1&per_page=1000`
    const res = await fetch(baseURL);
    const data = await res.json();
    const plans = data.result.data;
    if (plans && plans.length > 0) {
        return plans;
    }
    return [];
}