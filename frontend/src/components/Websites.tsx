'use client';
import React, { useRef, useCallback } from 'react';
import { getWebsites } from '@/lib/fetchFunctions';
import { range } from '@/utils/range';
import { useInfiniteQuery } from '@tanstack/react-query';
import SkeletonCard from './SkeletonCard';
import Card from './Card';

export default function Websites() {
  const {
    data: websites,
    error,
    isFetchingNextPage,
    status,
    hasNextPage,
    fetchNextPage,
    isPending,
  } = useInfiniteQuery({
    queryKey: ['websites'],
    queryFn: getWebsites,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextPageParam = lastPage[lastPage.length - 1].id;
      if (nextPageParam === 1) return undefined; // 1 is the last entry since the websites are sorted in desc. order
      return nextPageParam;
    },
  });

  const intersectionObserver = useRef<IntersectionObserver | null>(null);
  const lastElement = useCallback(
    (element: HTMLElement) => {
      if (isPending) return;

      if (intersectionObserver.current) {
        intersectionObserver.current.disconnect();
      }

      if (!hasNextPage) return;

      intersectionObserver.current = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      });

      if (element) {
        intersectionObserver.current.observe(element);
      }
    },
    [hasNextPage, isPending, fetchNextPage]
  );

  if (status === 'pending') {
    return (
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {range(12).map((num) => (
          <SkeletonCard key={num} />
        ))}
      </div>
    );
  } else if (status === 'error') {
    return (
      <div className='p-4 bg-red-100 rounded-md w-fit mx-auto mt-8'>
        <p className='text-red-600'>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {websites?.pages.map((page, i, arr) => {
          if (i === arr.length - 1) {
            return (
              <React.Fragment key={i}>
                {page.map((website, i, arr) => {
                  if (i === arr.length - 1) {
                    return (
                      <Card
                        ref={lastElement}
                        key={website.url}
                        imgUrl={website.imgUrl}
                        name={website.name}
                        url={website.url}
                      />
                    );
                  } else {
                    return (
                      <Card
                        key={website.url}
                        imgUrl={website.imgUrl}
                        name={website.name}
                        url={website.url}
                      />
                    );
                  }
                })}
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={i}>
                {page.map((website) => (
                  <Card
                    key={website.url}
                    imgUrl={website.imgUrl}
                    name={website.name}
                    url={website.url}
                  />
                ))}
              </React.Fragment>
            );
          }
        })}
      </div>
      {isFetchingNextPage && (
        <p className='text-center mb-10 text-neutral-600'>Loading more websites...</p>
      )}
    </>
  );
}
