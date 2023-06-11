"use client";

import {Clusterer, Map, Placemark, TypeSelector, YMaps} from "@pbe/react-yandex-maps";
import {IMapState, IOptionManager, MapEvent} from "yandex-maps";
import {useState} from "react";
import {generatePlaceMarks, placeMarkData,} from "@/lib/generatePlacemarks";

const defaultState: IMapState = {
    center: [41.319592, 69.254302],
    zoom: 12,
    type: "yandex#hybrid"
};

export const GeneralMap = () => {

    const [placemarks, setPlacemarks] = useState<placeMarkData[]>(() => {
        return generatePlaceMarks(50);
    });

    const addPlaceMark = (e: MapEvent) => {

    };

    return (
        <YMaps>
            <Map
                className="h-full w-full"
                defaultState={defaultState}
                modules={["geolocation", "geocode"]}
                onClick={addPlaceMark}
            >
                <TypeSelector />
                <Clusterer
                    options={{
                        preset: "islands#invertedLightBlueClusterIcons",
                        groupByCoordinates: false,
                    }}
                >
                    {placemarks.map((el) => (
                        <Placemark
                            key={el.id}
                            geometry={el.data}
                            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                            options={{
                                iconLayout: "default#image",
                                iconImageSize: [52, 58],
                                iconImageHref: "/icons/pin.png",
                            }}
                            properties={{
                                // hintContent: '<b> Я появляюсь при наведении на метку </b>',
                                balloonContent: `<div id="${el.id}" class="flex flex-col w-64 h-48 p-4 rounded-lg overflow-hidden">
                                  <div class="flex gap-4">
                                    <div class="w-24 h-24">
                                        <img class="w-24 h-24 aspect-square" src="/img/house.jpg" alt="house image">
                                    </div>
                                    <div class="w-1/2" class="flex flex-col gap-2">
                                      <h3 class="uppercase text-base font-bold tracking-tight">Apartment near the beach</h3>
                                      <p class="text-sm font-bold text-cyan-500">60 000 000 so'm</p>
                                    </div>
                                  </div>
                                  <div class="border-t mt-4">
                                  <p class="text-neutral-600 text-sm font-semibold tracking-tight">                              
                                   Tashkent, Shayxontoxur tumani, Tinchlik 1-1
                                   </p>
                                  </div>
                                </div>`,
                            }}
                            onClick={() => {}}
                        />
                    ))}
                </Clusterer>

            </Map>
        </YMaps>
    );
};