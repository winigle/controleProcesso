// Código para buscar a lista no banco de dados
import prismaClient from "../../prisma";
class GetControllFabService{
  async execute(){
    const controll = await prismaClient.controll.findMany({
      select:{
        id: true,
        name: true,
        cargo: true,
        triagem: true,
        descTriagem: true,
        exame: true,
        descExame: true,
        clinico: true,
        descClinico: true,
        nr33: true,
        descNr33: true,
        nr35: true,
        descNr35: true,
        cracha: true,
        descCracha: true,
      }
    })
    return controll;
  }
}
export { GetControllFabService }