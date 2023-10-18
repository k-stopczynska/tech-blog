import { NextResponse } from 'next/server';
import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';

export const GET = async (request) => {
	const { searchParams } = new URL(request.url);
	const POSTS_PER_PAGE = 6;
	const page = searchParams.get('page');
	const cat = searchParams.get('cat');
	const query = {
		take: POSTS_PER_PAGE,
		skip: POSTS_PER_PAGE * (page - 1),
		where: {
			...(cat && { categorySlug: cat }),
		},
		orderBy: {
			createdAt: 'desc',
		},
	};

	try {
		const [posts, count] = await prisma.$transaction([
			prisma.post.findMany(query),
			prisma.post.count({ where: query.where }),
		]);
		return new NextResponse(
			JSON.stringify({ posts, count }, { status: 200 }),
		);
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify(
				{ message: 'Something went wrong' },
				{ status: 500 },
			),
		);
	}
};

export const POST = async (req) => {
	const session = await getAuthSession();

	if (!session) {
		return new NextResponse(
			JSON.stringify({ message: 'Not Authenticated!' }, { status: 401 }),
		);
	}

	try {
		const body = await req.json();
		const post = await prisma.post.create({
			data: { ...body, userEmail: session.user.email },
		});

		return new NextResponse(JSON.stringify(post, { status: 200 }));
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify(
				{ message: 'Something went wrong!' },
				{ status: 500 },
			),
		);
	}
};
