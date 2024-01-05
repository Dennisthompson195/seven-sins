import Link from "next/link"

const Elevate = () => {
  return (
    <div className='relative top-0 '>
    {/*DO NOT CHANGE HEIGHT OR IT WILL THROW OFF ALIGNMENT ON DIF PICTURES*/}
<div className='lg:w-screen xs:w-11/12 h-fit   lg:bg-opacity-75 xs:max-md:bg-opacity-100 top-0   md:text-2xl xs:text-base xs:py-5 md:font-normal xs:font-medium lg:bg-black  lg:text-white xs:bg-neutral-100 xs:opacity-80 xs:shadow-lg xs:rounded-xl xs:text-black border-2 border-solid border-black lg:border-none  text-center mx-auto lg:py-6'>
 <h1 className='w-4/5 xs:w-11/12 xs:px-2 sm:max-md:px-6 lg:font-semibold xs:font-bold opacity-90 z-50   mx-auto text-center'>Elevate your cocktail experience with our artisan crafted garnishes, syrups, mixers, and more! <br className='xs:max-md:hidden'/>Always made in small batches with no artificial ingredients or preservatives, we strive to <br className='xs:max-md:hidden'/> deliver the best products in the industry and to provide individuals and businesses alike with <br className='xs:max-md:hidden'/> the top- quality ingredients they need to wow their guests, and outshine their competitors.</h1>
 <Link href='/shop'>
 <button className="lg:hidden  border-solid border-black border-2 hover:bg-blue-600 shadow-sm bg-neutral-200 text-black font-bold text-sm rounded-lg p-3 mt-3">SHOP NOW</button>
 </Link>
</div>
</div>
  )
}

export default Elevate
