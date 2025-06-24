
import { useAuth } from '../../../context/AuthContext';
import Navbar from '../../../components/Navbar';
import RoleBasedSidebar from '../../../components/RoleBasedSidebar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function AdminGlobalDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "admin_global") {
      navigate("/unauthorized");
    }
  }, [user]);

  const handleCreateAdminInstitucional = () => {
    navigate("/admin_global/crear-admin-institucional");
  };

  return (
  
     
      <div className="flex">
        <RoleBasedSidebar />
        <div className="p-8 w-full">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6">Panel de Administración Global</h1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold mb-2">Crear Admin Institucional</h2>
              <p className="text-sm text-gray-600 mb-4">Registra nuevos administradores institucionales que gestionarán universidades.</p>
              <button
                onClick={handleCreateAdminInstitucional}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Crear Admin Institucional
              </button>
            </div>
          </div>
        </div>
      </div>
  
  );
}
