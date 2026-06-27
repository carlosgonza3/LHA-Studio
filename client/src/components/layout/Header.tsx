import {
    useEffect,
    useState,
} from 'react';

import {
    Link,
    NavLink,
    useLocation,
    useNavigate,
} from 'react-router';

type NavigationClassArguments = {
    isActive: boolean;
};

type HomeLocationState = {
    scrollToSection?: string;
};

function getNavigationClass({
                                isActive,
                            }: NavigationClassArguments) {
    return isActive
        ? 'navigationLink navigationLinkActive'
        : 'navigationLink';
}

export function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const [isAboutActive, setIsAboutActive] = useState(false);

    useEffect(() => {
        const locationState =
            location.state as HomeLocationState | null;

        if (
            location.pathname !== '/'
            || locationState?.scrollToSection !== 'about'
        ) {
            return;
        }

        const animationFrameId = window.requestAnimationFrame(() => {
            const aboutSection = document.getElementById('about');

            aboutSection?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            navigate(
                '/',
                {
                    replace: true,
                    state: null,
                },
            );
        });

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [
        location.pathname,
        location.state,
        navigate,
    ]);

    useEffect(() => {
        if (location.pathname !== '/') {
            setIsAboutActive(false);

            return;
        }

        const aboutSection = document.getElementById('about');

        if (!aboutSection) {
            setIsAboutActive(false);

            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsAboutActive(entry.isIntersecting);
            },
            {
                threshold: 0.5,
            },
        );

        observer.observe(aboutSection);

        return () => {
            observer.disconnect();
        };
    }, [location.pathname]);

    function handleAboutClick() {
        if (location.pathname !== '/') {
            return;
        }

        const aboutSection = document.getElementById('about');

        aboutSection?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    return (
        <header className="siteHeader">
            <nav
                className="siteNavigation"
                aria-label="Main navigation"
            >
                <NavLink
                    className={getNavigationClass}
                    to="/contact"
                >
                    CONTACT
                </NavLink>

                <Link
                    className={
                        isAboutActive
                            ? 'navigationLink navigationLinkActive'
                            : 'navigationLink'
                    }
                    to="/"
                    state={{
                        scrollToSection: 'about',
                    }}
                    onClick={handleAboutClick}
                >
                    ABOUT
                </Link>

                <NavLink
                    className={getNavigationClass}
                    to="/work"
                >
                    SELECTED WORKS
                </NavLink>
            </nav>
        </header>
    );
}