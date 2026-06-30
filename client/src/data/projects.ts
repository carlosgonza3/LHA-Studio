import dirtyBitCover from '../assets/images/projects/dirty-bit.png';
import sohnderHouseCover from '../assets/images/projects/sohnder-house.png';
import tyroneDmCover from '../assets/images/projects/tyronedm.png';
import zavaPhotosCover from '../assets/images/projects/zava-photos.png';

export type Project = {
    slug: string;
    title: string;
    category: string;
    year: string;
    description: string;
    cover: string;
    coverAlt: string;
};

export const projects: Project[] = [
    {
        slug: 'dirty-bit',
        title: 'Dirty Bit',
        category: 'Album Cover',
        year: '2025',
        description: 'Album Cover Description...',
        cover: dirtyBitCover,
        coverAlt: 'Dirty Bit album cover project',
    },
    {
        slug: 'zava-photos',
        title: 'ZAVA Photos',
        category: 'Logo Design',
        year: '2026',
        description: 'Content creator branding',
        cover: zavaPhotosCover,
        coverAlt: 'ZAVA Photos branding project',
    },
    {
        slug: 'sohnder-house',
        title: 'Sohnder House',
        category: 'Apparel Design',
        year: '2025-2026',
        description:
            'A minimal apparel design created with a modern aesthetic, balancing simplicity, versatility, and contemporary style.',
        cover: sohnderHouseCover,
        coverAlt: 'Sohnder House apparel design project',
    },
    {
        slug: 'tyronedm',
        title: 'TYRONEDM',
        category: 'Animation',
        year: '2024',
        description:
            'A custom stage animation designed to enhance the live performance, bringing together the guitarist and DJ through dynamic, immersive visuals.',
        cover: tyroneDmCover,
        coverAlt: 'TYRONEDM animation project',
    },
];

export function getProjectBySlug(
    slug: string | undefined,
) {
    return projects.find((project) => project.slug === slug);
}