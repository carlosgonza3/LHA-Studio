import { Link } from 'react-router';

export function NotFoundPage() {
    return (
        <section className="page">
            <p>404</p>

            <h1>Page not found.</h1>

            <p>
                The page you are looking for does not exist or has been moved.
            </p>

            <Link to="/">Return home →</Link>
        </section>
    );
}