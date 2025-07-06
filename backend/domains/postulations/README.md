# 📨 Postulations Domain - UNIBRIDGE

Este dominio agrupa los microservicios relacionados con el manejo de postulaciones de estudiantes a vacantes dentro del ecosistema **UNIBRIDGE**.

---

## ⚡ Microservicios incluidos

### ✅ `postulation-get-by-vacancy-service`

**Descripción:**  
Servicio para obtener todas las postulaciones realizadas a una vacante específica.

- **Tecnología:** C# (.NET)
- **Arquitectura:** N capas
- **Estilo:** REST
- **Patrón:** Repository

**Endpoint principal:**

```
GET /api/postulations/vacancy/{vacancyId}
```

**Funcionalidad:**  
Devuelve una lista de postulaciones realizadas a la vacante indicada. Cada postulación contiene:

- ID de la postulación
- ID del estudiante
- ID de la vacante
- Fecha de postulación
- Estado

---

### ✅ `transform-id-service`

**Descripción:**  
Servicio para transformar el UUID del estudiante en información legible (nombre, email, carrera, facultad, etc.).

- **Tecnología:** Python (FastAPI)
- **Arquitectura:** N capas
- **Estilo:** REST
- **Patrón:** KISS

**Endpoint principal:**

```
GET /api/transform/{estudianteId}
```

**Funcionalidad:**  
Devuelve información detallada del estudiante a partir de su ID, para ser mostrado en la interfaz de la empresa.

---

## 💻 Flujo de integración

1️⃣ La empresa consulta los postulantes a una vacante mediante el microservicio `postulation-get-by-vacancy-service`.  
2️⃣ Por cada estudiante encontrado, el frontend consulta el `transform-id-service` para obtener su información completa.  
3️⃣ Finalmente, se visualizan los datos completos del postulante (nombre, email, universidad, carrera, facultad) en la interfaz de la empresa.

---

## 🚀 Ejecución rápida

### `postulation-get-by-vacancy-service`

```bash
dotnet restore
dotnet run
```

### `transform-id-service`

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload --port 5006
```

---

## 📄 Estado actual

- [x] Listar postulaciones por vacante
- [x] Transformar UUID a información legible del estudiante
- [x] Integrado y funcional con frontend

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Para reportar bugs o sugerencias, abre un issue o un pull request.

---

## ✉️ Contacto

UNIBRIDGE 🚀



