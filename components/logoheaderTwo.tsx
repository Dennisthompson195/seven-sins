import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import Cart from "./cart"
import OpenCart from "./cart/open-cart"
import Navbar from "./layout/navbar"
import Navbar2 from "./layout/navbar/nav2"

const LogoheaderTwo = () => {
  return (
    <Suspense>
    <div className="w-screen -top-6 relative h-20  z-30 pt-9 lg:px-6 md:-ml-10 mt-2 mb-0 bg-white">
          <div className='mr-1 w-screen h-10 max-lg:mx-auto  '>
          
          <Link href='/'> <Image
              src='/sscc2.png'
              width={200}
              height={200}
              alt='logo'
              className=' -top-10 relative h-20  max-sm:-top-11 z-50  w-fit max-sm:w-40   lg:-left-1  max-md:pl-2 max-md:-top-10 max-md:pb-2  max-lg:mx-auto  mt-3 mb-2 pb-4 '
            />
            </Link>

            </div>
            <div className="z-20  hidden lg:block align-middle -mt-20 pb-0 justify-center place-content-center w-screen text-center  mx-auto">
      <Navbar />
      </div>

            
            {/*<div className=' mx-auto left-1/4 pr-32 -top-1  w-1/3 my-auto'>
            <div className="h-10 w-10   absolute right-24 top-9 xs:max-sm:right-24 xs:max-sm:top-4 border-solid border-2 border-black rounded-md px-1 py-1 text-black xs:max-xl:hidden xl:block ">
            <MagnifyingGlassIcon />
            </div>
          
            
  </div>*/}
            <div className=' z-50    mr-5 mt-1 h-9 w-9 pr-12  px-1 py-1 lg:hidden   opacity-90'>
    <div className='absolute top-3 -left-4 '>
      <Navbar2 />
      </div>
      
   
  </div>
            <div className="  h-10  w-10 xs:max-sm:h-6 xs:max-sm:w-6  text-black">
              {/*<div className="h-10 w-10  absolute right-20 xs:max-sm:right-14 top-6 xs:max-sm:top-4 mt-0 border-2 px-1 py-1 rounded-md border-black ">
              <UserIcon />
  </div>*/}
            </div>
            <div >
            <Suspense fallback={<OpenCart />}>
              
            <Cart />
            
          </Suspense>
          </div>

        </div>  
        </Suspense>

  )
}

export default LogoheaderTwo
