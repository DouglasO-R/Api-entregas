import { prisma } from "../../../../database";

export class FindAllDeliveriesByDeliverymanUseCase{
    async by(id_deliveryman:string){
        const deliveries = await prisma.deliveryman.findMany({
            where:{
                id:id_deliveryman
            },
            select:{
                deliveries:true,
                id:true,
                username:true
            }
        });

        return deliveries;
    }
}