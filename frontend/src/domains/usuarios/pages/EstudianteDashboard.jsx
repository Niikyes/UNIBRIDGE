import { useAuth } from '../../../context/AuthContext';
import Layout from "../../../layouts/Layout";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function EstudianteDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);


  return (
    <>
      <Layout>
        <div className="flex">
          <div className="p-4 w-full">
            <h1 className="text-xl font-bold">Bienvenido, {user?.nickname}</h1>
            <p className="text-sm">Rol: {user?.role}</p>
            <p className="text-sm">Correo: {user?.email}</p>
          </div>
        </div>
      </Layout>
    </>
  );
}

