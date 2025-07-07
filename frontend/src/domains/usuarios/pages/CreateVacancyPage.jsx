import { useState } from "react";
import axios from "axios";
import Layout from "../../../layouts/Layout";
import { toast } from "react-toastify";

export default function CreateVacancyPage() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [carreras, setCarreras] = useState("");
  const [habilidades, setHabilidades] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const empresaId = storedUser?.empresa_id;

    if (!empresaId) {
      toast.error("Empresa no autorizada. No se encontró el ID de la empresa.");
      return;
    }

    const payload = {
      titulo,
      descripcion,
      modalidad,
      ubicacion,
      fecha_inicio: fechaInicio,
      fecha_fin: fechaFin,
      carreras_destino: carreras.split(",").map((c) => c.trim()),
      habilidades: habilidades.split(",").map((h) => h.trim()),
      empresa_id: empresaId,
    };

    try {
      await axios.post("http://34.224.193.251:5005/api/vacancies", payload);
      toast.success("¡Vacante creada exitosamente!");
      setTitulo("");
      setDescripcion("");
      setModalidad("");
      setUbicacion("");
      setFechaInicio("");
      setFechaFin("");
      setCarreras("");
      setHabilidades("");
    } catch (error) {
      console.error(error);
      toast.error("Error al crear la vacante. Revisa los datos e intenta nuevamente.");
    }
  };

  return (
    <>
      <Layout>
      <div className="flex">
        
        <div className="flex-1 p-6 flex justify-center">
          <div className="w-full max-w-md bg-white p-6 border rounded-xl shadow-lg">
            <h1 className="text-xl font-bold mb-4 text-center">Crear Vacante</h1>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className="w-full p-2 text-base border rounded"
              />
              <textarea
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="w-full p-2 text-base border rounded"
              />
              <input
                type="text"
                placeholder="Modalidad"
                value={modalidad}
                onChange={(e) => setModalidad(e.target.value)}
                className="w-full p-2 text-base border rounded"
              />
              <input
                type="text"
                placeholder="Ubicación"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
                className="w-full p-2 text-base border rounded"
              />
              <div>
                <label className="block text-gray-700 text-sm mb-1">Fecha de inicio</label>
                <input
                  type="date"
                  value={fechaInicio}
                  onChange={(e) => setFechaInicio(e.target.value)}
                  className="w-full p-2 text-base border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Fecha de finalización</label>
                <input
                  type="date"
                  value={fechaFin}
                  onChange={(e) => setFechaFin(e.target.value)}
                  className="w-full p-2 text-base border rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Carreras (separadas por coma)"
                value={carreras}
                onChange={(e) => setCarreras(e.target.value)}
                className="w-full p-2 text-base border rounded"
              />
              <input
                type="text"
                placeholder="Habilidades (separadas por coma)"
                value={habilidades}
                onChange={(e) => setHabilidades(e.target.value)}
                className="w-full p-2 text-base border rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-base"
              >
                Crear Vacante
              </button>
            </form>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}




