import HeaderNavbar from './components/HeaderNavbar';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <HeaderNavbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company/:companyId" element={<CompanyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
