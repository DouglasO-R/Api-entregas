import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database";

interface IAuthenticateClient {
    username:string;
    password:string;
}

export class AuthenticateClientUseCase{
    async with({password,username}:IAuthenticateClient){
        const client = await prisma.clients.findFirst({
            where:{
                username
            }
        });

        if(!client){
            throw new Error("Username or password not found");
        }

        const passwordMatch = await compare(password,client.password);

        if(!passwordMatch){
            throw new Error("Username or password not found");
        }

        const token = sign({username},"secretKey",{
            subject:client.id,
            expiresIn:"3min"
        });

        return token;
    }
}