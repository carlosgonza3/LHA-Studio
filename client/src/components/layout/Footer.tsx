import { Link } from 'react-router';

export function Footer() {
    return (
        <footer className="siteFooter">

            <div className="footerBottom">
                <p>© 2026 LHA Studio</p>

                <div className="footerSocials">
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Instagram
                    </a>

                    <a
                        href="https://www.behance.net/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Behance
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>

                <Link to="/">Back home ↑</Link>
            </div>
        </footer>
    );
}