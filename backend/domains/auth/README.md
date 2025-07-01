# Domain: Auth

## 📄 General description

The **Auth** domain is responsible for all authentication and security management in UNIBRIDGE. It includes microservices for registration, login, logout, user verification, and password recovery.

This domain ensures users authenticate correctly, tokens are validated, and secure access flows are managed.

## 🧩 Included microservices

- **login-service**: Allows users to log in and receive their JWT token.
- **logout-service**: Allows users to log out and revoke their active token.
- **password-request-reset-service**: Initiates password recovery request by sending a link or code to the user.
- **password-reset-service**: Allows the user to change their password using the received token.
- **register-service**: Registers new users on the platform.
- **send-verification-code-service**: Sends verification codes to the user's email or phone.
- **validate-token-service**: Validates and decodes JWT tokens to confirm active sessions.
- **verify-code-service**: Verifies the code sent to the user during registration or recovery processes.

## ⚙️ Technologies used

- Node.js
- Express.js
- JWT (JSON Web Tokens)
- PostgreSQL
- Nodemailer (for email services)
- Docker

## 🌐 Reference ports

3001 - 3008 (depending on the microservice)

## 🗂️ Suggested structure

```markdown
auth/
├── login-service/
├── logout-service/
├── password-request-reset-service/
├── password-reset-service/
├── register-service/
├── send-verification-code-service/
├── validate-token-service/
├── verify-code-service/
```

## 🚀 Expected use

This domain is mainly connected to the frontend and to other domains that need to validate users before operating (e.g., vacancy management or student management).
