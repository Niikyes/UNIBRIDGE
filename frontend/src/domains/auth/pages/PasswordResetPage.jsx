import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PasswordResetPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    email: location.state?.email || '',
    code: '',
    new_password: ''
  });

  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setMensaje('');
    try {
      await axios.post('http://54.225.176.170:3007/api/reset-password', form);
      setMensaje('Contraseña actualizada. Redirigiendo...');
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al restablecer contraseña');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-gray-300 hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Volver al panel de control
        </button>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full">
          <h1 className="text-2xl font-bold text-white text-center mb-2">
            Restablecer Contraseña
          </h1>
          <p className="text-sm text-gray-400 text-center mb-6">
            Introduce el código que recibiste por correo y tu nueva contraseña.
          </p>

          {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
          {mensaje && <p className="text-green-500 mb-4 text-sm text-center">{mensaje}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Correo"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
              required
            />
            <input
              type="text"
              name="code"
              placeholder="Código recibido"
              value={form.code}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
              required
            />
            <input
              type="password"
              name="new_password"
              placeholder="Nueva contraseña"
              value={form.new_password}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold"
            >
              Restablecer contraseña
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
