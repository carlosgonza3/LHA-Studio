import {
    useEffect,
} from 'react';

import {
    AboutSection,
} from '../../components/sections/AboutSection/AboutSection';

import {
    HeroSection,
} from '../../components/sections/HeroSection/HeroSection';

import {
    NewSection,
} from '../../components/sections/NewSection/NewSection'

import './HomePage.css';

const HOME_SNAP_CLASS = 'homeSnapEnabled';

export function HomePage() {
    useEffect(() => {
        const documentElement = document.documentElement;

        documentElement.classList.add(HOME_SNAP_CLASS);

        return () => {
            documentElement.classList.remove(HOME_SNAP_CLASS);
        };
    }, []);

    return (
        <div className="homePage">
            <HeroSection />
            <AboutSection />
            <NewSection />
        </div>
    );
}