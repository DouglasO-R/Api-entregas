import { Request, response, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";


export class AuthenticateClientController {

    async handle(req: Request, res: Response) {
        const { username, password } = req.body;

        const authenticateClientUseCase = new AuthenticateClientUseCase();
        const result = await authenticateClientUseCase.with({ username, password });

        return res.json(result);
    }
}