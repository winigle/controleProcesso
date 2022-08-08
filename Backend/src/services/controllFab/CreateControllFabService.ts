// Controller create
// ^(\s)*$\n para remover espaços em branco do código
import prismaClient from "../../prisma";
// Criação da interface do colaborador
interface CargoService{
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
// criação da classe para cadastrar no banco
class CreateControllFabService{
async execute({name, cargo, triagem, descTriagem, exame, descExame, clinico, descClinico, nr33, descNr33, nr35, descNr35, cracha, descCracha}: CargoService){
const controll = await prismaClient.controll.create({
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
return controll;
}
}
export {CreateControllFabService}