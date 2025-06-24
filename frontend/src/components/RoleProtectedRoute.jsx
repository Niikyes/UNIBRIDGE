
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RoleProtectedRoute({ children, allowedRoles }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3005/api/validate-token", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      setUser(res.data);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-4">Cargando...</div>;
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
