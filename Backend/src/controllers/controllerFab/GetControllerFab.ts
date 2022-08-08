import {Request, Response} from 'express'
import { GetControllFabService } from '../../services/controllFab/GetControllFabService'

class GetControllerFab{
  async handle(req: Request, res: Response){
    const getService = new GetControllFabService();

    const controll = await getService.execute();

    return res.json(controll);

  }
}

export { GetControllerFab }