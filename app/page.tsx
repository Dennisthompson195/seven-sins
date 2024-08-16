import MixHeroTwo from 'components/MixHeroTwo';
import Productline from 'components/product-line';
import ProductlineTwo from 'components/product-line2';
import TopHeroTwo from 'components/TopHero2';

export const runtime = 'edge';


/*
export const metadata = {
  description: 'Artisan Cocktail Supplies.',
  openGraph: {
    type: 'website',
    images: 'https://sevensinscocktails.com/opengraph-image.png?7b8234c493421156', 
  }
  
}; */

export default async function HomePage() {
  return (
    
    <>
    <div className='relative -top-4'>
    <div className='  w-screen  h-full mx-auto relative  '>
    <div className=' w-screen max-md:-mt-12   '>
    <section className='bg-none max-md:-top-6'>
      <h1 className='opacity-0 absolute h-fit -top-20'>Artisan cocktail supply company located in Lincoln, Nebraska.</h1>
      <TopHeroTwo />
    </section>

    <section className='bg-none  '>
      <MixHeroTwo />
    </section>

            <div className='relative hidden md:block max-sm:-left-1 top-0 '>
              <Productline />
          </div>
      </div>
      </div>
      <div className='relative block md:hidden top-0 max-sm:-left-1 max-sm:top-12 '>
              <ProductlineTwo />
          </div>
    </div>
    </>
  );
}
