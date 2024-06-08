import { AHttpClient } from '@/http/AxiosAbstract';
import { useQuery } from '@tanstack/react-query';

type Props = {};

const MapPage = (props: Props) => {

    const { data } = useQuery({
        queryFn: AHttpClient.getEtapEdukacyjny,
        queryKey: [ 'mapPage' ],
    });

    return (
        <div>
            MapPage

            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
};

export default MapPage;
