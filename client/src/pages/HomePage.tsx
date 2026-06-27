import {
    type CSSProperties,
    useEffect,
    useRef,
    useState,
} from 'react';

import './HomePage.css';

const skills = [
    'Branding',
    'Logo Design',
    'Digital Illustration',
    'Typography',
    'Layout Composition',
];

export function HomePage() {
    const heroSectionRef = useRef<HTMLElement | null>(null);
    const aboutSectionRef = useRef<HTMLElement | null>(null);

    const [isHeroVisible, setIsHeroVisible] = useState(false);
    const [isAboutVisible, setIsAboutVisible] = useState(false);

    useEffect(() => {
        const heroSection = heroSectionRef.current;
        const aboutSection = aboutSectionRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    if (entry.target === heroSection) {
                        setIsHeroVisible(true);
                    }

                    if (entry.target === aboutSection) {
                        setIsAboutVisible(true);
                    }

                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.18,
                rootMargin: '0px 0px -8% 0px',
            },
        );

        if (heroSection) {
            observer.observe(heroSection);
        }

        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <section
                ref={heroSectionRef}
                className={`page homePage ${
                    isHeroVisible ? 'homePageVisible' : ''
                }`}
            >
                <div className="homeIntro">
                    <div className="homeTitle">
                        <h1>LHA</h1>
                        <h1>Studio</h1>
                    </div>

                    <div className="homeDescriptionRow">
                        <p className="homeDescription">
                            Visual Designer focused on branding, identity
                            systems and creative storytelling.
                            <br />
                            Based in Montreal.
                        </p>
                    </div>
                </div>
            </section>

            <section
                ref={aboutSectionRef}
                className={`aboutSection ${
                    isAboutVisible ? 'aboutSectionVisible' : ''
                }`}
                id="about"
            >
                <div className="aboutInner">

                    <div className="aboutContent">
                        <div className="aboutIntroduction">
                            <p className="aboutStatement">
                                With a background in visual arts, I create
                                visual identities and digital experiences that
                                blend artistic expression with strategic
                                design. Inspired by contemporary culture and
                                visual storytelling, I strive to create work that feels both

                                <br/>

                                timeless and relevant.
                            </p>
                        </div>

                        <div
                            className="aboutDivider"
                            aria-hidden="true"
                        />

                        <div className="aboutSkills">
                            <ul
                                className="aboutSkillsList"
                                aria-label="Design skills"
                            >
                                {skills.map((skill, index) => (
                                    <li
                                        key={skill}
                                        style={
                                            {
                                                '--skill-index': index,
                                            } as CSSProperties
                                        }
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}