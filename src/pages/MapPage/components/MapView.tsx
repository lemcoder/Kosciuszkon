import {
    MapContainer,
    TileLayer,
} from 'react-leaflet';
import { TFilters } from '../MapPage';
import PageMarkers from './components/PageMarkers';
import styles from './MapView.module.css';

type Props = {
    filters: TFilters;
};

const MapView = ({ filters }: Props) => {

    // const { data: data1 } = useQuery({
    //     enabled: !!queryState.page,
    //     queryFn: () => AHttpClient.getPlacowki(queryState),
    //     queryKey: [
    //         'placowki',
    //         queryState,
    //     ],
    //     refetchOnWindowFocus: false,
    // });

    const a = [ ...Array(3).keys() ];

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
                        etap={filters.etap}
                        key={number}
                        page={number}
                        powiat={filters.powiat}
                    />
                ))}
            </MapContainer>
        </div>
    );
};

export default MapView;
