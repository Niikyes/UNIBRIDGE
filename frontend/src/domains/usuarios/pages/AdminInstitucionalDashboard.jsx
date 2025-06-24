
import { useEffect } from "react";
import { useAuth } from '../../../context/AuthContext';
import RoleBasedSidebar from '../../../components/RoleBasedSidebar';
import axios from "axios";
import Navbar from '../../../components/Navbar';


export default function AdminInstitucionalDashboard() {
  const { user } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3005/api/validate", {
      headers: { Authorization: `Bearer ${{ token }}` }
    }).then(res => setUser(res.data)).catch(console.error);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <RoleBasedSidebar />
        <div className="p-8 w-full">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6">Panel de Administración Institucional</h1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold mb-2">Crear Coordinador</h2>
              <p className="text-sm text-gray-600 mb-4">Registra nuevos coordinadores que gestionarán las vacantes.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
