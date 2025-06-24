
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/User');
const Estudiante = require('../models/Estudiante');
const Empresa = require('../models/Empresa');
const Rol = require('../models/Rol');

module.exports = async (body) => {
  console.log('📥 req.body:', body);
  const { email, password, nickname, role, ...rest } = body;

  const roleRecord = await Rol.findOne({ where: { name: role } });
  console.log('🔍 roleRecord:', roleRecord?.dataValues);
  if (!roleRecord) throw new Error('Invalid role provided.');

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    id: uuidv4(),
    email,
    password_hash: hashedPassword,
    nickname,
    role_id: roleRecord.id,
  });
  console.log('✅ Usuario creado:', newUser?.dataValues);

  if (role === 'estudiante') {
    await Estudiante.create({
      user_id: newUser.id,
      cedula: rest.cedula,
      fecha_nacimiento: rest.fecha_nacimiento,
      telefono_contacto: rest.telefono,
      carrera_id: rest.carrera_id,
      facultad_id: rest.facultad_id,
      universidad_id: rest.universidad_id
    });
  } else if (role === 'empresa') {
    await Empresa.create({
      user_id: newUser.id,
      nombre_empresa: rest.nombre_empresa,
      telefono_contacto: rest.telefono,
      direccion: rest.direccion,
      ruc: rest.ruc
    });
  }

  return newUser.id;
};
