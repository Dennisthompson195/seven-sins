import { getBlogPosts } from 'app/db/blog';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section className='grid top-48 h-full lg:ml-6 w-screen'>
      
      <h1 className="font-bold text-center w-screen text-3xl mb-8 tracking-tighter mt-20 text-black">
        Cocktail Recipes & More
      </h1>
      <p className='lg:w-1/2 max-lg:w-3/4  grid mx-auto text-lg font-medium'>Thirsty or looking for inspiration to create something new? We have several delicious recipes that are sure to have your guests talking about your drinks for weeks!</p>
      <section className='grid max-lg:grid-cols-2 lg:grid-cols-3 mx-auto  place-content-center justify-center items-center w-5/6'>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col  max-lg:mx-2   space-y-1 mb-4  -mt-20"
            href={`/blog/${post.slug}`}
          ><p className="text-neutral-900 mt-28 ">
          <Image src={post.metadata.coverImage} width={350} alt='cover photo'
          height={350} objectFit='fill' className='rounded-2xl' />
        </p>
            <div className="w-full   max-lg:mx-2 ">
            
              <p className="text-neutral-900 max-md:text-sm mt-4 lg:-ml-20 mx-auto justify-center items-center flex  ">
                {post.metadata.title}
              </p>
              {/*<p className="text-neutral-900 lg:-ml-20 mx-auto justify-center items-center flex   ">
                {post.metadata.publishedAt}
              </p>*/}
              {/*<Suspense fallback={<p className="h-6" />}>
                <Views slug={post.slug} />
              </Suspense>*/}
            </div>
          </Link>
          
        ))}
        </section>
    </section>
  );
}

{/*async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}*/}