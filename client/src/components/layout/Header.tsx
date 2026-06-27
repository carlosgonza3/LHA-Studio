import { NavLink } from 'react-router';

function getNavigationClass({
                                isActive,
                            }: {
    isActive: boolean;
}) {
    return isActive
        ? 'navigationLink navigationLinkActive'
        : 'navigationLink';
}

export function Header() {
    return (
        <header className="siteHeader">
            <nav className="siteNavigation" aria-label="Main navigation">
                <NavLink className={getNavigationClass} to="/work">
                    CONTACT
                </NavLink>

                <NavLink className={getNavigationClass} to="/about">
                    ABOUT
                </NavLink>

                <NavLink className={getNavigationClass} to="/contact">
                    SELECTED WORKS
                </NavLink>
            </nav>
        </header>
    );
}