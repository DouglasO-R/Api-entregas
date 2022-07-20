import { Request, Response } from "express";
import { FindAllDeliveriesByClientUseCase } from "./FindAllDeliveriesByClientUseCase";


export class FindAllDeliveriesByClientController {
    async handle(request: Request, response: Response) {
        const { id_client } = request;
        const findAllDeliveriesByClientUseCase = new FindAllDeliveriesByClientUseCase();

        const result = await findAllDeliveriesByClientUseCase.by(id_client)
    }
}