# UNIBRIDGE Frontend

## 📄 General description

The **UNIBRIDGE** frontend provides the user interface and user experience for the platform. It is built using React with Vite to optimize development and load speed, and Tailwind CSS for fast and modern design.

The frontend interacts with backend microservices to handle authentication, vacancy views, profile management, and more.

## ⚙️ Technologies used

- React.js (with Vite)
- Tailwind CSS
- Axios (for HTTP requests)
- JWT (for session handling)
- Docker

## 🚀 Main features

- Component-based modular architecture.
- Dynamic and protected routes with authentication.
- Integration with multiple backend microservices.
- Responsive and customizable design using Tailwind.
- Ready for containerization with Docker.

## 🗂️ Suggested general structure

```markdown
frontend/
├── node_modules/
├── src/
├── .dockerignore
├── Dockerfile
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
```

## 💡 Expected use

The frontend connects to backend domains (auth, users, student_management, and vacancy) through REST APIs. It provides personalized dashboards for each user type and protected routes by role.

## ⚡ Basic commands

```bash
# Install dependencies
npm install

# Start development environment
npm run dev

# Build production version
npm run build

# Preview production version
npm run preview
```

## 🐳 Docker usage

You can build the image using the included Dockerfile and run the container to serve the frontend in production.
