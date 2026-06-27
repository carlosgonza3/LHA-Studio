import {
    StrictMode,
} from 'react';

import {
    createRoot,
} from 'react-dom/client';

import {
    HashRouter,
} from 'react-router';

import App from './App';

import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error(
        'Unable to find the root element with the id "root".',
    );
}

createRoot(rootElement).render(
    <StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </StrictMode>,
);