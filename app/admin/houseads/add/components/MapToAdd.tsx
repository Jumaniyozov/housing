"use client";

import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {MapEvent} from "yandex-maps";
import {useState} from "react";


export const MapToAdd = () => {
    const defaultState = {
        center: [41.319592, 69.254302],
        zoom: 12,
    };

    const [placemark, setPlacemark] = useState<[string, string]>(["", ""]);


    const addPlaceMark = (e: MapEvent) => {
        // setObjectEnterOpen(true);
        setPlacemark(e.get("coords"));
    };

    return (
        <YMaps>
            <Map
                className="h-full w-full"
                defaultState={defaultState}
                modules={["geolocation", "geocode"]}
                onClick={addPlaceMark}
            >
                <Placemark
                    modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                    geometry={placemark}
                    options={{
                        iconLayout: "default#image",
                        iconImageSize: [42, 48],
                        iconImageHref: "/icons/pin.png",
                    }}
                />
            </Map>
        </YMaps>
    );
};