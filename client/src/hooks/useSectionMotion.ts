import {
    useEffect,
    useRef,
    useState,
} from 'react';

export type SectionMotionState =
    | 'idle'
    | 'active'
    | 'exited';

export type SectionMotionDirection =
    | 'up'
    | 'down';

interface UseSectionMotionOptions {
    threshold?: number | number[];
    rootMargin?: string;
}

export function useSectionMotion<T extends HTMLElement>({
                                                            threshold = 0.22,
                                                            rootMargin = '-8% 0px -8% 0px',
                                                        }: UseSectionMotionOptions = {}) {
    const sectionRef = useRef<T | null>(null);
    const hasEnteredRef = useRef(false);

    const [motionState, setMotionState] =
        useState<SectionMotionState>('idle');

    const [motionDirection, setMotionDirection] =
        useState<SectionMotionDirection>('up');

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                /*
                 * When the section's top is below the viewport origin,
                 * it is entering from below and should move upward.
                 *
                 * When its top is above the viewport origin,
                 * it is entering from above and should move downward.
                 */
                const direction: SectionMotionDirection =
                    entry.boundingClientRect.top >= 0
                        ? 'up'
                        : 'down';

                setMotionDirection(direction);

                if (entry.isIntersecting) {
                    hasEnteredRef.current = true;
                    setMotionState('active');

                    return;
                }

                if (hasEnteredRef.current) {
                    setMotionState('exited');
                }
            },
            {
                threshold,
                rootMargin,
            },
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, [
        rootMargin,
        threshold,
    ]);

    const motionClassName = [
        `sectionMotion${motionState
            .charAt(0)
            .toUpperCase()}${motionState.slice(1)}`,
        `sectionMotion${motionDirection
            .charAt(0)
            .toUpperCase()}${motionDirection.slice(1)}`,
    ].join(' ');

    return {
        sectionRef,
        motionState,
        motionDirection,
        motionClassName,
    };
}