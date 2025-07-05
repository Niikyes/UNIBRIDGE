namespace postulation_get_by_vacancy_service.models
{
    public class Postulation
    {
        public int Id { get; set; }
        public int EstudianteId { get; set; }
        public int VacanteId { get; set; }
        public string Estado { get; set; }
        public string FechaPostulacion { get; set; }
        public string Comentarios { get; set; }
    }
}
