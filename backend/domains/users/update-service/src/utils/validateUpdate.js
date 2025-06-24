
const validateUpdateData = (data) => {
  if (!data) throw new Error("No data provided for update");

  if (data.email && typeof data.email !== 'string') {
    throw new Error("Invalid email format");
  }

  if (data.nickname && typeof data.nickname !== 'string') {
    throw new Error("Invalid nickname format");
  }

  if (data.telefono && typeof data.telefono !== 'string') {
    throw new Error("Invalid phone number format");
  }

  return true;
};

module.exports = { validateUpdateData };
