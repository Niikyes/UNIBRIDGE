import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // npm install lucide-react

export default function PasswordRequestResetPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://54.225.176.170:3006/api/request-reset', { email });
      navigate('/reset', { state: { email } }); // redirige con el email
    } catch (err) {
      setError(err.response?.data?.message || 'Error al solicitar código');
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
            ¿Olvidaste tu contraseña?
          </h1>
          <p className="text-sm text-gray-400 text-center mb-6">
            Ingrese la dirección de correo electrónico vinculada a su cuenta y le enviaremos un codigo para restablecer su contraseña.
          </p>

          {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-1">
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Introduce tu correo electrónico"
                className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold"
            >
              Enviar codigo de restablecimiento
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-400">
            Espera, recuerdo mi contraseña...{' '}
            <button
              onClick={() => navigate(-1)}
              className="text-indigo-400 hover:underline"
            >
              Haz clic aquí
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

