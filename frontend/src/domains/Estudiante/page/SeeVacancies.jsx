import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import RoleBasedSidebar from "../../../components/RoleBasedSidebar";
import { useAuth } from "../../../context/AuthContext";

export default function SeeVacancies() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { nick } = useParams();
  const [vacantes, setVacantes] = useState([]);
  const [filtroCarrera, setFiltroCarrera] = useState("");

  // Redirigir si no hay usuario autenticado
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Obtener vacantes
  useEffect(() => {
    const fetchVacantes = async () => {
      try {
        const response = await axios.get("http://localhost:5004/api/estudiante/vacancies");
        console.log("Vacantes obtenidas:", response.data);
        setVacantes(response.data);
      } catch (error) {
        console.error("Error al obtener vacantes:", error);
      }
    };

    fetchVacantes();
  }, []);

  // Filtro por carrera
  const vacantesFiltradas = vacantes.filter((v) =>
    filtroCarrera === "" ||
    (v.carreras_destino || []).some((carrera) =>
      carrera.toLowerCase().includes(filtroCarrera.toLowerCase())
    )
  );

  console.log("Renderizando SeeVacancies para:", nick);

  return (
    <>
      <Navbar />
      <div className="flex">
        <RoleBasedSidebar />
        <div className="p-4 w-full">
          <h1 className="text-2xl font-semibold mb-4">Vacantes Disponibles</h1>
          <p className="text-sm text-gray-500">Total vacantes: {vacantesFiltradas.length}</p>

          <label className="block mb-2">
            Filtrar por carrera:
            <input
              type="text"
              className="ml-2 p-1 border rounded"
              value={filtroCarrera}
              onChange={(e) => setFiltroCarrera(e.target.value)}
            />
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {vacantesFiltradas.map((vacante) => (
              <div key={vacante.id} className="border p-4 rounded shadow">
                <h2 className="text-xl font-bold">{vacante.titulo}</h2>
                <p className="text-sm text-gray-700">{vacante.descripcion}</p>
                <p className="mt-2 text-sm">
                  <strong>Habilidades:</strong> {(vacante.habilidades || []).join(", ")}
                </p>
                <p className="text-sm">
                  <strong>Carreras destino:</strong> {(vacante.carreras_destino || []).join(", ")}
                </p>
                <button
                  className="mt-3 bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                  onClick={() => alert("Postularse aún no implementado")}
                >
                  Postularse
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
