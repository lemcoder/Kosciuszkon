import { AHttpClient } from '@/http/AxiosAbstract';
import { useQuery } from '@tanstack/react-query';
import Filters from "./components/Filters";
import MapView from './components/MapView';
import styles from './MapPage.module.css';

type Props = {};

const MapPage = (props: Props) => {

    const { data } = useQuery({
        queryFn: AHttpClient.getPlacowki,
        queryKey: [ 'mapPage' ],
    });

    return (
        <div className={styles.wrapper}>
            <Filters />
            <MapView />
        </div>
    );
};

export default MapPage;
