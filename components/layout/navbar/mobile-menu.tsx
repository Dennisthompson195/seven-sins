'use client';

import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, Suspense, useEffect, useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Menu } from 'lib/shopify/types';
import Search from './search';

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
    <div>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex  ml-2  items-center justify-center rounded-md  border-none text-black border-2 p-1 transition-colors dark:border-neutral-700 "
      >
        <Bars3Icon className="h-[30px] w-[30px] pt-1 z-50" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-56 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 text-xl left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-white">
              <div className="p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon className="h-6" />
                </button>

                <div className="mb-4 w-full">
                  <Suspense>
                    <Search />
                  </Suspense>
                </div>
                {menu.length ? (
                  <ul className="flex w-full flex-col">
                    {menu.map((item: Menu) => (
                      <li
                        className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                        key={item.title}
                      >
                        <Link href={item.path} onClick={closeMobileMenu}>
                          {item.title}
                        </Link>
                        <Link
                          href='/home'
                        ></Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <Link
                  href='/'
                >
                <h1 className='pl-6 py-4 hover:text-blue-800'>Home</h1>
                
                </Link>
                <hr className=' bg-black text-black border-black opacity-90 min-w-fit ml-4 mr-2 font-extrabold'/>

                <Link
                  href='/about'
                >
                <h1 className='pl-6 py-4 hover:text-blue-800' >About</h1>
                </Link>
                <hr className=' bg-black text-black border-black opacity-90 min-w-fit ml-4 mr-2 font-extrabold'/>

                <Link
                  href='/shop'
                >
                <h1 className='pl-6 py-4 hover:text-blue-800'>Shop</h1>
                </Link>
                <hr className=' bg-black text-black border-black opacity-90 min-w-fit ml-4 mr-2 font-extrabold'/>
                <Link
                  href='/blog'
                >
                <h1 className='pl-6 py-4 hover:text-blue-800'>Blog</h1>
                </Link>
                    <hr className=' bg-black text-black border-black opacity-90 min-w-fit ml-4 mr-2 font-extrabold'/>

                {/*<Link
                  href='/gallery'
                >
                <h1 className='pl-6 py-4 hover:text-blue-800'>Gallery</h1>
                </Link>
                <hr className=' bg-black text-black border-black opacity-90 min-w-fit ml-4 mr-2 font-extrabold'/>
                    */}
                <Link
                  href='/contact'
                >
                <h1 className='pl-6 py-4 hover:text-blue-800'>Contact Us</h1>
                </Link>
                <hr className=' bg-black text-black border-black opacity-90 min-w-fit ml-4 mr-2 font-extrabold'/>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
      </div>
    </>
  );
}
