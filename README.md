UNIBRIDGE

UNIBRIDGE is a distributed, multi-domain academic platform designed to connect students with companies through supervised professional internships. The system is built using a microservices architecture and aims to manage all processes related to student internships and company collaborations within academic institutions.

🌉 Main Features

Multi-role access: Students, companies, coordinators, institutional admins, and global admins.

Microservices architecture: Modular and scalable design to handle different domains independently.

Multi-language backend services: Each microservice can be developed using different technologies.

Integration with academic structures: Universities, faculties, careers, and hierarchical student data.

Secure authentication and authorization: Implemented with JWT and CORS policies.

Scalable frontend: Built with React, Vite, and Tailwind CSS.

🗂️ Project Structure

backend/
  ├── domains/
  │     ├── auth/
  │     ├── student_management/
  │     ├── users/
  │     └── vacancy/
frontend/
docker-compose-backend.yml
start_all.bat
README.md

auth: Authentication and registration services.

student_management: Services for student internships and related operations.

users: User management, including roles, profiles, and institutional data.

vacancy: Job vacancy management and application processes.

🛠️ Technologies

Node.js, Go, Python, Ruby, C#

PostgreSQL

REST, Event-driven, WebSocket, GraphQL (depending on the microservice)

Docker & Docker Compose

React + Vite + Tailwind CSS (frontend)

⚙️ Deployment

The system can be deployed using docker-compose-backend.yml to start all backend services. The start_all.bat script is included to simplify local development setup.

📄 Documentation

Each microservice has its own README file explaining endpoints, technologies, and usage instructions.