import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu'); 

  return (
    <nav className=" mx-auto relative -top-2 align-middle grid grid-cols-3 text-center items-center justify-center p-3 lg:px-6  text-black mt-4">
      <div className="relative top-12 block flex-none">
        {/*<MobileMenu menu={menu} />*/}
      </div>
      <div className="flex w-full items-center text-center mx-auto">
        <div className="flex w-full mx-auto  items-center justify-center text-sm text-center">

          <Link href="/" className="mr-2 ml-4 flex w-fit hover:underline underline-offset-2 mx-auto px-8 items-center justify-center md:w-auto  lg:mr-6">
            
            <div className="ml-2 flex-none  font-medium  uppercase md:hidden lg:block">
               Home
            </div>
          </Link>

          <Link href="/about" className="mr-2 px-8 flex w-full hover:underline underline-offset-2 items-center justify-center md:w-auto lg:mr-6">
            
            <div className="ml-2 flex-none  font-medium uppercase md:hidden lg:block">
              About
              {/*SITE_NAME*/}
            </div>
          </Link>

          <Link href="/shop" className="mr-2 px-8 flex w-full hover:underline underline-offset-2 items-center justify-center md:w-auto lg:mr-6">
            
            <div className="ml-2 flex-none  font-medium uppercase md:hidden lg:block">
              Shop
              {/*SITE_NAME*/}
            </div>
          </Link>
          <Link href="/blog" className="mr-2 px-8 flex w-full hover:underline underline-offset-2 items-center justify-center md:w-auto lg:mr-6">
            
            <div className="ml-2 flex-none  font-medium uppercase md:hidden lg:block">
              Blog
              
            </div>
          </Link>

          {/*<Link href="/gallery" className="mr-2 px-8 flex w-full items-center justify-center md:w-auto lg:mr-6">
            
            <div className="ml-2 flex-none font-medium uppercase md:hidden lg:block">
              Gallery
              
            </div>
          </Link>*/}

          <Link href="/contact" className="mr-2 px-8 flex w-full hover:underline underline-offset-2 items-center justify-center md:w-auto lg:mr-6">
            
            <div className="ml-2 flex-none  font-medium uppercase md:hidden lg:block">
              Contact Us
              {/*SITE_NAME*/}
            </div>
          </Link>

          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {/*<div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div>*/}
        <div className="flex justify-end md:w-1/3">
          {/*<Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>*/}
              </div>
      </div>
    </nav>
  );
}