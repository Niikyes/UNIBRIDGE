# 📨 Postulations Domain - UNIBRIDGE

This domain groups the microservices related to handling student applications to job vacancies within the **UNIBRIDGE** ecosystem.

---

## ⚡ Included Microservices

### ✅ `postulation-get-by-vacancy-service`

**Description:**  
Service to retrieve all applications submitted to a specific vacancy.

- **Technology:** C# (.NET)
- **Architecture:** N-tier
- **Style:** REST
- **Pattern:** Repository

**Main endpoint:**

```
GET /api/postulations/vacancy/{vacancyId}
```

**Functionality:**  
Returns a list of applications submitted to the indicated vacancy. Each application includes:

- Application ID
- Student ID
- Vacancy ID
- Application date
- Status

---

### ✅ `transform-id-service`

**Description:**  
Service to transform a student’s UUID into readable information (name, email, major, faculty, etc.).

- **Technology:** Python (FastAPI)
- **Architecture:** N-tier
- **Style:** REST
- **Pattern:** KISS

**Main endpoint:**

```
GET /api/transform/{studentId}
```

**Functionality:**  
Returns detailed information about the student using their ID, to be displayed on the company interface.

---

## 💻 Integration Flow

1️⃣ The company retrieves applicants for a vacancy using the `postulation-get-by-vacancy-service`.  
2️⃣ For each student found, the frontend queries the `transform-id-service` to get their complete information.  
3️⃣ Finally, the full applicant data (name, email, university, major, faculty) is displayed on the company interface.

---

## 🚀 Quick Start

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

## 📄 Current Status

- [x] List applications by vacancy
- [x] Transform UUID to readable student information
- [x] Integrated and working with frontend

---

## 🤝 Contributions

Contributions are welcome ! To report bugs or suggest improvements, please open an issue or a pull request.

---

## ✉️ Contact

UNIBRIDGE 🚀
