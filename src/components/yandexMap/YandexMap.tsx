import React from 'react';
import s from "./yandexMap.module.scss";
import {Map, Placemark, RouteButton, YMaps} from "react-yandex-maps";

export const YandexMap = () => {
    return (
        <div className={s.container}>
            <YMaps>
                <Map defaultState={{
                    center: [55.794973, 37.737471],
                    zoom: 13,
                    controls: ['zoomControl', 'fullscreenControl']
                }}
                     modules={['control.ZoomControl', 'control.FullscreenControl']}
                     className={s.map}
                >
                    <RouteButton options={{
                        float: 'right'
                    }}/>
                    <Placemark defaultGeometry={[55.794973, 37.737471]} properties={{
                        balloonContentBody: 'Большая Черкизовская улица, 24Ас1, Москва, 107553'
                    }}
                               modules={['geoObject.addon.balloon']}/>
                </Map>
            </YMaps>
        </div>
    );
};
