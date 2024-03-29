import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { Suspense } from 'react';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
  };
}

export default async function CategoryPage({
  params,
  searchParams
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });

  return (
    <Suspense>
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-center lg:text-xl font-medium">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-2 sm:grid-cols-3   lg:grid-cols-4 md:w-5/6 max-md:w-screen mx-auto max-sm:ml-2   "> {/* max-md:w-screen lg:w-full*/}
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
    </Suspense>
  );
}
