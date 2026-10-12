export const validarNombreUsuario = (nombre) => {
  if (nombre.trim() === "") {
    return "El nombre de usuario no puede estar vacío";
  }
  return ""; 
};

export const validarCorreo = (correo) => {
  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!patronCorreo.test(correo.trim())) {
    return "Ingresa un correo válido, ej: nombre@dominio.com";
  }
  return "";
};