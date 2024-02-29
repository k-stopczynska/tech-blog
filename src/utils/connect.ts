// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default prisma;

import { PrismaClient } from '@prisma/client';
let prisma;
if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else {
	if (!prisma) {
		prisma = new PrismaClient();
	}
	prisma = prisma;
}

export default prisma;
