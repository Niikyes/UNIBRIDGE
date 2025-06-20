import graphene
from app.db import get_database

# GraphQL object type for a vacancy
class Vacancy(graphene.ObjectType):
    id = graphene.String()
    title = graphene.String()
    description = graphene.String()
    startDate = graphene.String()
    careers = graphene.List(graphene.String)
    companyId = graphene.String()

# Root query object
class Query(graphene.ObjectType):
    allVacancies = graphene.List(Vacancy)

    # Resolver function to fetch all vacancies
    async def resolve_allVacancies(self, info):
        db = get_database()
        cursor = db["vacancies"].find()
        results = []
        async for document in cursor:
            results.append(
                Vacancy(
                    id=str(document.get("_id")),
                    title=document.get("title", ""),
                    description=document.get("description", ""),
                    startDate=document.get("start_date", ""),
                    careers=document.get("careers", []),
                    companyId=document.get("company_id", "")
                )
            )
        return results

# Schema definition
schema = graphene.Schema(query=Query)



