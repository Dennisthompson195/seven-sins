import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 xs:max-lg:mt-0 max-lg:relative lg:-mt-36 mx-auto max-sm:-ml-2 text-center items-center justify-center  flex flex-col border-b  pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl mx-auto text-center items-center justify-center  font-medium">{product.title}</h1>
        <div className="mr-auto items-center justify-center text-center w-auto mx-auto -mb-4   p-2 text-sm text-black">
          {/*<h1>From</h1>*/}
          
          <Price
            amount={product.priceRange.minVariantPrice.amount} 
            currencyCode={product.priceRange.minVariantPrice.currencyCode}
          />
        </div>
      </div>
      <div className='w-1/3  mx-auto'>
      <VariantSelector options={product.options} variants={product.variants} />
      </div>
      <div className='w-5/6 mx-auto mt-10'>
      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </div>
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 mt-4 pt-1 mx-auto w-5/6  text-sm  text-black"
          html={product.descriptionHtml}
        />
      ) : null}

      
    </>
  );
}
