import { NextFunction, request, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}


export async function ensureAuthenticateDeliveryman(equest: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) response.status(401).json({ message: "token missing" });

    const [_, token] = authHeader!.split(" ");

    try {
        const { sub } = verify(token, "secretKey") as IPayload;
        request.id_deliveryman = sub;

    } catch (error) {
        return response.status(401).json({ message: "token missing" });

    }
}
