# Stage 1: Builder
FROM python:3.11-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt
FROM python:3.11-slim
WORKDIR /app
COPY . .
COPY --from=builder /root/.local /root/.local
ENV PATH=/root/.local/bin:$PATH
EXPOSE 5006
ENV PORT=5006
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "5006"]
