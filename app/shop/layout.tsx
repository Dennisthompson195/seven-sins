import Search from 'components/layout/navbar/search';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import { Suspense } from 'react';
export const runtime = 'edge';
export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      
      <div className=" relative overflow-hidden mt-16  grid   w-full  h-full grid-flow-row gap-8 px-4 pb-4 text-black dark:text-white md:flex-row">
        <div className='md:w-1/3 max-sm:w-1/2 mx-auto max-sm:-left-4 relative -mt-12 mb-0 focus:outline-none'>
<Suspense>
<Search />
</Suspense>
</div>
        <div className="order-first relative   md:top-52 xs:w-1/2 xs:top-20 mt-4 right-6 mx-4  w-11/12 flex-none ">
        
        
          <Collections />
        </div>

        <div className="order-last  justify-center min-h-screen h-fit w-full md:order-none mb-24">{children}</div>
        <div className=" absolute right-4 xs:max-lg:pl-6 md:top-56 xs:top-24 xs:w-1/2 w-11/12 order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>


      </div>
  
    </Suspense>
    
    
  );
}
