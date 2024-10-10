import SkeletonCard from '@/components/SkeletonCard';
import { range } from '@/utils/range';

export default function Loading() {
  return (
    <main className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 max-w-screen-2xl mx-auto'>
      {range(12).map((num) => (
        <SkeletonCard key={num} />
      ))}
    </main>
  );
}
