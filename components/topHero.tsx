import Image from "next/image"
import Elevate from "./Elevate"

const TopHero = () => {
  return (
    <div className="relative">
      <div>
  <div className=' opacity-90 h-screen relative   lg:top-20 xs:-top-32  justify-center items-center  w-screen    mx-auto  '>
    <Image 
      src='/garnishHero16.png'
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      fill
      alt='jdd'
      className='opacity-95 absolute xs:max-md:object-scale-down sm:max-md:object-cover object-cover   px-0 py-0'
     
      
  />
  </div>
  <div className="lg:block relative hidden">
  <Elevate />
  </div>
  <div className=' opacity-100 h-screen relative air:top-96 air:mt-24   lg:top-20 lg:-mt-20 xs:max-md:-mt-64 xs:-top-56 sm:-top-96 sm:max-md:-mt-96 sm:max-md:bottom-96 tablet:max-laptop:top-96 tablet:max-laptop:mt-96 justify-center items-center  w-screen    mx-auto  '>
    <Image 
      src='/mixHero7.png'
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      fill
      alt='jdd'
      className='opacity-100 absolute sm:max-md:-mt-96 sm:max-md:-top-96 xs:max-sm:object-scale-down sm:object-cover   px-0 py-0'
     
      
  />
  </div>
  </div>
    </div>
  )
}

export default TopHero
