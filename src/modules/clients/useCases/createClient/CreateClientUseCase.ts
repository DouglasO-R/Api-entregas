import { hash } from "bcrypt";
import { prisma } from "../../../../database";

interface ICreateClient{
    username:string;
    password:string;
}

export class CreateClientUseCase{

    async with({password,username}:ICreateClient){
        const clientExists = await prisma.clients.findFirst({
            where:{
                username:{
                    equals:username,
                    mode:"insensitive"
                }
            }
        });

        if(clientExists){
            throw new Error("client already exists")
        };

        const hashPass = await hash(password,16);

        const client = await prisma.clients.create({
            data:{
                username,
                password:hashPass
            }
        });

        return client;
    }
}