import { Outlet } from 'react-router';

import { Footer } from './Footer';
import { Header } from './Header';

import './RootLayout.css';

export function RootLayout() {
    return (
        <div className="siteLayout">
            <Header />

            <main className="siteMain">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}