import {
    Link,
} from 'react-router';

import {
    projects,
} from '../../../data/projects';

import './ProjectGridSection.css';

export function ProjectsGridSection() {
    return (
        <section
            className="projectsGridSection"
            id="selected-works"
        >

            <div className="projectsGrid" id="grid-section">
                {projects.map((project) => (
                    <article
                        className="projectGridItem"
                        key={project.slug}
                    >
                        <Link
                            className="projectGridLink"
                            to={`/work/${project.slug}`}
                            aria-label={`View ${project.title}`}
                        >
                            <img
                                className="projectGridImage"
                                src={project.cover}
                                alt={project.coverAlt}
                            />

                            <div className="projectGridOverlay">
                                <h2 className="projectGridTitle">
                                    {project.title}
                                </h2>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}