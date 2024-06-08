import { useState } from 'react';
import Filters from './components/Filters';
import MapView from './components/MapView';
import styles from './MapPage.module.css';

type Props = {};

export type TFilters = {
    powiat: string | null;
    etap: string | null;
};

const MapPage = (props: Props) => {
    const [ mapFilters, setMapFilters ] = useState<TFilters>({});

    return (
        <div className={styles.wrapper}>
            <Filters setFilters={setMapFilters} />
            <MapView filters={mapFilters} />
        </div>
    );
};

export default MapPage;
