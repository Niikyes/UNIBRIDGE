
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../components/Navbar';
import RoleBasedSidebar from '../../../components/RoleBasedSidebar';

export default function VerUsuariosPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3001/api/usuarios", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setItems(res.data))
      .catch(err => console.error("Error al obtener usuarios:", err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <RoleBasedSidebar />
        <div className="p-6 w-full">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Listado de Usuarios</h2>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="bg-white rounded shadow p-4">
                {JSON.stringify(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
