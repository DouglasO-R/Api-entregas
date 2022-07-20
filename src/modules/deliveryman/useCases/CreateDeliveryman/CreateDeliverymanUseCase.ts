import { hash } from "bcrypt";
import { prisma } from "../../../../database";


interface ICreateDeliveryman {
    username: string;
    password: string;
}

export class CreateDeliverymanUseCase {
    async with({ password, username }: ICreateDeliveryman) {
        const deliverymanExist = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    equals:username,
                    mode: "insensitive"
                }
            }
        });

        if (deliverymanExist) throw new Error("Deliveryman already exists");

        const hashPass = await hash(password, 16);

        const deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPass
            }
        });

        return deliveryman;
    }
}