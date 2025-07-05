import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import RoleBasedSidebar from "../../../components/RoleBasedSidebar";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function VerPostuladosPage() {
  const { vacancyId } = useParams();
  const [postulados, setPostulados] = useState([]);

  useEffect(() => {
    const fetchPostulados = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/postulations/vacancy/${vacancyId}`);
        setPostulados(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Error al cargar los postulados");
      }
    };

    fetchPostulados();
  }, [vacancyId]);

  return (
    <>
      <Navbar />
      <div className="flex">
        <RoleBasedSidebar />
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Estudiantes postulados</h1>
          {postulados.length === 0 ? (
            <p>No hay estudiantes postulados a esta vacante.</p>
          ) : (
            <div className="space-y-4">
              {postulados.map((post) => (
                <div key={post.id} className="border rounded p-4 shadow">
                  <p><strong>ID Postulación:</strong> {post.id}</p>
                  <p><strong>Estudiante ID:</strong> {post.estudianteId}</p>
                  <p><strong>Fecha de postulación:</strong> {new Date(post.fechaPostulacion).toLocaleString()}</p>
                  <p><strong>Estado:</strong> {post.estado}</p>
                  {/* Aquí en el futuro se agregan botones Aceptar/Rechazar */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
