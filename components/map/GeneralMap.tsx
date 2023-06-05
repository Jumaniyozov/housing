"use client";


import {YMaps, Map, Placemark, TypeSelector} from "@pbe/react-yandex-maps";
import {IMapState, MapEvent} from "yandex-maps";
import { useEffect, useState } from "react";
import {
    generatePlaceMarks,
    placeMarkData,
} from "@/lib/generatePlacemarks";

const defaultState: IMapState = {
    center: [41.319592, 69.254302],
    zoom: 12,
    type: "yandex#satellite"
};


export const GeneralMap = () => {

    const [placemarks, setPlacemarks] = useState<placeMarkData[]>(() => {
        return generatePlaceMarks(50);
    });

    // const filteredPlacemarks = placemarks.filter((item) =>
    //     // filteredMarks.includes(item.category)
    // );

    const addPlaceMark = (e: MapEvent) => {
        // setObjectEnterOpen(true);
        //
        // setCurrentLocation(e.get("coords"));
    };

    // useEffect(() => {
    //     if (isConfirmed && currentLocation[0] !== "" && currentLocation[1] !== "") {
    //         const categoryIdx = Math.floor(Math.random() * placeMarkCategory.length);
    //
    //         setPlacemarks((prev) => {
    //             const addingOne = {
    //                 id: prev.length,
    //                 data: currentLocation,
    //                 category: placeMarkCategory[categoryIdx],
    //                 iconUrl: placeMarkIcons[categoryIdx],
    //             };
    //             return [...prev, addingOne];
    //         });
    //
    //         setIsConfirmed(false);
    //     }
    // }, [isConfirmed, currentLocation]);

    return (
        <YMaps>
            <Map
                className="h-full w-full"
                defaultState={defaultState}
                modules={["geolocation", "geocode"]}
                onClick={addPlaceMark}
            >
                <TypeSelector options={{ float: "right" }} />
                {/*<Polygon*/}
                {/*  geometry={[*/}
                {/*    [*/}
                {/*      [41.397, 69.2345],*/}
                {/*      [41.3567, 69.1672],*/}
                {/*      [41.3075, 69.1521],*/}
                {/*      [41.3168, 69.1926],*/}
                {/*      [41.3562, 69.2709],*/}
                {/*      [41.397, 69.2345],*/}
                {/*    ],*/}
                {/*  ]}*/}
                {/*  options={{*/}
                {/*    // pane: "IdentificationIcon",*/}
                {/*    fillColor: "#00FF00",*/}
                {/*    strokeColor: "#0000FF",*/}
                {/*    opacity: 0.5,*/}
                {/*    strokeWidth: 5,*/}
                {/*    strokeStyle: "shortdash",*/}
                {/*    hasBalloon: true,*/}
                {/*  }}*/}
                {/*/>*/}
                {placemarks.map((el) => (
                    <Placemark
                        key={el.id}
                        geometry={el.data}
                        modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                        options={{
                            iconLayout: "default#image",
                            iconImageSize: [50, 50],
                            iconImageHref: "/icons/pin.png",
                        }}
                        // properties={{
                        //   balloonContentBody: "body",
                        //   iconCaption: "caption",
                        //   hintContent: "content",
                        // }}
                    />
                ))}
            </Map>
        </YMaps>
    );
};