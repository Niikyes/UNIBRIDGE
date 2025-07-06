# Stage 1: Builder
FROM python:3.11-slim AS builder
RUN apt-get update && apt-get install -y libpq-dev gcc
WORKDIR /app
COPY requirements.txt ./
RUN pip install --user --no-cache-dir -r requirements.txt
FROM python:3.11-slim
RUN apt-get update && apt-get install -y libpq-dev
WORKDIR /app
COPY . .
COPY --from=builder /root/.local /root/.local
ENV PATH=/root/.local/bin:$PATH
EXPOSE 5100
ENV PORT=5100

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "5100"]
