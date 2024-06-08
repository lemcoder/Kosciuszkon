import { AHttpClient } from '@/http/AxiosAbstract';
import { Marker } from 'react-leaflet/Marker';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

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
        <Marker
            key={index}
            position={[
                location.geolokalizacja.latitude,
                location.geolokalizacja.longitude,
            ]}
        >
        </Marker>
    ));
};

export default PageMarkers;
