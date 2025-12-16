import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';
import { myStore } from './redux/myStore.js';

createRoot(document.getElementById('root')).render(
    <Provider store={myStore}>
        <App />
        <ToastContainer />
    </Provider>
)
