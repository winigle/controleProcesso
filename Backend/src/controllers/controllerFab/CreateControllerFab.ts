import {Request, Response} from 'express'

import { CreateControllFabService } from '../../services/controllFab/CreateControllFabService'

class CreateControllerFab{
   async handle(req: Request, res: Response){

    const {name, cargo, triagem, descTriagem, exame, descExame, clinico, descClinico, nr33, descNr33, nr35, descNr35, cracha, descCracha} = req.body;

    const addControll = new CreateControllFabService();

    const controllFab = await addControll.execute({
        name,
        cargo,
        triagem,
        descTriagem,
        exame,
        descExame,
        clinico,
        descClinico,
        nr33,
        descNr33,
        nr35,
        descNr35,
        cracha,
        descCracha,
      
       
    })
    return res.json(controllFab);

   }
       
   
}
export {CreateControllerFab};