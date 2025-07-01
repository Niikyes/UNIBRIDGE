# Use Golang official image
FROM golang:1.20

# Set working directory
WORKDIR /app

# Copy go.mod and go.sum files
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy the entire project
COPY . .

# Build the binary
RUN go build -o main ./cmd/main.go

# Expose port
EXPOSE 3020

# Start the service
CMD ["./main"]
