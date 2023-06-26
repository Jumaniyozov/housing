
import {faker} from "@faker-js/faker";
import {DataType} from "@/app/admin/components/table/columns";

type Status = "pending" | "processing" | "success" | "failed";

export const generateFakeColumnData = (quantity: number) => {
    const data: DataType[] = [];

    // id: string
    // amount: number
    // status:
    // email: string

    // No
    // ID
    // Obyekt nomi
    // Hududi
    // Buyurtmachi
    // Loyihachi
    // Ruxsatnoma
    // ART
    // Kengash xulosasi
    // Ekspertiza
    // GACH Xabarnoma
    // GACH AKT vvod
    for (let i = 0; i < quantity; i++) {
        const no = i + 1;
        const id = faker.string.uuid();
        const obyekt = faker.helpers.arrayElement(["Yangiobod Residence", "Inifinity", "Aviasozlar Plaza", "Kislorod", "Istanbul city", "Mini towers",]);
        const area = faker.helpers.arrayElement(["Olmazor", "Yangiobod", "Sergeli", "Mirzo Ulug`bek", "Uchtepa"]);
        const customer = faker.helpers.arrayElement(["Golden House MCHJ", "Xon Saroy MCHJ", "Internal", "Enterprise LTD"]);
        const designer = faker.helpers.arrayElement(["ARXIPROEKT DESIGN GROUP MCHJ", "Fullhouse Group", "Archium LTD"]);
        const ruxsatnoma = faker.number.int({min: 10, max: 100});
        const art = faker.number.int({min: 10, max: 100});
        const kengash = faker.number.int({min: 10, max: 100});
        const expertiza = faker.number.int({min: 10, max: 100});
        const gach_xabarnoma = faker.number.int({min: 10, max: 100});
        const gach_akt = faker.number.int({min: 10, max: 100});

        data.push({
            no,
            id,
            obyekt,
            area,
            customer,
            designer,
            ruxsatnoma,
            art,
            kengash,
            expertiza,
            gach_xabarnoma,
            gach_akt,
        })
    }
    return data;
}