import { Route, Routes } from 'react-router';

import { RootLayout } from './components/layout/RootLayout';

// import { AboutPage } from './pages/AboutPage';
// import { contactPage } from './pages/contactPage';
import { HomePage } from './pages/homePage/HomePage';
import { NotFoundPage } from './pages/notFoundPage/NotFoundPage';
import { ProjectPage } from './pages/projectPage/ProjectPage';

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