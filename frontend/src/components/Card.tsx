import { forwardRef } from 'react';

type Props = {
  name: string;
  url: string;
  imgUrl: string;
};

const Card = forwardRef<any, Props>(function Card({ name, url, imgUrl }: Props, ref) {
  return (
    <div className='mb-8 group' ref={ref}>
      <div>
        <a
          href={url}
          target='_blank'
          rel='noreferrer noopener'
          className='block w-full h-full aspect-[4/3] rounded-xl overflow-hidden mb-2 shadow-card group-hover:shadow-card-lg transition ease-in-out duration-[300ms]'
        >
          <img
            src={imgUrl}
            alt={name}
            className='w-full h-full object-cover object-top aspect-[4/3] group-hover:scale-105 transition ease-in-out duration-[300ms]'
          />
        </a>
      </div>
      <a
        href={url}
        className='block text-neutral-600 group-hover:text-blue-600 transition ease-in-out duration-150'
      >
        {name}
      </a>
    </div>
  );
});

export default Card;
