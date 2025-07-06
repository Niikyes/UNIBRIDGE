# vacancy/vacancy-get-all-service/Dockerfile
FROM python:3.11.9-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /usr/src/app

COPY ["requirements.txt", "./"]
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5100

RUN adduser --disabled-password appuser && chown -R appuser /usr/src/app
USER appuser

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "5100"]
