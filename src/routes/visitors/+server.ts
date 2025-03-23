import { prisma } from '$lib/prisma';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const data = await prisma.sales.findFirst({
		where: {
			name: 'AsyncMuseum'
		},
		select: {
			numberOfSales: true
		}
	});

	const visitors = data == null ? 0 : data.numberOfSales;

	return json({
		visitors
	});
};
