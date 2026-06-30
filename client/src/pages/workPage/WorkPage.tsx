import {
    Link,
} from 'react-router';

import {
    projects,
} from '../../data/projects';

import './WorkPage.css';

export function WorkPage() {
    return (
        <section className="workPage">
            <header className="workHeader">
                <p>Selected work</p>
                <p>{String(projects.length).padStart(2, '0')}</p>
            </header>

            <div className="workList">
                {projects.map((project, index) => (
                    <article
                        className="workItem"
                        key={project.slug}
                    >
                        <Link to={`/work/${project.slug}`}>
                            <span className="workIndex">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            <h1>{project.title}</h1>

                            <span className="workCategory">
                                {project.category}
                            </span>

                            <span className="workYear">
                                {project.year}
                            </span>

                            <span
                                className="workArrow"
                                aria-hidden="true"
                            >
                                ↗
                            </span>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}