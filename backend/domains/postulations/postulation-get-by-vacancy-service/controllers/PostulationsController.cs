using Microsoft.AspNetCore.Mvc;
using postulation_get_by_vacancy_service.services;

namespace postulation_get_by_vacancy_service.controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostulationsController : ControllerBase
    {
        private readonly PostulationService _service;

        public PostulationsController(PostulationService service)
        {
            _service = service;
        }

        [HttpGet("vacancy/{vacanteId}")]
        public IActionResult GetByVacancy(int vacanteId)
        {
            var postulations = _service.GetPostulationsByVacancy(vacanteId);

            if (postulations == null || !postulations.Any())
            {
                return NotFound(new { message = "No se encontraron postulaciones para esta vacante." });
            }

            return Ok(postulations);
        }
    }
}
