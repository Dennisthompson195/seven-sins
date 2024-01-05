'use client';

import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { Menu } from 'lib/shopify/types';


export default function ContactModal({ menu }: { menu: Menu[] }) {
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
        className=" h-full w-full  uppercase relative     text-black  p-1 transition-colors "
      >
        <h1 className='text-base font-medium text-start items-start w-96'>Contact us</h1>
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
            <div className="fixed inset-56 bg-none" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[100%]"
            enterTo="translate-x-100"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-100"
            leaveTo="translate-x-[100%]"
          >
            <Dialog.Panel className="fixed bottom-0 text-xl  right-0 top-0 flex h-full md:w-1/3 w-full flex-col bg-white pb-6 dark:bg-white">
              <div className="p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon className="h-6" />
                </button>

                
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
                
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
      </div>
    </>
  );
}