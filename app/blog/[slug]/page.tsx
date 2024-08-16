/*import { CustomMDX } from '@/components/blog/mdx';
import { getBlogPosts } from 'app/db/blog';
import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://www.sevensinscocktails.com${image}`
    : `https://www.sevensinscocktails.com/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://www.sevensinscocktails.com/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
/*
function formatDate(date: string) {
  noStore();
  let currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate}`; {/* (${formattedDate})*//*}
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className='max-lg:ml-2 max-lg:pr-8 lg:ml-8 mt-20 relative lg:left-[25vw]  w-screen overflow-x-hidden'>
      <script
      
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://www.sevensinscocktails.com${post.metadata.image}`
              : `https://www.sevensinscocktails.com/og?title=${post.metadata.title}`,
            url: `https://www.sevensinscocktails.com/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Seven Sins Cocktail Co.',
            },
          }),
        }}
      />
      
      
      <h1 className="title font-bold text-3xl max-lg:ml-2 tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <h1 className="title font-medium text-2xl max-lg:ml-2 tracking-tighter max-w-[650px]">
        {post.metadata.summary}
      </h1>
      <div className="flex justify-between items-center max-lg:ml-2 mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Published {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
        
        {/*<Suspense fallback={<p className="h-5" />}>
          <Views slug={post.slug} />
        </Suspense>*//*}
      </div>
      {/*<p className='text-sm text-neutral-600 dark:text-neutral-400'>Written by <span>{post.metadata.author}</span></p>*/}
      /*<article className="prose prose-quoteless prose-neutral prose-a:text-blue-500 prose-a:no-underline  prose-a:leading-none dark:prose-neutral">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

{/*let incrementViews = cache(increment);*//*}

{/*async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  incrementViews(slug);
  return <ViewCounter allViews={views} slug={slug} />;
}*//*}*/