
import { useEffect, useState } from "react";
import { useAuth } from '../../../context/AuthContext';
import Layout from "../../../layouts/Layout";
import axios from "axios";

export default function CoordinadorDashboard() {
  const { user } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://54.225.176.170:3005/api/validate", {
      headers: { Authorization: `Bearer ${{ token }}` }
    }).then(res => setUser(res.data)).catch(console.error);
  }, []);

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Bienvenido/a {user?.nickname}</h1>
        <p>Email: {user?.email}</p>
        <p>Rol: {user?.role}</p>
      </div>
    </Layout>
  );
}
