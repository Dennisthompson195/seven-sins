import Image from "next/image"
const MixHero = () => {
  return (
    <div className=' h-screen w-screen relative lg:top-20 xs:-top-60 sm:max-md:top-96   lg:bg-black xs:max-lg:bg-none'>
      <div className='  w-screen h-screen absolute   mx-auto my-auto   '>


<Image 
src='/mixHero7.png'
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
fill
alt='jdd'
className='opacity-95 xs:max-md:object-contain md:object-cover x  px-0 py-0'


/>
 {/*<div className='px-0  xs:top-28 opacity-90'>
   <video autoPlay autoFocus loop preload='auto' muted
    src="/vanderpump-final.mp4" className='h-9/12 relative z-1 w-screen mx-auto -mt-6 mb-0' />
  </div>*/}


</div>
    </div>
  )
}

export default MixHero
