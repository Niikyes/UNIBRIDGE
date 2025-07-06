import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import RoleBasedSidebar from "../../../components/RoleBasedSidebar";
import { useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function VerPostuladosPage() {
  const { vacancyId } = useParams();
  const [postulados, setPostulados] = useState([]);
  const location = useLocation();
  const { tituloVacante } = location.state || {};

  useEffect(() => {
    const fetchPostulados = async () => {
      try {
        const response = await axios.get(`http://54.225.176.170:5000/api/postulations/vacancy/${vacancyId}`);
        const postuladosRaw = response.data;

        const detailedPostulados = await Promise.all(
          postuladosRaw.map(async (post) => {
            try {
              const detailRes = await axios.get(`http://54.225.176.170:5006/api/transform/${post.estudianteId}`);
              return {
                ...post,
                nickname: detailRes.data.nickname,
                email: detailRes.data.email,
                universidad: detailRes.data.universidad,
                carrera: detailRes.data.carrera,
                facultad: detailRes.data.facultad,
              };
            } catch (error) {
              console.error("Error fetching student details", error);
              return { ...post, nickname: "No disponible", email: "-", universidad: "-", carrera: "-", facultad: "-" };
            }
          })
        );

        setPostulados(detailedPostulados);
      } catch (error) {
        console.error("Error al cargar los postulados", error);
        // Show the toast only once
        if (!toast.isActive("loadPostuladosError")) {
          toast.error("Error al cargar los postulados", { toastId: "loadPostuladosError" });
        }
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
          <h1 className="text-2xl font-bold mb-4">
            Estudiantes postulados {tituloVacante ? `en "${tituloVacante}"` : ""}
          </h1>
          {postulados.length === 0 ? (
            <p>No hay estudiantes postulados a esta vacante.</p>
          ) : (
            <div className="space-y-4">
              {postulados.map((post) => (
                <div key={post.id} className="border rounded p-4 shadow">
                  <p><strong>ID Postulación:</strong> {post.id}</p>
                  <p><strong>Nombre:</strong> {post.nickname}</p>
                  <p><strong>Email:</strong> {post.email}</p>
                  <p><strong>Universidad:</strong> {post.universidad}</p>
                  <p><strong>Carrera:</strong> {post.carrera}</p>
                  <p><strong>Facultad:</strong> {post.facultad}</p>
                  <p><strong>Fecha de postulación:</strong> {new Date(post.fechaPostulacion).toLocaleString()}</p>
                  <p><strong>Estado:</strong> {post.estado}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}


