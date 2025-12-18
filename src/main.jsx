import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';
import { myStore } from './redux/myStore.js';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const myClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            staleTime: 5 * 60 * 1000,
            refetchOnWindowFocus: false
        }
    }
});

createRoot(document.getElementById('root')).render(
    <Provider store={myStore}>
        <QueryClientProvider client={myClient}>
            <App />
            <ToastContainer />
            <ReactQueryDevtools/>
        </QueryClientProvider>
    </Provider>
)
