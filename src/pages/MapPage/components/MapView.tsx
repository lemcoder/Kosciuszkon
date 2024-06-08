import {
    MapContainer,
    TileLayer,
} from 'react-leaflet';
import { useState } from 'react';
import PageMarkers from './components/PageMarkers';
import styles from './MapView.module.css';

type Props = {};

const MapView = (props: Props) => {

    const [ queryState, setQueryState ] = useState({
        page: 1,
    });

    // const { data: data1 } = useQuery({
    //     enabled: !!queryState.page,
    //     queryFn: () => AHttpClient.getPlacowki(queryState),
    //     queryKey: [
    //         'placowki',
    //         queryState,
    //     ],
    //     refetchOnWindowFocus: false,
    // });

    const a = [ ...Array(2).keys() ];

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

                {/* {data1 && (data1["hydra:member"]?.map((location, index) => (
                    <Marker
                        key={index}
                        position={[
                            location.geolokalizacja.latitude,
                            location.geolokalizacja.longitude,
                        ]}
                    >
                    </Marker>
                )))} */}
                {a.map(number => (
                    <PageMarkers
                        key={number}
                        page={number}
                    />
                ))}
            </MapContainer>
        </div>
    );
};

export default MapView;
