import type {
    ReactNode,
} from 'react';

import {
    Navigate,
    useParams,
} from 'react-router';

import DirtyBitProject from '../../components/projects/DirtyBitProject/DirtyBitProject';
import SohnderHouseProject from '../../components/projects/SohnderHouseProject/SohnderHouseProject';
import TyroneDmProject from '../../components/projects/TyroneDmProject/TyroneDmProject';
import ZavaPhotosProject from '../../components/projects/ZavaPhotosProject/ZavaPhotosProject';

import {
    getProjectBySlug,
} from '../../data/projects';

import './ProjectPage.css';

const projectComponents: Record<string, ReactNode> = {
    'dirty-bit': <DirtyBitProject />,
    'zava-photos': <ZavaPhotosProject />,
    tyronedm: <TyroneDmProject />,
    'sohnder-house': <SohnderHouseProject />,
};

export function ProjectPage() {
    const { projectSlug } = useParams();

    const project = getProjectBySlug(projectSlug);

    if (!project || !projectSlug) {
        return <Navigate to="/not-found" replace />;
    }

    const projectContent = projectComponents[projectSlug];

    if (!projectContent) {
        return <Navigate to="/not-found" replace />;
    }

    return (
        <div className="projectPage">
            {projectContent}
        </div>
    );
}