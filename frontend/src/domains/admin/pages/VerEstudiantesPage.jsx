import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from "../../../layouts/Layout";

export default function VerEstudiantesPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://52.201.142.137:3017/api/entities/list/estudiante", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setItems(res.data))
      .catch(err => console.error("Error al obtener estudiantes:", err));
  }, []);

  const calculateAge = (birthdate) => {
    if (!birthdate) return "-";
    const birth = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <>
      <Layout>
        <div className="p-6 w-full">
          <div className="bg-white shadow rounded-lg border border-gray-200">
            <div className="bg-indigo-600 text-white px-6 py-3 rounded-t-lg flex justify-between items-center">
              <h2 className="text-xl font-bold">Listado de Estudiantes</h2>
            </div>

            <div className="overflow-x-auto p-6">
              <table className="min-w-full border border-gray-300 bg-white rounded">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2 border-b">Nickname</th>
                    <th className="text-left px-4 py-2 border-b">Cédula</th>
                    <th className="text-left px-4 py-2 border-b">Universidad</th>
                    <th className="text-left px-4 py-2 border-b">Facultad</th>
                    <th className="text-left px-4 py-2 border-b">Carrera</th>
                    <th className="text-left px-4 py-2 border-b">Edad</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">{item.User?.nickname || "-"}</td>
                      <td className="px-4 py-2 border-b">{item.cedula || "-"}</td>
                      <td className="px-4 py-2 border-b">{item.Universidad?.nombre || "-"}</td>
                      <td className="px-4 py-2 border-b">{item.Facultad?.nombre || "-"}</td>
                      <td className="px-4 py-2 border-b">{item.Carrera?.nombre || "-"}</td>
                      <td className="px-4 py-2 border-b">{calculateAge(item.fecha_nacimiento)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
