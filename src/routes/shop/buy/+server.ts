import { prisma } from '$lib/prisma';
import { json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async (req) => {
    const formData = await req.request.formData()

    const rawNbTicketSold = formData.get("number") || ""
    const numberOfTicketSold = parseInt(rawNbTicketSold.toString())
    console.log(`${numberOfTicketSold} ticket sold now !`)

    if (numberOfTicketSold < 0) {
        return json({
            error:"You can't buy negative tickets"
        }, {
            status: 401
        });
    }

    const db = await prisma.sales.upsert({
        create: {
            name: "AsyncMuseum",
            numberOfSales: numberOfTicketSold
        },
        update: {
            numberOfSales: {
                increment: numberOfTicketSold
            }
        },
        where: {
            name: "AsyncMuseum"
        }
    });
    redirect(302,"https://www.youtube.com/watch?v=dQw4w9WgXcQ");
};