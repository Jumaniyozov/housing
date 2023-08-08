"use client";

import {Clusterer, Map, Placemark, TypeSelector, YMaps} from "@pbe/react-yandex-maps";
import {IMapState} from "yandex-maps";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import {Ads} from "@/types/Ads";

const defaultState: IMapState = {
    center: [41.319592, 69.254302],
    zoom: 12,
    type: "yandex#hybrid"
};

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/activeads?page=1&per_page=10000`

export const GeneralMap = () => {
    const session = useSession()

    const router = useRouter();
    const [placemarks, setPlacemarks] = useState<Ads[]>([]);

    useEffect(() => {
        const fetchAds = async () => {
            const res = await fetch(baseURL);
            const jsonRes = await res.json();
            return jsonRes
        };
        fetchAds().then(r => {
            setPlacemarks(r.result.data);
        })
    }, []);

    return (
        <YMaps>
            <Map
                className="h-full w-full"
                defaultState={defaultState}
                modules={["geolocation", "geocode"]}
                // onClick={addPlaceMark}
            >
                <TypeSelector/>
                <Clusterer
                    options={{
                        preset: "islands#invertedLightBlueClusterIcons",
                        groupByCoordinates: false,
                    }}
                >
                    {placemarks.map((el) => (
                        <Placemark
                            key={el.id}
                            geometry={[el.lat, el.long]}
                            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                            options={{
                                iconLayout: "default#image",
                                iconImageSize: [52, 58],
                                iconImageHref: "/icons/pin.png",
                            }}
                            properties={{
                                // hintContent: '<b> Я появляюсь при наведении на метку </b>',
                                balloonContent: `<div id="${el.id}" class="flex flex-col w-40 h-36 p-1 rounded-lg overflow-hidden">
                                   <a href="/house/${el.id}" target="_blank">
                                   
                                      <div class="flex gap-4">
                                        <div class="w-full" class="flex flex-col gap-2">
                                          <p class="text-sm font-bold text-cyan-500">
                                          Narxi: ${el.sum} ${el.currency}
                                          </p>
                                        </div>
                                      </div>
                                      <div class="flex flex-col gap-2 border-t mt-2 py-2">
                                           <p class="text-neutral-600 text-sm font-semibold tracking-tight">                              
                                                Umumiy maydon: ${el.total_area}kv metr
                                          </p>
                                          <p class="text-neutral-600 text-sm font-semibold tracking-tight flex items-center gap-2">                              
                                            Nomer: +${el.phone_number} 
                                            <a class="text-neutral-600 text-sm font-semibold tracking-tight underline flex items-center" href="${el.telegram_url}" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16" width="16" id="telegram"><circle cx="12" cy="12" r="12" fill="#039be5"></circle><path fill="#fff" d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"></path></svg>
                                            </a>
                                          </p>
                                      </div>
                                    </a>
                                </div>
                                </div>`,
                            }}
                            onClick={() => {
                            }}
                        />
                    ))}
                </Clusterer>

            </Map>
        </YMaps>
    );
};