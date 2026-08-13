import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import HeaderNavbar from './components/HeaderNavbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <>
      <HeaderNavbar />
      <main className="app-main">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;