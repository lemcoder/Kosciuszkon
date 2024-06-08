// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
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
import styles from './App.module.css';

function App() {
    const queryClient = new QueryClient();

    return (
        <div className={styles.app}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter basename={'/kosciuszkon/'}>
                    <Routes>
                        <Route
                            element={<LandingPage />}
                            index
                        />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </div>
    );
}

export default App;