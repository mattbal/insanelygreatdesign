type Props = {
  name: string;
  url: string;
  imgUrl: string;
};

export default function Card({ name, url, imgUrl }: Props) {
  return (
    <div className='mb-2'>
      <div className='group relative'>
        <a href={url} className='block'>
          <img
            src={imgUrl}
            alt={name}
            className='w-full h-full object-cover object-top aspect-[4/3] border border-neutral-200 rounded-xl mb-2'
          />
        </a>
        <div className='group-hover:bg-black/10 absolute inset-0 pointer-events-none transition rounded-xl duration-150 ease-linear' />
      </div>
      <a
        href={url}
        className='inline-block hover:text-blue-600 transition ease-linear duration-150'
      >
        {name}
      </a>
    </div>
  );
}
