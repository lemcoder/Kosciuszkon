// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import 'leaflet/dist/leaflet.css';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import LandingPage from '@/pages/LandingPage/LandingPage';
import MapPage from '@/pages/MapPage/MapPage';
import styles from './App.module.css';

function App() {
    const queryClient = new QueryClient();

    return (
        <div className={styles.app}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter basename={'/kosciuszkon/'}>
                    <Routes>
                        <Route
                            element={<MapPage />}
                            index
                        />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </div>
    );
}

export default App;
