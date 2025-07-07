import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LogoutModal from "./LogoutModal";
import {
  FiGrid,
  FiCalendar,
  FiUser,
  FiFileText,
  FiLayers,
  FiFolder,
  FiMessageCircle,
  FiChevronDown,
  FiLogOut
} from "react-icons/fi";

export default function RoleBasedSidebar() {
  const [user, setUser] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const [openSections, setOpenSections] = useState(() => {
    // Leer del localStorage la configuración anterior
    const saved = localStorage.getItem("sidebarSections");
    return saved ? JSON.parse(saved) : { dashboard: true, admin: false, soporte: false };
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      // Guardar en localStorage
      localStorage.setItem("sidebarSections", JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://54.225.176.170:3005/api/validate", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => setUser(res.data))
      .catch(console.error);
  }, []);

  if (!user) return null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("sidebarSections"); // Opcional: limpiar si quieres resetear al salir
    window.location.href = "/login";
  };

  return (
    <>
      <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 bg-gray-900 text-white p-6 flex flex-col justify-between shadow-md overflow-y-auto">
        <div className="space-y-6">
          {/* Dashboard section */}
          <SectionHeader
            title="Dashboard"
            isOpen={openSections.dashboard}
            toggle={() => toggleSection("dashboard")}
          />
          {openSections.dashboard && (
            <div className="pl-4 space-y-2 text-sm text-gray-300">
              <SidebarLink icon={<FiGrid />} label="Inicio" to={`/${user.role}/${user.nickname}`} />
              {user.role === "estudiante" && (
                <SidebarLink icon={<FiFileText />} label="Vacantes" to={`/estudiante/vacancies/${user.nickname}`} />
              )}
              {user.role === "empresa" && (
                <>
                  <SidebarLink icon={<FiFileText />} label="Mis Vacantes" to="/empresa/vacantes" />
                  <SidebarLink icon={<FiFileText />} label="Crear Vacante" to="/empresa/crear-vacante" />
                </>
              )}
              {user.role === "coordinador" && (
                <SidebarLink icon={<FiFileText />} label="Coordinador" to={`/coordinador/${user.nickname}`} />
              )}
            </div>
          )}

          {/* Global admin section */}
          {user.role === "admin_global" && (
            <>
              <SectionHeader
                title="Gestión Global"
                isOpen={openSections.admin}
                toggle={() => toggleSection("admin")}
              />
              {openSections.admin && (
                <div className="pl-4 space-y-2 text-sm text-gray-300">
                  <SidebarLink icon={<FiUser />} label="Usuarios" to="/admin_global/usuarios" />
                  <SidebarLink icon={<FiUser />} label="Estudiantes" to="/admin_global/estudiantes" />
                  <SidebarLink icon={<FiLayers />} label="Universidades" to="/admin_global/universidades" />
                  <SidebarLink icon={<FiLayers />} label="Facultades" to="/admin_global/facultades" />
                  <SidebarLink icon={<FiLayers />} label="Carreras" to="/admin_global/carreras" />
                  <SidebarLink icon={<FiFolder />} label="Empresas" to="/admin_global/empresas" />
                </div>
              )}
            </>
          )}

          {/* Institutional admin */}
          {user.role === "admin_institucional" && (
            <>
              <SectionHeader
                title="Validaciones"
                isOpen={openSections.admin}
                toggle={() => toggleSection("admin")}
              />
              {openSections.admin && (
                <div className="pl-4 space-y-2 text-sm text-gray-300">
                  <SidebarLink icon={<FiFolder />} label="Validar Empresas" to="/admin_institucional/habilitar-empresas" />
                </div>
              )}
            </>
          )}

          {/* Support section */}
          <SectionHeader
            title="Soporte"
            isOpen={openSections.soporte}
            toggle={() => toggleSection("soporte")}
          />
          {openSections.soporte && (
            <div className="pl-4 text-sm text-gray-300">
              <SidebarLink icon={<FiMessageCircle />} label="Chat" to="/soporte/chat" />
            </div>
          )}
        </div>

        {/* Logout button */}
        <button
          onClick={() => setShowLogout(true)}
          className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm mt-4"
        >
          <FiLogOut className="w-4 h-4" />
          Cerrar sesión
        </button>
      </aside >

      {showLogout && (
        <LogoutModal onConfirm={handleLogout} onCancel={() => setShowLogout(false)} />
      )
      }
    </>
  );
}

function SidebarLink({ icon, label, to }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white transition-all"
    >
      {icon}
      {label}
    </Link>
  );
}

function SectionHeader({ title, isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      className="flex items-center justify-between w-full text-xs uppercase tracking-wide font-semibold text-gray-400 hover:text-white"
    >
      <span>{title}</span>
      <FiChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
}
