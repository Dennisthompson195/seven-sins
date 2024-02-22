import Image from "next/image"
import Link from "next/link"
import Elevate from "./Elevate"

const MixHeroTwo = () => {
  return (
<div className="h-screen  lg:mt-20 relative ">
      <div className="relative top-1 lg:-top-0">
  <div className='max-sm:hidden relative -top-14 lg:-top-20  block opacity-90 h-screen   '>
    <Image 
      src='/mixHeroLG14.png'
      fill
      alt='jdd'
      className='opacity-95    max-md:object-fill object-cover xs:max-md:mt-6 pt-1 lg:-mt-1 md:max-lg:mt-6   px-0 py-0'
     
      
  />
  <Link href='/shop'>
 <button className="max-sm:hidden block absolute bottom-20 left-1/2 -translate-x-1/2 mx-auto  border-solid border-neutral-200 border hover:border-white hover:bg-white hover:border-2 shadow-sm bg-neutral-100 bg-opacity-95 text-black font-medium text-sm rounded-md p-3 mt-3 w-2/5 lg:w-1/4">EXPLORE OUR COLLECTION</button>
 </Link>
  </div>
  <div className="lg:block  hidden">

  </div>

  </div>

             {/*MOBILE VIEW HERO SECTION*/}
  <div className="max-sm:block hidden w-screen h-[75vh] absolute -top-6 lg:mt-20 mt-0 xs:max-lg:-mb-6  ">
      <div>
  <div className='   opacity-90 w-screen  '>
    <Image 
      src='/mixHeroLG15.png'
      object-fit='fill'
      fill
      alt='jdd'
      className='opacity-95  px-0 py-0'
     
      
  />
  <Link href='/shop'>
 <button className="lg:hidden absolute bottom-12 left-1/2 -translate-x-1/2 mx-auto  border-solid border-neutral-200 border hover:border-white hover:border-2 shadow-sm bg-neutral-800 bg-opacity-40 text-white font-normal text-sm rounded-full p-3 mt-3 w-40">SHOP NOW</button>
 </Link>
  </div>
  <div className="lg:block relative -top-8 hidden">
  <Elevate />
  </div>
  

  </div>
  
    </div>
    
    </div>
  )
}

export default MixHeroTwo