import { useState } from 'react';
import axios from 'axios';
import Layout from "../../../layouts/Layout";
import { useNavigate } from 'react-router-dom';

export default function CrearAdminInstitucionalPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    password: ''
  });
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMensaje('');
    setError('');

    try {
      const token = localStorage.getItem('token');
      console.log('TOKEN ACTUAL:', token);

      if (!token) {
        setError('Token no encontrado. Inicia sesión como administrador global.');
        return;
      }

      const res = await axios.post(
        'http://52.201.142.137:3010/api/create/admin_institucional',
        { ...formData, role: 'admin_institucional' },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (res.data && res.data.message) {
        setMensaje(res.data.message);
        setFormData({ nickname: '', email: '', password: '' });
      }
    } catch (err) {
      console.error('Error en frontend:', err);
      setError(err.response?.data?.message || 'Error al crear administrador.');
    }
  };

  return (
    <>
      <Layout>
        <div className="flex">
          <div className="p-8 w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">Crear Admin Institucional</h2>
            {mensaje && <p className="text-green-600 mb-4">{mensaje}</p>}
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nickname</label>
                <input
                  type="text"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Correo</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="text-right">
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
