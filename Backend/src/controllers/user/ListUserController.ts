import {Request, Response} from 'express'
import { ListUserService } from '../../services/user/ListUserService'

class ListUserController{
  async handle(req: Request, res: Response){
    const listProcessoService = new ListUserService();

    const processo = await listProcessoService.execute();

    return res.json(processo);

  }
}

export { ListUserController }