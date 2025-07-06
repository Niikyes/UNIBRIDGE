import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../../../layouts/Layout";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify"; // ✅ IMPORTANTE

export default function SeeVacancies() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const { nick } = useParams();
  const [vacantes, setVacantes] = useState([]);
  const [filtroCarrera, setFiltroCarrera] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    updateProfile();
  }, []);

  useEffect(() => {
    const fetchVacantes = async () => {
      try {
        const response = await axios.get("http://54.225.176.170:5004/api/estudiante/vacancies");
        setVacantes(response.data);
      } catch (error) {
        console.error("Error al obtener vacantes:", error);
        toast.error("Error al cargar las vacantes");
      }
    };

    fetchVacantes();
  }, []);

  const handlePostularse = async (vacanteId) => {
    if (!user || !user.estudiante_id) {
      toast.error("No se encontró tu ID de estudiante. Revisa tu perfil o vuelve a iniciar sesión.");
      return;
    }

    try {
      await axios.post("http://54.225.176.170:3020/api/apply", {
        estudiante_id: user.estudiante_id,
        vacante_id: vacanteId,
      });

      toast.success("¡Postulación exitosa!");
    } catch (error) {
      console.error("Error al postularse:", error);
      if (error.response && error.response.status === 409) {
        toast.warn("Ya te has postulado a esta vacante");
      } else {
        toast.error("Ocurrió un error al postularse");
      }
    }
  };

  const vacantesFiltradas = vacantes.filter((v) =>
    filtroCarrera === "" ||
    (v.carreras_destino || []).some((carrera) =>
      carrera.toLowerCase().includes(filtroCarrera.toLowerCase())
    )
  );

  if (!user) {
    return null;
  }

  return (
    <>
      <Layout>
        <div className="flex">
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
                    onClick={() => handlePostularse(vacante.id)}
                  >
                    Postularse
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}




