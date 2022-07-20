import { prisma } from "../../../../database";

export class FindAllAvailableUseCase{
    async by(){
        const deliveries = await prisma.deliveries.findMany({
            where:{
                end_at:null
            }
        });

        return deliveries;
    }
}