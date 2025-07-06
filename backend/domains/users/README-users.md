
# 🧩 UNIBRIDGE — Dominio `users`

Este dominio gestiona toda la lógica relacionada con los usuarios de la plataforma UNIBRIDGE: estudiantes, empresas y roles administrativos.

---

## 📚 Microservicios

| Microservicio            | Propósito                                                                 | Token Requerido | Acceso según rol               |
|--------------------------|--------------------------------------------------------------------------|------------------|---------------------------------|
| `user-create-service`    | Crear estudiantes, empresas y usuarios administrativos                   | 🔓 estudiante/empresa<br>🔒 para admin | `admin_global` → admin_institucional<br>`admin_institucional` → coordinador |
| `user-update-service`    | Actualizar datos generales o específicos                                 | ✅ Sí             | Propietario o admin             |
| `get-service`            | Obtener datos de usuario y perfil completo (con JOINs)                   | ✅ Sí             | Propietario o admin             |
| `assign-role-service`    | Asignar nuevo rol a usuario                                               | ✅ Sí             | `admin_global`, `admin_institucional` |
| `enable-service`         | Activar cuenta de usuario (`is_active = true`)                           | ✅ Sí             | Admins y coordinadores          |
| `disable-service`        | Desactivar cuenta temporal (`is_active = false`)                         | ✅ Sí             | Admins y coordinadores          |
| `delete-service`         | Eliminar permanentemente a un usuario (`destroy()`)                      | ✅ Sí             | ❗ Solo `admin_global`           |
| `access-control-service` | Validar si un token permite acceso a un recurso según su rol             | ✅ Sí             | Evaluación externa              |

---

## 🔐 Seguridad

Todos los microservicios:
- Usan `authMiddleware.js` para verificar tokens JWT.
- Validan el rol (`req.user.role`) y la identidad (`req.user.id`) para controlar acceso.
- Incluyen Swagger con seguridad habilitada (`bearerAuth`).

---

## 🧱 Modelos comunes

- **User.js**: ID, email, nickname, password_hash, role_id, is_active.
- **Estudiante.js**: Relacionado con carrera, facultad, universidad, cédula, teléfono.
- **Empresa.js**: Nombre, RUC, dirección, teléfono_contacto.
- **Rol.js**: id + name (`estudiante`, `empresa`, `admin_global`, etc.).

---

## 📌 Notas adicionales

- El microservicio `create-service` maneja lógica condicional según el rol a crear.
- El `access-control-service` permite centralizar lógica de permisos si se desea consultar desde el frontend o microservicios externos.
- El `delete-service` aplica eliminación física, mientras que `disable-service` es reversible.

---

© UNIBRIDGE — 2025
