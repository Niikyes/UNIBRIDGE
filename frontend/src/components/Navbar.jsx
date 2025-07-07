import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import {
  FiBell,
  FiChevronDown,
  FiUser,
  FiSettings,
  FiInfo,
  FiLogOut
} from 'react-icons/fi';
import LogoutModal from './LogoutModal';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-indigo-600 text-white px-6 py-3 flex justify-between items-center shadow z-20"
    >
      {/* Logo */}
      <Link to="/" className="text-lg font-bold">UNIBRIDGE</Link>

      {/* Search bar */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-sm">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-2 rounded bg-indigo-300 text-sm text-gray-800 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Right items */}
      <div className="flex items-center gap-4 relative">
        {/* Notification icon */}
        <button className="p-2 rounded-full bg-indigo-700 border border-white hover:bg-indigo-500 transition-colors">
          <FiBell className="w-5 h-5 text-white" />
        </button>

        {/* User menu */}
        {user && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 bg-indigo-700 px-3 py-2 rounded-full hover:bg-indigo-500"
            >
              <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.nickname}`}
                alt="avatar"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm">{user.nickname}</span>
              <FiChevronDown className="w-4 h-4" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-gray-800 text-white rounded-lg shadow-lg z-50 p-4">
                <div className="border-b border-gray-700 pb-3 mb-3">
                  <p className="font-semibold">{user.nickname}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li
                    onClick={() => navigate('/profile/edit')}
                    className="flex items-center gap-2 hover:text-indigo-400 cursor-pointer"
                  >
                    <FiUser className="w-4 h-4" />
                    Editar perfil
                  </li>
                  <li
                    onClick={() => navigate('/settings/account')}
                    className="flex items-center gap-2 hover:text-indigo-400 cursor-pointer"
                  >
                    <FiSettings className="w-4 h-4" />
                    Configuración
                  </li>
                  <li
                    onClick={() => navigate('/support/help')}
                    className="flex items-center gap-2 hover:text-indigo-400 cursor-pointer"
                  >
                    <FiInfo className="w-4 h-4" />
                    Soporte
                  </li>
                  <li
                    onClick={() => setShowLogout(true)}
                    className="flex items-center gap-2 hover:text-red-400 text-red-300 cursor-pointer"
                  >
                    <FiLogOut className="w-4 h-4" />
                    Cerrar sesión
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal de cerrar sesión */}
      {showLogout && (
        <LogoutModal
          onConfirm={() => {
            logout();
            navigate('/login', {
              state: { mensaje: 'Sesión cerrada con éxito' }
            });
          }}
          onCancel={() => setShowLogout(false)}
        />
      )}
    </nav>
  );
}
