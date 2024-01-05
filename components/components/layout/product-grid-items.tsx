import Grid from 'components/grid';
import { GridTileImageTwo } from 'components/grid/tile2';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (

        <Grid.Item key={product.handle} className="animate-fadeIn h-full w-full xs:w-3/4 mx-auto">
        
          <Link className="relative xs:max-md:-left-6 -left-4 mx-auto items-center justify-center flex h-5/6 w-full " href={`/product/${product.handle}`}> {/*inline-block*/}
            <GridTileImageTwo
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.minVariantPrice.amount,
                currencyCode: product.priceRange.minVariantPrice.currencyCode
              }}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>

        </Grid.Item>
      ))}
    
    </>
  );
}
