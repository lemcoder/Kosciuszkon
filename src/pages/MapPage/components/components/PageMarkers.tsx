import { AHttpClient } from '@/http/AxiosAbstract';
import {
    Circle,
    Marker,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import school from '/school.svg';

type Props = {
    page: number;
};

const PageMarkers = ({ page }: Props) => {

    const { data } = useQuery({
        enabled: !!page,
        queryFn: () => AHttpClient.getPlacowki({
            page,
        }),
        queryKey: [
            'placowki',
            page,
        ],
        refetchOnWindowFocus: false,
    });

    return (data?.['hydra:member'] || []).map((location, index) => (
        <>
            <Marker
                icon={new Icon({ iconAnchor: [
                    32,
                    32,
                ], iconUrl: school })}
                key={index}
                position={[
                    location.geolokalizacja.latitude,
                    location.geolokalizacja.longitude,
                ]}
            >
            </Marker>

            <Circle
                center={{ lat: location.geolokalizacja.latitude, lng: location.geolokalizacja.longitude }}
                fillColor="blue"
                fillRule="inherit"
                radius={1000}
                weight={1}
            />
        </>
    ));
};

export default PageMarkers;
