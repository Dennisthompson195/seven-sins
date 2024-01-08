import Image from "next/image"
import Elevate from "./Elevate"
import ElevateTwo from "./ElevateTwo"

const TopHeroTwo = () => {
  return (
    <>
    <div className="h-screen relative">
    <div className="h-screen relative lg:mt-20 mt-20 max-md:-mb-6  ">
      <div>
  <div className='max-lg:hidden block opacity-95
   h-screen   '>
    <Image 
      src='/topHeroFinalG13.png'
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      fill
      alt='jdd'
      className='opacity-95 object-cover  px-0 py-0'
     
      
  />
  </div>
  <div className="lg:block absolute  bottom-0 hidden">
  <Elevate />
  </div>
 

  </div>
    </div>
    
         {/*MOBILE VIEW HERO SECTION*/}
    <div className="max-lg:block hidden w-screen h-screen absolute  -top-6 lg:mt-20 mt-0 md:-mb-6  ">
      <div>
  <div className=' h-screen  opacity-90 w-screen  '>
    <Image 
      src='/topHeroFinalLG14.png'
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      fill
      alt='jdd'
      className='opacity-95 h-screen object-cover    px-0 py-0'
     
      
  />
  
  </div>
  
  <div className="lg:block relative -top-8 hidden">
  <Elevate />
  </div>

  </div>
 <div className="xs:block lg:hidden absolute bottom-0  ">
     <ElevateTwo />
   </div> 
    </div>
    
    </div>
     
   </>
  )
}

export default TopHeroTwo