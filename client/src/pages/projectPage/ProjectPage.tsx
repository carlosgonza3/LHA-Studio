import { Link, useParams } from 'react-router';

export function ProjectPage() {
    const { projectSlug } = useParams();

    const formattedTitle = projectSlug
        ?.split('-')
        .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');

    return (
        <article className="page">
            <p>Project case study</p>

            <h1>{formattedTitle ?? 'Project'}</h1>

            <h1>
                Project details, imagery, concept, process and final results
                will be displayed here.
            </h1>

            <Link to="/work">← All projects</Link>
        </article>
    );
}