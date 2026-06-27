import {
    type CSSProperties,
    useEffect,
} from 'react';

import {
    useSectionMotion,
} from '../../../hooks/useSectionMotion';

import {
    PageSection,
} from '../PageSection/PageSection';

import './AboutSection.css';

const skills = [
    'Branding',
    'Logo Design',
    'Digital Illustration',
    'Typography',
    'Layout Composition',
];

const DARK_HEADER_CLASS = 'headerOnDarkSection';

type SkillStyle = CSSProperties & {
    '--skill-index': number;
};

export function AboutSection() {
    const {
        sectionRef,
        motionClassName,
        motionState,
    } = useSectionMotion<HTMLElement>({
        threshold: 0.25,
        rootMargin: '-10% 0px -10% 0px',
    });

    useEffect(() => {
        const documentElement = document.documentElement;
        const isAboutActive = motionState === 'active';

        documentElement.classList.toggle(
            DARK_HEADER_CLASS,
            isAboutActive,
        );

        return () => {
            documentElement.classList.remove(DARK_HEADER_CLASS);
        };
    }, [motionState]);

    return (
        <PageSection
            ref={sectionRef}
            className={`aboutSection ${motionClassName}`}
            id="about"
        >
            <div className="aboutInner">
                <div className="aboutContent">
                    <div className="aboutIntroduction">
                        <p className="aboutStatement">
                            With a background in visual arts, I create visual
                            identities and digital experiences that blend
                            artistic expression with strategic design.
                            Inspired by contemporary culture and visual
                            storytelling, I strive to create work that feels
                            both
                            <br />
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
                                        } as SkillStyle
                                    }
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </PageSection>
    );
}