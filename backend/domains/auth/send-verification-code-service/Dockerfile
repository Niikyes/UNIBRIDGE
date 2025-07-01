# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install production dependencies only
RUN npm install --only=production

# Copy only necessary source code
COPY server.js ./
COPY src ./src

# Expose port
EXPOSE 3002

# Start the service
CMD ["node", "server.js"]
