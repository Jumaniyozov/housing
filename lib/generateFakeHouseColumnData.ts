import {faker} from "@faker-js/faker";
import {HouseDataType} from "@/app/admin/components/table/house/columns";


export const generateFakeHouseColumnData = (quantity: number) => {
    const data: HouseDataType[] = [];

    for (let i = 0; i < quantity; i++) {
        const no = i + 1;
        const id = faker.string.uuid();
        const adress = faker.location.streetAddress({useFullAddress: true});
        const area = faker.helpers.arrayElement(["Olmazor", "Yangiobod", "Sergeli", "Mirzo Ulug`bek", "Uchtepa"]);
        const areaSquare = faker.helpers.rangeToNumber({min: 40, max: 200});

        data.push({
            no,
            id,
            adress,
            area,
            areaSquare
        })
    }
    return data;
}