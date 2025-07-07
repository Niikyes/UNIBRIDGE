import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../../layouts/Layout';
import { useNavigate } from 'react-router-dom';
import { FiEdit, FiTrash2, FiSearch } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function VerUsuariosPage() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [filteredUsuarios, setFilteredUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState("");
  const [formData, setFormData] = useState({ nickname: "", email: "", role: "", isActive: true });

  useEffect(() => {
    fetchUsuarios();
  }, [navigate]);

  const fetchUsuarios = () => {
    const token = localStorage.getItem("token");
    axios.get("http://52.201.142.137:3016/api/users/list", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        setUsuarios(res.data.data);
        setFilteredUsuarios(res.data.data);
      })
      .catch(err => {
        console.error("Error al obtener usuarios:", err);
        if (err.response?.status === 401) {
          navigate("/login");
        }
      });
  };

  const openModal = (user, type) => {
    setSelectedUser(user);
    setModalType(type);
    setFormData({
      nickname: user.nickname,
      email: user.email,
      role: user.role?.name,
      isActive: user.is_active,
    });
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalType("");
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = usuarios.filter((user) =>
      user.nickname.toLowerCase().includes(value.toLowerCase()) ||
      user.email.toLowerCase().includes(value.toLowerCase()) ||
      user.role?.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredUsuarios(filtered);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      // Update nickname & email
      await axios.put(`http://52.201.142.137:3012/api/users/${selectedUser.id}`, {
        nickname: formData.nickname,
        email: formData.email
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Assign role
      if (formData.role !== selectedUser.role?.name) {
        await axios.put(`http://52.201.142.137:3014/api/users/${selectedUser.id}/assign-role`, {
          newRole: formData.role
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }

      // Enable or disable
      await axios.put(`http://52.201.142.137:3015/api/users/${selectedUser.id}/${formData.isActive ? "enable" : "disable"}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      fetchUsuarios();
      closeModal();
      toast.success("Usuario actualizado correctamente", { autoClose: 3000 });
      setSearchTerm("");
    } catch (error) {
      console.error("Error al guardar cambios:", error);
      toast.error("Error al actualizar usuario", { autoClose: 3000 });
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://52.201.142.137:3013/api/users/${selectedUser.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      fetchUsuarios();
      closeModal();
      toast.success("🗑️ Usuario eliminado correctamente", { autoClose: 3000 });
      setSearchTerm("");
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      toast.error("❌ Error al eliminar usuario", { autoClose: 3000 });
    }
  };

  return (
    <>
      <Layout>
        <div className="p-6 w-full">
          <div className="bg-white shadow rounded-lg border border-gray-200">
            <div className="bg-indigo-600 text-white px-6 py-3 rounded-t-lg flex justify-between items-center">
              <h2 className="text-xl font-bold">Listado de Usuarios</h2>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Buscar..."
                  className="pl-8 pr-4 py-1 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 border"
                />
                <FiSearch className="absolute left-2 top-1.5 text-gray-500" />
              </div>
            </div>

            <div className="overflow-x-auto p-6">
              <table className="min-w-full border border-gray-300 bg-white rounded">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2 border-b">Nickname</th>
                    <th className="text-left px-4 py-2 border-b">Email</th>
                    <th className="text-left px-4 py-2 border-b">Rol</th>
                    <th className="text-left px-4 py-2 border-b">Estado</th>
                    <th className="text-left px-4 py-2 border-b">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsuarios.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">{user.nickname}</td>
                      <td className="px-4 py-2 border-b">{user.email}</td>
                      <td className="px-4 py-2 border-b">{user.role?.name}</td>
                      <td className="px-4 py-2 border-b">
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-block w-3 h-3 rounded-full ${user.is_active ? "bg-green-500" : "bg-red-500"}`}
                          ></span>
                          {user.is_active ? "Activo" : "Inactivo"}
                        </div>
                      </td>
                      <td className="px-4 py-2 border-b">
                        <div className="flex items-center gap-2">
                          <button onClick={() => openModal(user, "edit")} className="text-blue-600 hover:text-blue-800">
                            <FiEdit />
                          </button>
                          <button onClick={() => openModal(user, "delete")} className="text-red-600 hover:text-red-800">
                            <FiTrash2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal */}
          {selectedUser && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow-md w-96">
                {modalType === "edit" && (
                  <>
                    <h3 className="text-xl font-semibold mb-4">Editar Usuario</h3>
                    <input
                      type="text"
                      name="nickname"
                      value={formData.nickname}
                      onChange={handleChange}
                      placeholder="Nickname"
                      className="w-full mb-2 px-3 py-1 border rounded"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full mb-2 px-3 py-1 border rounded"
                    />
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full mb-2 px-3 py-1 border rounded"
                    >
                      <option value="">Seleccionar rol</option>
                      <option value="admin_global">admin_global</option>
                      <option value="admin_institucional">admin_institucional</option>
                      <option value="coordinador">coordinador</option>
                      <option value="empresa">empresa</option>
                      <option value="estudiante">estudiante</option>
                    </select>
                    <div className="flex items-center mb-4">
                      <input
                        type="checkbox"
                        name="isActive"
                        checked={formData.isActive}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label>Activo</label>
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                      <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
                      <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">Guardar</button>
                    </div>
                  </>
                )}
                {modalType === "delete" && (
                  <>
                    <h3 className="text-xl font-semibold mb-4">Confirmar Eliminación</h3>
                    <p>¿Estás seguro de eliminar a <strong>{selectedUser.nickname}</strong>?</p>
                    <div className="mt-4 flex justify-end gap-2">
                      <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
                      <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded">Eliminar</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
