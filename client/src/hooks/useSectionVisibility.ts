/*
This hook replaces the growing collection of refs, state variables,
 target comparisons, and observer registration inside HomePage.
 */

import {
    useEffect,
    useRef,
    useState,
} from 'react';

interface UseSectionVisibilityOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useSectionVisibility<T extends HTMLElement>({
                                                                threshold = 0.18,
                                                                rootMargin = '0px 0px -8% 0px',
                                                                triggerOnce = true,
                                                            }: UseSectionVisibilityOptions = {}) {
    const sectionRef = useRef<T | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (triggerOnce) {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    setIsVisible(true);
                    observer.unobserve(entry.target);

                    return;
                }

                setIsVisible(entry.isIntersecting);
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
        triggerOnce,
    ]);

    return {
        sectionRef,
        isVisible,
    };
}