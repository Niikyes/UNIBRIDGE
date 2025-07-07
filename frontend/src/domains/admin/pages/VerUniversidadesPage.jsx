import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from "../../../layouts/Layout";

export default function VerUniversidadesPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://52.201.142.137:3018/api/universities/list/universidad", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setItems(res.data))
      .catch(err => console.error("Error al obtener universidades:", err));
  }, []);

  return (
    <>
      <Layout>
        <div className="p-6 w-full">
          <div className="bg-white shadow rounded-lg border border-gray-200">
            <div className="bg-indigo-600 text-white px-6 py-3 rounded-t-lg flex justify-between items-center">
              <h2 className="text-xl font-bold">Listado de Universidades</h2>
            </div>

            <div className="overflow-x-auto p-6">
              <table className="min-w-full border border-gray-300 bg-white rounded">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2 border-b">Nombre</th>
                    <th className="text-left px-4 py-2 border-b">RUC</th>
                    <th className="text-left px-4 py-2 border-b">Dirección</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">{item.nombre || "-"}</td>
                      <td className="px-4 py-2 border-b">{item.ruc || "-"}</td>
                      <td className="px-4 py-2 border-b">{item.direccion || "-"}</td>
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
