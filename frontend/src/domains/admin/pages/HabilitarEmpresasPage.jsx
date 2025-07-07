import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from "../../../layouts/Layout";
import { useNavigate } from 'react-router-dom';

export default function HabilitarEmpresasPage() {
  const navigate = useNavigate();
  const [empresas, setEmpresas] = useState([]);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://52.201.142.137:3017/api/entities/empresas/pendientes", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setEmpresas(res.data))
      .catch(err => {
        console.error("Error al obtener empresas pendientes:", err);
        if (err.response?.status === 401) {
          navigate("/login");
        }
      });
  }, [navigate]);

  const habilitarEmpresa = async (empresaId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(`http://52.201.142.137:3009/api/companies/${empresaId}/enable`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setMensaje("✅ Empresa habilitada correctamente.");
      // Eliminar la empresa de la lista local
      setEmpresas(empresas.filter(emp => emp.id !== empresaId));
    } catch (err) {
      console.error("Error al habilitar empresa:", err);
      setMensaje("❌ Error al habilitar la empresa.");
    }
  };

  return (
    <Layout>
      <div className="p-8 w-full">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Empresas Pendientes</h2>
        {mensaje && <p className="mb-4 text-green-600">{mensaje}</p>}
        {empresas.length === 0 ? (
          <p className="text-gray-600">No hay empresas pendientes de habilitación.</p>
        ) : (
          <ul className="space-y-4">
            {empresas.map(empresa => (
              <li key={empresa.id} className="bg-white shadow p-4 rounded-md">
                <p><strong>Empresa:</strong> {empresa.nombre_empresa}</p>
                <p><strong>Email:</strong> {empresa.User?.email || "-"}</p>
                <p><strong>RUC:</strong> {empresa.ruc_empresa}</p>
                <p><strong>Teléfono:</strong> {empresa.telefono_contacto}</p>
                <button
                  onClick={() => habilitarEmpresa(empresa.id)}
                  className="mt-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Habilitar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
