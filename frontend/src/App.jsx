
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './domains/auth/pages/LoginPage';
import RegisterPage from './domains/auth/pages/RegisterPage';
import RegisterEmpresaPage from './domains/auth/pages/RegisterEmpresaPage';
import VerifyCodePage from './domains/auth/pages/VerifyCodePage';
import PasswordRequestResetPage from './domains/auth/pages/PasswordRequestResetPage';
import PasswordResetPage from './domains/auth/pages/PasswordResetPage';
import AdminInstitucionalDashboard from './domains/usuarios/pages/AdminInstitucionalDashboard';
import AdminGlobalDashboard from './domains/usuarios/pages/AdminGlobalDashboard';
import CoordinadorDashboard from './domains/usuarios/pages/CoordinadorDashboard';
import EmpresaDashboard from './domains/usuarios/pages/EmpresaDashboard';
import EstudianteDashboard from './domains/usuarios/pages/EstudianteDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterChoicePage from './pages/RegisterChoicePage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import VerEmpresasPage from './domains/admin/pages/VerEmpresasPage';
import VerCarrerasPage from './domains/admin/pages/VerCarrerasPage';
import VerFacultadesPage from './domains/admin/pages/VerFacultadesPage';
import VerUniversidadesPage from './domains/admin/pages/VerUniversidadesPage';
import VerEstudiantesPage from './domains/admin/pages/VerEstudiantesPage';
import VerUsuariosPage from './domains/admin/pages/VerUsuariosPage';
import HabilitarEmpresasPage from './domains/usuarios/pages/HabilitarEmpresasPage';
import CrearCoordinadorPage from './domains/usuarios/pages/CrearCoordinadorPage';
import CrearAdminInstitucionalPage from './domains/admin/pages/CrearAdminInstitucionalPage';
import SeeVacancies from './domains/Estudiante/page/SeeVacancies'
import LandingPage from './pages/LandingPage';
import { AuthProvider } from './context/AuthContext'; 

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/estudiante" element={<RegisterPage />} />
          <Route path="/register/empresa" element={<RegisterEmpresaPage />} />
          <Route path="/verify" element={<VerifyCodePage />} />
          <Route path="/request-reset" element={<PasswordRequestResetPage />} />
          <Route path="/reset" element={<PasswordResetPage />} />
          <Route path="/estudiante/vacancies/:nick" element={<SeeVacancies />} />
          <Route path="/estudiante/:nick" element={<ProtectedRoute requiredRole="estudiante"><EstudianteDashboard /></ProtectedRoute>} />
          <Route path="/empresa/:nick" element={<ProtectedRoute requiredRole="empresa"><EmpresaDashboard /></ProtectedRoute>} />
          <Route path="/coordinador/:nick" element={<ProtectedRoute requiredRole="coordinador"><CoordinadorDashboard /></ProtectedRoute>} />
          <Route path="/admin_institucional/:nick" element={<ProtectedRoute requiredRole="admin_institucional"><AdminInstitucionalDashboard /></ProtectedRoute>} />
          <Route path="/admin_global/:nick" element={<ProtectedRoute requiredRole="admin_global"><AdminGlobalDashboard /></ProtectedRoute>} />
          <Route path="/register" element={<RegisterChoicePage />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="/admin_global/crear-admin-institucional" element={<CrearAdminInstitucionalPage />} />
          <Route path="/admin_institucional/crear-coordinador" element={<CrearCoordinadorPage />} />
          <Route path="/coordinador/habilitar-empresas" element={<HabilitarEmpresasPage />} />
          <Route path="/admin_global/usuarios" element={<VerUsuariosPage />} />
          <Route path="/admin_global/estudiantes" element={<VerEstudiantesPage />} />
          <Route path="/admin_global/universidades" element={<VerUniversidadesPage />} />
          <Route path="/admin_global/facultades" element={<VerFacultadesPage />} />
          <Route path="/admin_global/carreras" element={<VerCarrerasPage />} />
          <Route path="/admin_global/empresas" element={<VerEmpresasPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
