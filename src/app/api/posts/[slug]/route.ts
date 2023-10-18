import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';
import { NextApiRequest } from 'next';

export const GET = async (req: NextApiRequest, { params }: any) => {
	const { slug } = params;
	try {
		const post = await prisma.post.update({
			where: { slug },
			data: { views: { increment: 1 } },
			include: { user: true },
		});
		return new NextResponse(JSON.stringify(post), { status: 200 });
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: 'Something went wrong!' }),
			{ status: 500 },
		);
	}
};
