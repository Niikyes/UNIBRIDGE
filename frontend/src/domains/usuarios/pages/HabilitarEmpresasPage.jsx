
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../components/Navbar';
import RoleBasedSidebar from '../../../components/RoleBasedSidebar';

export default function HabilitarEmpresasPage() {
  const [empresas, setEmpresas] = useState([]);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3001/api/empresas/pendientes", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setEmpresas(res.data))
      .catch(err => console.error("Error al obtener empresas pendientes:", err));
  }, []);

  const habilitarEmpresa = async (empresaId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.patch(`http://localhost:3001/api/empresas/${empresaId}/habilitar`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMensaje("Empresa habilitada correctamente.");
      setEmpresas(empresas.filter(emp => emp.user_id !== empresaId));
    } catch (err) {
      console.error("Error al habilitar empresa:", err);
      setMensaje("Error al habilitar la empresa.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <RoleBasedSidebar />
        <div className="p-8 w-full">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Empresas Pendientes</h2>
          {mensaje && <p className="mb-4 text-green-600">{mensaje}</p>}
          {empresas.length === 0 ? (
            <p className="text-gray-600">No hay empresas pendientes de habilitación.</p>
          ) : (
            <ul className="space-y-4">
              {empresas.map(empresa => (
                <li key={empresa.user_id} className="bg-white shadow p-4 rounded-md">
                  <p><strong>Empresa:</strong> {empresa.nombre_empresa}</p>
                  <p><strong>Email:</strong> {empresa.email}</p>
                  <button
                    onClick={() => habilitarEmpresa(empresa.user_id)}
                    className="mt-2 px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  >
                    Habilitar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
