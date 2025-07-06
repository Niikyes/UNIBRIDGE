# Use Node.js official LTS image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3017

# Set environment variable (optional)
ENV NODE_ENV=production

# Start the app
CMD ["node", "server.js"]
