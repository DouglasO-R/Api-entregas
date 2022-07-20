import { prisma } from "../../../../database";

export class FindAllDeliveriesUseCase{
    async by(id_client:string){
        const deliveries = await prisma.clients.findMany({
            where:{
                id:id_client
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