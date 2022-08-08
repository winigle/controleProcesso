// Código para deletar colaborador
import prismaClient from "../../prisma";
interface ItemRequest{
  id: string;
}
class RemoveItemService{
  async execute({ id }: ItemRequest){
    const order = await prismaClient.controll.delete({
      where:{
        id: id 
      }
    })
    return order;
  }
}
export { RemoveItemService }