import { Route, Routes } from 'react-router';

import { RootLayout } from './components/layout/RootLayout';

// import { AboutPage } from './pages/AboutPage';
// import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectPage } from './pages/ProjectPage';

function App() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route index element={<HomePage />} />
                <Route path="work/:projectSlug" element={<ProjectPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;