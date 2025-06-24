
const User = require('../models/User');
const Estudiante = require('../models/Estudiante');
const Empresa = require('../models/Empresa');

module.exports = async (userId, body) => {
  const user = await User.findByPk(userId);
  if (!user) throw { status: 404, message: 'User not found' };

  const { nickname, email, ...rest } = body;

  // Actualizar datos principales de usuario si se proveen
  if (nickname) user.nickname = nickname;
  if (email) user.email = email;
  await user.save();

  // Buscar tipo de usuario
  const estudiante = await Estudiante.findOne({ where: { user_id: userId } });
  const empresa = await Empresa.findOne({ where: { user_id: userId } });

  if (estudiante) {
    await estudiante.update({
      cedula: rest.cedula || estudiante.cedula,
      fecha_nacimiento: rest.fecha_nacimiento || estudiante.fecha_nacimiento,
      telefono: rest.telefono || estudiante.telefono,
      carrera_id: rest.carrera_id || estudiante.carrera_id,
      facultad_id: rest.facultad_id || estudiante.facultad_id,
      universidad_id: rest.universidad_id || estudiante.universidad_id
    });
  }

  if (empresa) {
    await empresa.update({
      nombre_empresa: rest.nombre_empresa || empresa.nombre_empresa,
      telefono: rest.telefono || empresa.telefono,
      direccion: rest.direccion || empresa.direccion,
      ruc: rest.ruc || empresa.ruc
    });
  }

  return { message: 'User updated successfully' };
};
