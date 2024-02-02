import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { GridTileImageTwo } from 'components/grid/tile2';
import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import Link from 'next/link';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="mx-auto max-sm:-mt-20 max-h-fit  max-w-screen-2xl  w-screen px-4 mt-2 overflow-x-hidden">
        <div className="flex flex-col w-screen mx-auto max-sm:-ml-2 rounded-lg border border-none bg-white p-8   md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-5/6 sm:w-full xs:max-sm:ml-6 lg:-ml-24 md  max-sm:mx-auto  basis-full lg:basis-4/6 2xl:basis-2/6 relative lg:mt-2 xs:max-md:mt-16 ">
            <Gallery
              images={product.images.map((image: Image) => ({
                src: image.url,
                altText: image.altText
              }))}
            />
          </div>

          <div className="basis-full  xs:max-md:mx-auto xs:max-md:text-center xs:max-md:justify-center xs:max-md:items-center lg:basis-2/6 lg:mt-64 xs:max-md:-mt-6">
            <ProductDescription product={product} />
          </div>
        </div>
        <Suspense>
          <RelatedProducts id={product.id} />
        </Suspense>
        <h1>We're currently collecting reviews for this product</h1>
      </div>
      <Suspense>

      </Suspense>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8 h-full">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto overflow-y-hidden h-full pt-12">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="aspect-square max-w-screen h-full flex-none  xs:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link className="relative h-screen w-full" href={`/product/${product.handle}`}>
              <GridTileImageTwo
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
{/*<div className="py-8  h-full -mt-14 bg-neutral-50">
      <h2 className="mb-6 text-2xl font-bold mx-auto justify-center items-center flex">Related Products</h2>
      <ul className="flex w-screen h-full gap-4 mx-auto items-center justify-center  overflow-x-auto  pt-1 ">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="aspect-square w-screen h-full xs:mx-auto xs:justify-center xs:items-center flex-none  xs:w-1/4 sm:max-md:w-1/2  lg:w-1/12"
          >
            <Link className="relative mx-auto  h-full w-screen" href={`/product/${product.handle}`}>

              <GridTileImageTwo
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
              

            </Link>
            
          </li>
          
        ))}
      </ul>
    </div>*/}