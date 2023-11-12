import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';
import { NextApiRequest } from 'next';

export const GET = async (req: NextApiRequest) => {
	const { searchParams } = new URL(req.url!);

	const postSlug = searchParams.get('postSlug');
	try {
		const comments = await prisma.comment.findMany({
			where: {
				...(postSlug && { postSlug }),
			},
			include: { user: true },
		});

		return new NextResponse(JSON.stringify(comments), { status: 200 });
	} catch (err) {
		return new NextResponse(
			JSON.stringify({ message: 'Error fetching comments to this post' }),
			{ status: 500 },
		);
	}
};
// TODO: find proper req type to use json method
export const POST = async (req: any) => {
	const session = await getAuthSession();
	if (!session) {
		return new NextResponse(
			JSON.stringify({ message: 'You are not authorized!' }),
			{ status: 401 },
		);
	}

	try {
		const body = await req.json();
		const comment = await prisma.comment.create({
			data: { ...body, userEmail: session?.user?.email },
		});
		return new NextResponse(JSON.stringify(comment), { status: 200 });
	} catch (err) {
		return new NextResponse(
			JSON.stringify({ message: 'Something went wrong' }),
			{ status: 500 },
		);
	}
};
