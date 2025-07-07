import React from "react";
import RoleBasedSidebar from "../components/RoleBasedSidebar";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <RoleBasedSidebar />
      <main className="pt-16 pl-60">
        {children}
      </main>
    </>
  );
}
