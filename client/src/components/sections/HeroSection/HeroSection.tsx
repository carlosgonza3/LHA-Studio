import {
    useSectionMotion,
} from '../../../hooks/useSectionMotion';

import {
    PageSection,
} from '../../sections/PageSection/PageSection';

import './HeroSection.css';

export function HeroSection() {
    const {
        sectionRef,
        motionClassName,
    } = useSectionMotion<HTMLElement>({
        threshold: 0.25,
        rootMargin: '-6% 0px -12% 0px',
    });

    return (
        <PageSection
            ref={sectionRef}
            className={`heroSection ${motionClassName}`}
            id="hero"
        >
            <div className="homeIntro">

                <div className="homeTitle">
                    <h1>LHA</h1>
                    <h1>Studio</h1>
                </div>

                <div className="homeDescriptionRow">
                    <p className="homeDescription">
                        Visual Designer focused on branding, identity systems
                        and creative storytelling.
                    </p>
                    <p className="homeDescription">
                        Based in Montreal.
                    </p>
                </div>
            </div>
        </PageSection>
    );
}