# Stage 1: Builder
FROM ruby:3.1-slim AS builder

# Instalar dependencias necesarias para PostgreSQL (libpq-dev y gcc)
RUN apt-get update && apt-get install -y libpq-dev build-essential

WORKDIR /app

# Copiar Gemfile y Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Instalar dependencias de Ruby
RUN bundle install

# Stage 2: Final image
FROM ruby:3.1-slim

# Instalar libpq-dev en la imagen final (para PostgreSQL)
RUN apt-get update && apt-get install -y libpq-dev

WORKDIR /app

# Copiar todo el código fuente
COPY . .

# Copiar las gemas instaladas desde el builder
COPY --from=builder /usr/local/bundle /usr/local/bundle

# Exponer el puerto que la app va a usar
EXPOSE 5005
ENV PORT=5005

# Comando para iniciar el servidor
CMD ["ruby", "app.rb"]
