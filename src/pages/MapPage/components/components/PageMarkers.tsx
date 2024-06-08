import { AHttpClient } from '@/http/AxiosAbstract';
import {
    Circle,
    Marker,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import { useQuery } from '@tanstack/react-query';
import school from '/school.svg';

type Props = {
    page: number;
    powiat: string | null;
    etap: string | null;
};

const PageMarkers = ({
    etap,
    page,
    powiat,
}: Props) => {

    const { data } = useQuery({
        enabled: !!page && !!powiat,
        queryFn: () => AHttpClient.getPlacowki({
            ...(!!etap && { etap_edukacji_id: etap }),
            page,
            ...(!!powiat && { powiat_kod_teryt: powiat }),
        }),
        queryKey: [
            'placowki',
            page,
            powiat,
            etap,
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
                fillOpacity={.05}
                radius={1000}
                weight={1}
            />
        </>
    ));
};

export default PageMarkers;
