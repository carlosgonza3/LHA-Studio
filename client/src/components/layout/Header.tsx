import {
    useEffect,
    useRef,
    useState,
} from 'react';

import {
    Link,
    NavLink,
    useLocation,
    useNavigate,
} from 'react-router';

import {
    projects,
} from '../../data/projects';

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

    const selectedWorksRef = useRef<HTMLDivElement | null>(null);

    const [isAboutActive, setIsAboutActive] = useState(false);
    const [isSelectedWorksOpen, setIsSelectedWorksOpen] =
        useState(false);

    const isSelectedWorksActive =
        location.pathname.startsWith('/work/');

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

    useEffect(() => {
        function handlePointerDown(event: PointerEvent) {
            const target = event.target;

            if (!(target instanceof Node)) {
                return;
            }

            if (selectedWorksRef.current?.contains(target)) {
                return;
            }

            setIsSelectedWorksOpen(false);
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setIsSelectedWorksOpen(false);
            }
        }

        document.addEventListener(
            'pointerdown',
            handlePointerDown,
        );

        document.addEventListener(
            'keydown',
            handleKeyDown,
        );

        return () => {
            document.removeEventListener(
                'pointerdown',
                handlePointerDown,
            );

            document.removeEventListener(
                'keydown',
                handleKeyDown,
            );
        };
    }, []);

    useEffect(() => {
        setIsSelectedWorksOpen(false);
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

                <div
                    ref={selectedWorksRef}
                    className={
                        isSelectedWorksOpen
                            ? 'selectedWorksMenu selectedWorksMenuOpen'
                            : 'selectedWorksMenu'
                    }
                >
                    <button
                        className={
                            isSelectedWorksActive
                                ? 'navigationLink navigationLinkActive selectedWorksTrigger'
                                : 'navigationLink selectedWorksTrigger'
                        }
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={isSelectedWorksOpen}
                        onClick={() => {
                            setIsSelectedWorksOpen(
                                (currentValue) => !currentValue,
                            );
                        }}
                    >
                        SELECTED WORKS
                    </button>

                    <div
                        className="selectedWorksDropdown"
                        role="menu"
                        aria-label="Selected works"
                    >
                        {projects.map((project) => (
                            <Link
                                key={project.slug}
                                className="selectedWorksLink"
                                to={`/work/${project.slug}`}
                                role="menuitem"
                                tabIndex={
                                    isSelectedWorksOpen
                                        ? 0
                                        : -1
                                }
                                onClick={() => {
                                    setIsSelectedWorksOpen(false);
                                }}
                            >
                                {project.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}