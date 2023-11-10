import { NextResponse } from 'next/server';
import { NextApiRequest } from 'next';
import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';

export const GET = async (req: NextApiRequest) => {
	const { searchParams } = new URL(req.url!);
	const POSTS_PER_PAGE = 7;
	// const page = +(searchParams.get('page'));
	// check why page is undefined
	const page = 1
	const cat = searchParams.get('cat');
	const query = {
		take: POSTS_PER_PAGE,
		skip: POSTS_PER_PAGE * (page - 1),
		where: {
			...(cat && { categorySlug: cat }),
		},
		// orderBy: {
		// 	createdAt: 'desc',
		// },
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

export const POST = async (req: NextApiRequest) => {
	const session = await getAuthSession();

	if (!session) {
		return new NextResponse(
			JSON.stringify({ message: 'Not Authenticated!' }),
			{ status: 401 },
		);
	}

	try {
		const body = await JSON.parse(req.body);
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
