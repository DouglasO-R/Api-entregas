import { Request, Response } from "express";
import { FindAllDeliveriesByDeliverymanUseCase } from "./FindAllDeliveriesByDeliverymanUseCase";



export class FindAllDeliveriesByDeliverymanController {

    async handle(request: Request, response: Response) {

        const { id_deliveryman } = request;
        const FindAllDeliveriesByClientUseCase = new FindAllDeliveriesByDeliverymanUseCase();

        const result = await FindAllDeliveriesByClientUseCase.by(id_deliveryman);
        return response.json(result);
    }
}