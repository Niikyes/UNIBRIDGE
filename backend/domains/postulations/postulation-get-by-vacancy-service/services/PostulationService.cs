using postulation_get_by_vacancy_service.models;
using postulation_get_by_vacancy_service.repository;

namespace postulation_get_by_vacancy_service.services
{
    public class PostulationService
    {
        private readonly PostulationRepository _repository;

        public PostulationService(PostulationRepository repository)
        {
            _repository = repository;
        }

        public List<Postulation> GetPostulationsByVacancy(int vacanteId)
        {
            return _repository.GetByVacancy(vacanteId);
        }
    }
}
