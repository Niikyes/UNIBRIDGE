import graphene
from app.db import get_vacancy_collection
from app.models import VacancyModel

# Define the GraphQL type based on our Pydantic model
class VacancyType(graphene.ObjectType):
    id = graphene.String()
    title = graphene.String()
    description = graphene.String()
    start_date = graphene.String()
    careers = graphene.List(graphene.String)
    company_id = graphene.String()

# Define GraphQL query to retrieve all vacancies
class Query(graphene.ObjectType):
    all_vacancies = graphene.List(VacancyType)

    # Resolver function to fetch vacancies from MongoDB
    def resolve_all_vacancies(self, info):
        collection = get_vacancy_collection()
        vacancies = list(collection.find())
        return [
            VacancyType(
                id=str(v["_id"]),
                title=v["title"],
                description=v["description"],
                start_date=v["start_date"],
                careers=v["careers"],
                company_id=v["company_id"]
            )
            for v in vacancies
        ]

# Define GraphQL schema
schema = graphene.Schema(query=Query)
