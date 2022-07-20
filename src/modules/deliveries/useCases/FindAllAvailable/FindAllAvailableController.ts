import { NextFunction, Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableDateUseCase";


export class FindAllAvailableController{

    async handle(request:Request,response:Response,next:NextFunction){
        const findAllAvailableUseCase = new FindAllAvailableUseCase();

        const deliveries = await findAllAvailableUseCase.by();

        return response.json(deliveries);
    }
}