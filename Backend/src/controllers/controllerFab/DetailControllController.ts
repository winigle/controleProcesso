import {Request, Response} from 'express'
import { DetailControllSerivce } from '../../services/controllFab/DetailControllSerivce'



class DetailControllController{
  async handle(req: Request, res: Response){
    const id = req.query.id as string;

    const detailOrderService = new DetailControllSerivce();

    const controlles = await detailOrderService.execute({
      id
    })

    return res.json(controlles);

  }
}

export { DetailControllController }