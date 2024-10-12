import Card from '@/components/Card';
import Websites from '@/components/Websites';
import { getWebsites } from '@/lib/fetchFunctions';
import prisma from '@/lib/prisma';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['websites'],
    queryFn: getWebsites,
    initialPageParam: 0,
  });

  return (
    <main className='px-8 max-w-screen-2xl mx-auto'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Websites />
      </HydrationBoundary>
    </main>
  );
}
