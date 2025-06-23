import Navbar from '../../../components/Navbar'; 
import { useAuth } from '../../../context/AuthContext'; 
import { Link } from 'react-router-dom';

export default function EstudianteDashboard() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-xl font-bold">Bienvenido, {user?.nickname}</h1>
        <p className="text-sm">Rol: {user?.role}</p>
        <p className="text-sm">Correo: {user?.email}</p>

        <div className="mt-6">
          <Link
            to="/estudiante/vacancies"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Ver Vacantes Disponibles
          </Link>
        </div>
      </div>
    </>
  );
}

