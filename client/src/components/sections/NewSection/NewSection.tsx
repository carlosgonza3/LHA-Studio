import {
    useSectionMotion,
} from '../../../hooks/useSectionMotion';

import {
    PageSection,
} from '../PageSection/PageSection';

import './NewSection.css';

export function NewSection() {
    const {
        sectionRef,
        motionClassName,
    } = useSectionMotion<HTMLElement>({
        threshold: 0.25,
        rootMargin: '-10% 0px -10% 0px',
    });

    return (
        <PageSection
            ref={sectionRef}
            className={`emptySection ${motionClassName}`}
            id="empty"
            aria-label="Empty portfolio section"
        />
    );
}