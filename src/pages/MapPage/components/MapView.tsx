import {
    MapContainer,
    TileLayer,
    useMap,
} from 'react-leaflet';
import React from 'react';

type Props = {};

const MapView = (props: Props) => {
    return (
        <div style={{ height: '500px', width: '500px' }}>
            <MapContainer
                center={[
                    51.505,
                    -0.09,
                ]}
                scrollWheelZoom={false}
                zoom={13}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </MapContainer>
        </div>
    );
};

export default MapView;
