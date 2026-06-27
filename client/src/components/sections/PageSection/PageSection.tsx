import {
    forwardRef,
    type ComponentPropsWithoutRef,
} from 'react';

import './PageSection.css';

interface PageSectionProps extends ComponentPropsWithoutRef<'section'> {
    className?: string;
}

export const PageSection = forwardRef<HTMLElement, PageSectionProps>(
    function PageSection(
        {
            children,
            className = '',
            ...sectionProps
        },
        ref,
    ) {
        const sectionClassName = [
            'pageSection',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <section
                ref={ref}
                className={sectionClassName}
                {...sectionProps}
            >
                {children}
            </section>
        );
    },
);