import Card from '@/components/Card';

export default async function Home() {
  return (
    <main className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 max-w-screen-2xl mx-auto'>
      <Card imgUrl='screenshot.png' name='Hacker Noon' url='neon.tech' />
      <Card imgUrl='neon.png' name='Neon' url='neon.tech' />
      <Card imgUrl='neon.png' name='Neon' url='neon.tech' />
      <Card imgUrl='neon.png' name='Neon' url='neon.tech' />
    </main>
  );
}
