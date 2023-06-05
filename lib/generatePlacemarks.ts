type Lattitude = string;
type Longitude = string;

export const placeMarkCategory = [
    "fuel",
    "organization",
    "staff",
    "hydrant",
    "waterpool",
];

export type placeMarkData = {
    id: string | number;
    data: [Lattitude, Longitude];
    iconUrl: string;
};

export const generatePlaceMarks = (quantity: number): placeMarkData[] => {
    // const epicenter = [41.311, 69.251];
    return new Array(quantity).fill(0).map((el, index) => {
        const categoryIdx = Math.floor(Math.random() * placeMarkCategory.length);

        const lattitude = ((Math.random() * 100) / 30).toFixed(2).replace(".", "");
        const longitude = ((Math.random() * 100) / 30).toFixed(2).replace(".", "");
        return {
            id: index,
            data: [`41.${lattitude}`, `69.${longitude}`],
            iconUrl: "/icons/ping.png",
        };
    });
};