// Código para filtrar o colaborador
import prismaClient from "../../prisma";
interface OrderRequest{
  id: string;
  name: string;
  cargo: string;
  triagem: string;
  descTriagem: string;
  exame: string;
  descExame: string;
  clinico: string;
  descClinico: string;
  nr33: string;
  descNr33: string;
  nr35: string;
  descNr35: string;
  cracha: string;
  descCracha: string;
  

}
class FinishControllService{
  async execute({ id, name, cargo, triagem, descTriagem, exame, descExame, clinico, descClinico, nr33, descNr33, nr35, descNr35, cracha, descCracha }: OrderRequest){
    const controller = await prismaClient.controll.update({
      where:{
        id: id
      },
      data:{
        name: name,
        cargo: cargo,
        triagem: triagem,
        descTriagem: descTriagem,
        exame: exame,
        descExame: descExame,
        clinico: clinico,
        descClinico: descClinico,
        nr33: nr33,
        descNr33: descNr33,
        nr35: nr35,
        descNr35: descNr35,
        cracha: cracha,
        descCracha: descCracha,
      }
    })
    return FinishControllService;
  }
}
export { FinishControllService }