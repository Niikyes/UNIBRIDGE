using postulation_get_by_vacancy_service.models;
using Npgsql;

namespace postulation_get_by_vacancy_service.repository
{
    public class PostulationRepository
    {
        private readonly string _connectionString;

        public PostulationRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public List<Postulation> GetByVacancy(int vacanteId)
        {
            var postulations = new List<Postulation>();

            using var conn = new NpgsqlConnection(_connectionString);
            conn.Open();

            using var cmd = new NpgsqlCommand(@"
                SELECT id, estudiante_id, vacante_id, estado, fecha_postulacion, comentarios
                FROM postulaciones
                WHERE vacante_id = @vacanteId;
            ", conn);

            cmd.Parameters.AddWithValue("@vacanteId", vacanteId);

            using var reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                postulations.Add(new Postulation
                {
                    Id = reader.GetInt32(0),
                    EstudianteId = reader.GetInt32(1),
                    VacanteId = reader.GetInt32(2),
                    Estado = reader.GetString(3),
                    FechaPostulacion = reader.GetString(4),
                    Comentarios = reader.IsDBNull(5) ? "" : reader.GetString(5)
                });
            }

            return postulations;
        }
    }
}

