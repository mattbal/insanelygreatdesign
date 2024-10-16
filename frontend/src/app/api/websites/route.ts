import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const cursor = searchParams.get('cursor');

  try {
    if (!cursor || cursor === '0') {
      const websites = await prisma.website.findMany({
        take: 20,
        orderBy: {
          id: 'desc',
        },
      });
      return Response.json(websites);
    } else {
      const websites = await prisma.website.findMany({
        take: 20,
        skip: 1, // skip the cursor
        cursor: {
          id: Number(cursor),
        },
        orderBy: {
          id: 'desc',
        },
      });
      return Response.json(websites);
    }
  } catch (error) {
    if (error instanceof Error) {
      return new Response(`${error.message}`, {
        status: 500,
      });
    } else {
      return new Response('Something went wrong.', {
        status: 500,
      });
    }
  }
}
