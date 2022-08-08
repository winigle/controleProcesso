import {Request, Response } from 'express'
import { FinishControllService }from '../../services/controllFab/FinishControllService'

class FinishControllController{
  async handle(req: Request, res: Response){
    const { id, name, cargo, triagem, descTriagem, exame, descExame, clinico, descClinico, nr33, descNr33, nr35, descNr35, cracha, descCracha } = req.body;

    const finishOrderService = new FinishControllService();

    const controller = await finishOrderService.execute({
      id,
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

    return res.json(controller);

  }
}

export { FinishControllController }