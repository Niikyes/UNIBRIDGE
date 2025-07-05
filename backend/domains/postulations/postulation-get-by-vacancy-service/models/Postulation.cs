namespace postulation_get_by_vacancy_service.models
{
    public class Postulation
    {
        public int Id { get; set; }
        public Guid EstudianteId { get; set; }
        public int VacanteId { get; set; }
        public DateTime FechaPostulacion { get; set; }
        public string Estado { get; set; }
    }
}
