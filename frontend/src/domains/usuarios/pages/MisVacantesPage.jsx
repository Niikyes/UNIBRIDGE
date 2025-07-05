import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import RoleBasedSidebar from "../../../components/RoleBasedSidebar";
import { toast } from "react-toastify";
import { Link } from "react-router-dom"; // 👈 Importar Link

export default function MisVacantesPage() {
  const [vacantes, setVacantes] = useState([]);
  const errorShownRef = useRef(false);

  useEffect(() => {
    const fetchVacantes = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const empresaId = storedUser?.empresa_id;

        if (!empresaId) {
          toast.error("No se encontró el ID de la empresa.");
          return;
        }

        const res = await axios.get(`http://localhost:5100/api/vacancies/empresa/${empresaId}`);
        setVacantes(res.data);
      } catch (error) {
        console.error("Error al obtener vacantes:", error);
        if (!errorShownRef.current) {
          toast.error("Error al cargar tus vacantes");
          errorShownRef.current = true;
        }
      }
    };

    fetchVacantes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <RoleBasedSidebar />
        <div className="p-6 w-full">
          <h1 className="text-2xl font-bold mb-4">Mis Vacantes Publicadas</h1>
          {vacantes.length === 0 ? (
            <p className="text-gray-600">Aún no has publicado vacantes.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vacantes.map((v) => (
                <div key={v.id} className="border p-4 rounded shadow">
                  <h2 className="text-lg font-bold">{v.titulo}</h2>
                  <p className="text-sm text-gray-700">{v.descripcion}</p>
                  <p className="mt-1 text-sm">
                    <strong>Modalidad:</strong> {v.modalidad}
                  </p>
                  <p className="text-sm">
                    <strong>Ubicación:</strong> {v.ubicacion}
                  </p>
                  <p className="text-sm">
                    <strong>Estado:</strong> {v.estado}
                  </p>
                  <p className="text-sm">
                    <strong>Habilidades:</strong> {(v.habilidades || []).join(", ")}
                  </p>
                  <p className="text-sm">
                    <strong>Carreras destino:</strong> {(v.carreras_destino || []).join(", ")}
                  </p>

                  {/* Botón Ver postulados */}
                  <Link to={`/empresa/vacantes/${v.id}/postulados`}>
                    <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                      Ver postulados
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}




