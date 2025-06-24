
import { useEffect, useState } from "react";
import axios from "axios";

export default function CoordinadorDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3005/api/validate-token", {
      headers: { Authorization: `Bearer ${{token}}` }
    }).then(res => setUser(res.data)).catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Bienvenido/a {user?.nickname}</h1>
      <p>Email: {user?.email}</p>
      <p>Rol: {user?.role}</p>
    </div>
  );
}
