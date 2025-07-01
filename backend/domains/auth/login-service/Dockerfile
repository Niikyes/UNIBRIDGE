# Use official Node.js LTS image
FROM node:20-alpine

# Set environment to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install production dependencies using clean install
RUN npm ci --only=production

# Copy source code
COPY server.js ./
COPY src ./src
COPY swagger ./swagger

# Expose port
EXPOSE 3004

# Start service
CMD ["node", "server.js"]


