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

type HomeSectionId =
    | 'about'
    | 'grid-section';

type HomeLocationState = {
    scrollToSection?: HomeSectionId;
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

    const [activeSection, setActiveSection] =
        useState<HomeSectionId | null>(null);

    useEffect(() => {
        const locationState =
            location.state as HomeLocationState | null;

        const sectionId = locationState?.scrollToSection;

        if (
            location.pathname !== '/'
            || !sectionId
        ) {
            return;
        }

        const animationFrameId = window.requestAnimationFrame(() => {
            const section = document.getElementById(sectionId);

            section?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            navigate('/', {
                replace: true,
                state: null,
            });
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
            setActiveSection(null);

            return;
        }

        const sectionIds: HomeSectionId[] = [
            'about',
            'grid-section',
        ];

        const sections = sectionIds
            .map((sectionId) =>
                document.getElementById(sectionId),
            )
            .filter(
                (
                    section,
                ): section is HTMLElement => section !== null,
            );

        if (sections.length === 0) {
            setActiveSection(null);

            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (firstEntry, secondEntry) =>
                            secondEntry.intersectionRatio
                            - firstEntry.intersectionRatio,
                    )[0];

                if (!visibleSection) {
                    return;
                }

                setActiveSection(
                    visibleSection.target.id as HomeSectionId,
                );
            },
            {
                threshold: [
                    0.2,
                    0.4,
                    0.6,
                ],
            },
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, [location.pathname]);

    function handleSectionClick(
        sectionId: HomeSectionId,
    ) {
        if (location.pathname !== '/') {
            return;
        }

        const section = document.getElementById(sectionId);

        section?.scrollIntoView({
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
                        activeSection === 'about'
                            ? 'navigationLink navigationLinkActive'
                            : 'navigationLink'
                    }
                    to="/"
                    state={{
                        scrollToSection: 'about',
                    }}
                    onClick={() => {
                        handleSectionClick('about');
                    }}
                >
                    ABOUT
                </Link>

                <Link
                    className={
                        activeSection === 'grid-section'
                            ? 'navigationLink navigationLinkActive'
                            : 'navigationLink'
                    }
                    to="/"
                    state={{
                        scrollToSection: 'grid-section',
                    }}
                    onClick={() => {
                        handleSectionClick('grid-section');
                    }}
                >
                    SELECTED WORK
                </Link>
            </nav>
        </header>
    );
}