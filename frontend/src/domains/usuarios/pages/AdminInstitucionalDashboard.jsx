import { useEffect } from "react";
import { useAuth } from '../../../context/AuthContext';
import Layout from "../../../layouts/Layout";
import { useNavigate } from "react-router-dom";

export default function AdminInstitucionalDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "admin_institucional") {
      navigate("/unauthorized");
    }
  }, [user, navigate]);

  const handleCreateCoordinator = () => {
    navigate("/admin_institucional/crear-coordinador");
  };

  return (
    <Layout>
      <div className="p-8 w-full">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Panel de Administración Institucional</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2">Crear Coordinador</h2>
            <p className="text-sm text-gray-600 mb-4">
              Registra nuevos coordinadores que gestionarán las vacantes y prácticas en tu institución.
            </p>
            <button
              onClick={handleCreateCoordinator}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Crear Coordinador
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
