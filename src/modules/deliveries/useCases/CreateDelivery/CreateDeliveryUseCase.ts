import { prisma } from "../../../../database";

interface ICreateDelivery {
    item_name: string;
    id_client: string;
}

export class CreateDeliveryUseCase {

    async with({id_client,item_name}:ICreateDelivery){
        const delivery = await prisma.deliveries.create({
            data:{
                item_name,
                id_client
            }
        });

        return delivery;
    }
}