import { prisma } from "../../../../database";

interface IUpdate{
    id_delivery:string,
    id_deliveryman:string
}

export class UpdateEndDateUseCase{
    async with({id_delivery,id_deliveryman}:IUpdate){
        const result = await prisma.deliveries.updateMany({
            where:{
                id:id_delivery,
                id_deliveryman
            },
            data:{
                end_at:new Date()
            }
        });


        return result;
    }
}