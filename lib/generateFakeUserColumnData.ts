import {faker} from "@faker-js/faker";
import {UserDataType} from "@/app/admin/components/table/users/columns";

export const generateFakeUserColumnData = (quantity: number) => {
    const data: UserDataType[] = [];


    for (let i = 0; i < quantity; i++) {
        const no = i + 1;
        const id = faker.string.uuid();
        const name = faker.person.fullName();
        const balance = faker.number.int({min: 100000, max: 10000000});
        const userType = faker.helpers.arrayElement(["Foydalanuvchi", "Rieltor"]);
        const plan = faker.helpers.arrayElement(["Start", "Optimal", "Gold"]);
        const isActive = faker.helpers.arrayElement([true, false]);


        data.push({
            no,
            id,
            name,
            balance,
            userType,
            plan,
            isActive
        })
    }
    return data;
}