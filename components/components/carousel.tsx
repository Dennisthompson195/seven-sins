import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImageTwo } from './grid/tile2';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className='w-3/4 mx-auto items-center justify-center bg-neutral-900'>
    <h1 className='text-center text-white font-medium relative bottom-10 text-base'>BEST SELLING PRODUCTS</h1>
    <hr className=' bg-black text-black mx-auto justify-center items-center text-center border-neutral-400 rounded-3xl opacity-80 w-8 -mt-8 border-y-2  font-extrabold'/>
    <div className=" w-full h-fit mx-auto items-center justify-center overflow-hidden pb-2 bg-neutral-900 -mt-6 opacity-100">
      <ul className="mx-auto items-center justify-center flex w-5/6 mb-12 mt-16 bg-neutral-900   gap-4 animate-carousel"> {/*animate-carousel*/}
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[40vh] max-h-[275px] w-full max-w-[450px] flex-none md:w-1/4"
          >
            <Link href={`/product/${product.handle}`} className="relative h-full w-full">
              <GridTileImageTwo
                alt={product.title}
                
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
