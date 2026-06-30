export type Project = {
    slug: string;
    title: string;
    category: string;
    year: string;
    description: string;
};

export const projects: Project[] = [
    {
        slug: 'dirty-bit',
        title: 'Dirty Bit',
        category: 'Album Cover',
        year: '2025',
        description:
            'Album Cover Description...',
    },
    {
        slug: 'zava-photos',
        title: 'ZAVA Photos',
        category: 'Logo Design',
        year: '2026',
        description:
            'Content creator branding',
    },
    {
        slug: 'tyronedm',
        title: 'TYRONEDM',
        category: 'Animation',
        year: '2024',
        description:
            'A custom stage animation designed to enhance the live performance, bringing together the guitarist and DJ through dynamic, immersive visuals.',
    },
    {
        slug: 'sohnder-house',
        title: 'Sohnder House',
        category: 'Apparel Design',
        year: '2025-2026',
        description:
            'A minimal apparel design created with a modern aesthetic, balancing simplicity, versatility, and contemporary style.',
    },
];

export function getProjectBySlug(
    slug: string | undefined,
) {
    return projects.find((project) => project.slug === slug);
}