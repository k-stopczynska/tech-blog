import { NextResponse } from 'next/server';
import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';

export const GET = async (req: any) => {
	const { searchParams } = new URL(req.url || '');
	const POSTS_PER_PAGE = 7;
	const page = searchParams.get('page') || '1';
	const cat = searchParams.get('cat');
	console.log('category', cat);
	const query = {
		take: POSTS_PER_PAGE,
		skip: POSTS_PER_PAGE * (parseInt(page) - 1),
		where: {
			...(cat && { categorySlug: cat }),
		},
		orderBy: {
			createdAt: 'desc',
		} as any,
	};

	try {
		const [posts, count] = await prisma.$transaction([
			prisma.post.findMany(query),
			prisma.post.count({ where: query.where }),
		]);
		return new NextResponse(JSON.stringify({ posts, count }), {
			status: 200,
		});
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: 'Something went wrong' }),
			{ status: 500 },
		);
	}
};

// TODO: check how to use proper type here and not get error from json method
export const POST = async (req: any) => {
	const session = await getAuthSession();

	if (!session) {
		return new NextResponse(
			JSON.stringify({ message: 'Not Authenticated!' }),
			{ status: 401 },
		);
	}

	try {
		const body = await req.json();
		const post = await prisma.post.create({
			data: { ...body, userEmail: session?.user?.email },
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
