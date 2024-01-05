
import FooterMenu from 'components/layout/footer-menu';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 ">
      {/*<div className="mx-auto ml-6 flex w-screen flex-col gap-6 border-neutral-200 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-1 md:px-4 min-[1320px]:px-0">*/}
      <div className="flex w-screen  flex-col sm:grid s gap-6  px-6 py-6 text-sm dark:border-neutral-400 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div>
        {/*<LogoSquare size="sm" />*/}
        </div>
        <div className='sm:grid px-6  grid-flow-col grid-rows-1 grid-cols-2'>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        ><div>
          <Link href='/contact'>Contact Us</Link> <br />
          </div>
          <div>
          <Link href='/shipping'>Shipping Policy</Link> <br />
          <Link href='/returns'>Return Policy</Link> <br />
          </div>
          <div>
          <Link href='/terms-of-service'>Terms of Service</Link> <br />
          <Link href='/FAQ'>FAQ</Link> <br />
          </div>
          <FooterMenu menu={menu} />
        </Suspense>
        </div>
      </div>
      <div className="border-t  bg-white px-2 py-6 text-sm text-neutral-500">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
             Seven Sins Cocktail Co.
            
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p>Made with passion in Lincoln, Nebraska.</p>
          <p className="md:ml-auto">
            <a href="https://vercel.com" className="text-neutral-400">
            &copy; {copyrightDate} {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
