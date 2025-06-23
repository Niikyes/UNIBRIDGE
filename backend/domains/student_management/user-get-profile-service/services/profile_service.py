import jwt
import psycopg2
import os

def get_user_profile(token: str):
    try:
        payload = jwt.decode(token, os.getenv("JWT_SECRET", "secret_key"), algorithms=["HS256"])
        user_id = payload.get("user_id")
        role = payload.get("role")
    except Exception as e:
        raise Exception("Invalid token") from e

    conn = psycopg2.connect(
        dbname=os.getenv("DB_NAME", "user_db"),
        user=os.getenv("DB_USER", "postgres"),
        password=os.getenv("DB_PASSWORD", "tu_clave"),
        host=os.getenv("DB_HOST", "localhost"),
        port=os.getenv("DB_PORT", "5432"),
    )
    cur = conn.cursor()

    base_query = "SELECT u.id, u.nickname, u.email, r.name FROM users u JOIN roles r ON u.role_id = r.id WHERE u.id = %s"
    cur.execute(base_query, (user_id,))
    row = cur.fetchone()

    if not row:
        raise Exception("User not found")

    profile = {
        "user_id": row[0],
        "nickname": row[1],
        "email": row[2],
        "role": row[3]
    }

    # Extend based on role
    if role == "estudiante":
        cur.execute("SELECT id, universidad_id, carrera_id, facultad_id FROM estudiantes WHERE user_id = %s", (user_id,))
        s = cur.fetchone()
        if s:
            profile.update({
                "estudiante_id": s[0],
                "universidad_id": s[1],
                "carrera_id": s[2],
                "facultad_id": s[3]
            })
    elif role == "empresa":
        cur.execute("SELECT id, esta_aprobada FROM empresas WHERE user_id = %s", (user_id,))
        e = cur.fetchone()
        if e:
            profile.update({
                "empresa_id": e[0],
                "esta_aprobada": e[1]
            })
    cur.close()
    conn.close()
    return profile
