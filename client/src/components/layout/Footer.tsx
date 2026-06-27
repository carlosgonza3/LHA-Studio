import { Link } from 'react-router';

export function Footer() {
    return (
        <footer className="siteFooter">
            <p className="footerLabel">Have a project in mind?</p>

            <Link className="footerTitle" to="/contact">
                Let&apos;s talk.
            </Link>

            <div className="footerBottom">
                <p>© 2026 Your Name</p>

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