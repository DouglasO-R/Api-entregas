import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database";

interface IAuthenticateDeliveryman {
    username:string;
    password:string;
}

export class AuthenticateDeliverymanUseCase{
    async with({password,username}:IAuthenticateDeliveryman){
        const deliverymanExist = await prisma.deliveryman.findFirst({
            where:{
                username,
            }
        });

        if(!deliverymanExist) throw new Error("Username or password invalid");

        const passwordMatch = await compare(password,deliverymanExist.password);

        if(!passwordMatch) throw new Error("Username or password invalid");

        const token = sign({username},"secretKey",{
            subject:deliverymanExist.id,
            expiresIn:"3min"
        });

        return token;

    }
}