from app.db import get_connection

def get_user_info_by_id(estudiante_id: str):
    conn = get_connection()
    cur = conn.cursor()

    # Obtener user_id y los IDs de universidad, carrera, facultad
    cur.execute("""
        SELECT user_id, universidad_id, carrera_id, facultad_id
        FROM estudiantes
        WHERE id = %s
    """, (estudiante_id,))
    student_row = cur.fetchone()

    if not student_row:
        cur.close()
        conn.close()
        return None

    user_id = student_row[0]
    universidad_id = student_row[1]
    carrera_id = student_row[2]
    facultad_id = student_row[3]

    # Obtener datos de users
    cur.execute("""
        SELECT nickname, email
        FROM users
        WHERE id = %s
    """, (user_id,))
    user_row = cur.fetchone()

    if not user_row:
        cur.close()
        conn.close()
        return None

    nickname = user_row[0]
    email = user_row[1]

    # Obtener nombre universidad
    cur.execute("SELECT nombre FROM universidades WHERE id = %s", (universidad_id,))
    uni_row = cur.fetchone()
    universidad_nombre = uni_row[0] if uni_row else "No registrado"

    # Obtener nombre carrera
    cur.execute("SELECT nombre FROM carreras WHERE id = %s", (carrera_id,))
    carrera_row = cur.fetchone()
    carrera_nombre = carrera_row[0] if carrera_row else "No registrado"

    # Obtener nombre facultad
    cur.execute("SELECT nombre FROM facultades WHERE id = %s", (facultad_id,))
    facultad_row = cur.fetchone()
    facultad_nombre = facultad_row[0] if facultad_row else "No registrado"

    # Armar respuesta
    user_info = {
        "nickname": nickname,
        "email": email,
        "universidad": universidad_nombre,
        "carrera": carrera_nombre,
        "facultad": facultad_nombre
    }

    cur.close()
    conn.close()
    return user_info

