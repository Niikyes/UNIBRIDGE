
function validateUserData(data) {
  const { email, password, nickname, role } = data;
  if (!email || !password || !nickname || !role) {
    throw new Error("Missing required fields");
  }

  if (role === "estudiante") {
    const { cedula, fecha_nacimiento, carrera_id, facultad_id, universidad_id } = data;
    if (!cedula || !fecha_nacimiento || !carrera_id || !facultad_id || !universidad_id) {
      throw new Error("Missing required fields for estudiante");
    }
  }

  if (role === "empresa") {
    const { nombre_empresa, telefono_contacto, direccion, ruc } = data;
    if (!nombre_empresa || !telefono_contacto || !direccion || !ruc) {
      throw new Error("Missing required fields for empresa");
    }
  }

  // admin_institucional y coordinador no requieren campos adicionales
}

module.exports = validateUserData;
