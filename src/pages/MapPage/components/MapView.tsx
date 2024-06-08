import { AHttpClient } from '@/http/AxiosAbstract';
import {
    MapContainer,
    Marker,
    TileLayer,
} from 'react-leaflet';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import styles from './MapView.module.css';

type Props = {};

const MapView = (props: Props) => {
    const { data } = useQuery({
        queryFn: AHttpClient.getPlacowki,
        queryKey: [ 'placowki' ],
    });

    return (
        <div className={styles.mapContainer}>
            <MapContainer
                center={[
                    50.0647443,
                    19.9381152,
                ]}
                scrollWheelZoom={false}
                zoom={13}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {data && (data["hydra:member"]?.map((location, index) => (
                    <Marker
                        key={index}
                        position={[
                            location.geolokalizacja.latitude,
                            location.geolokalizacja.longitude,
                        ]}
                    >
                    </Marker>
                )))}
            </MapContainer>
        </div>
    );
};

export default MapView;
