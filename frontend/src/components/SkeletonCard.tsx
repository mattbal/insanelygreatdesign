const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default function SkeletonCard() {
  return (
    <div className='mb-2'>
      <div className=''>
        <div
          className={`w-full h-full aspect-[4/3] border border-neutral-200 rounded-xl mb-2 relative bg-neutral-200 ${shimmer} overflow-hidden`}
        />
        <div className={`h-6 w-20 bg-neutral-200 relative ${shimmer} overflow-hidden`} />
      </div>
    </div>
  );
}
