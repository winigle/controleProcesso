// Código para ver os detalhes do colaborador
import prismaClient from "../../prisma";
interface DetailRequest{
  id: string;
}
class DetailControllSerivce{
  async execute({ id }: DetailRequest){
    const controlles = await prismaClient.controll.findMany({
      where:{
        id: id
      },
    })
    return controlles;
  }
}
export { DetailControllSerivce }