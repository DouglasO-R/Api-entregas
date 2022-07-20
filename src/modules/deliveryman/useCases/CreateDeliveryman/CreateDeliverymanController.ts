import { Response, Request } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";


export class CreateDeliverymanController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const createDeliverymanUseCase = new CreateDeliverymanUseCase();
        const result = await createDeliverymanUseCase.with({ username, password });

        return response.json(result);
    }
}