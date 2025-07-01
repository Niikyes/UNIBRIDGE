# Domain: Users

## 📄 General description

The **Users** domain is responsible for the complete management of users within UNIBRIDGE. It includes microservices that allow creating, updating, deleting, enabling, disabling users, managing roles, and controlling access.

This domain centralizes all operations related to user identity and control to ensure consistency and security throughout the platform.

## 🧩 Included microservices

- **access-control-service**: Controls access and user permissions on the platform.
- **assign-role-service**: Allows assigning roles to users based on hierarchies and permissions.
- **create-service**: Allows creating new users in the system.
- **delete-service**: Allows safely deleting users.
- **disable-service**: Allows temporarily disabling users without deleting them.
- **enable-service**: Allows re-enabling previously disabled users.
- **get-service**: Allows querying and listing existing users.
- **update-service**: Allows updating user information.

## ⚙️ Technologies used

- Node.js
- Express.js
- JWT
- PostgreSQL
- Docker

## 🌐 Reference ports

3010 - 3016 (depending on the microservice)

## 🗂️ Suggested structure

```markdown
users/
├── access-control-service/
├── assign-role-service/
├── create-service/
├── delete-service/
├── disable-service/
├── enable-service/
├── get-service/
├── update-service/
```

## 🚀 Expected use

This domain provides the foundation for all identity and user management operations, and integrates with other domains to verify permissions, assign roles, and keep information updated.
