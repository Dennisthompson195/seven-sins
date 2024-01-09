import Image from "next/image"
import Link from "next/link"

const ProductlineTwo = () => {
  return (
    <div className="mb-28 lg:mt-10 xs:-mt-48 sm:mt-2 mx-auto w-screen items-center justify-center">
      <h1 className='text-center text-black font-medium relative bottom-0 text-base'>OUR PRODUCTS</h1>
    <hr className=' bg-black  text-black mx-auto justify-center items-center text-center border-neutral-400 rounded-3xl opacity-80 w-8 mt-2 border-y-2  font-extrabold'/>
          <section className=' h-full  p-6 max-sm:-mt-4 font-semibold 
           grid max-w-screen -gap-x-0 gap-y-8  mx-auto items-center text-center justify-center mt-6 mb-12 md:grid-cols-4 grid-rows-3 :grid-cols-2 xs:max-md:grid-cols-2  lg:w-2/3'>
          <div className='block relative lg:h-56 lg:w-56 xs:w-40 xs:h-40 xl:border xl:border-solid xl:border-neutral-200 xl:hover:border-neutral-300 xs:max-xl:border-none 
               place-content-center justify-center mx-auto text-center'><Link href="/product/cara-cara-orange"><Image
             src='/Cara Cara.png'
             width={200}
             height={200}
             alt='logo'
             className=' block mt-2 relative -mb-6 mx-auto items-center justify-center'
           /></Link><h2 className="relative">Cara Cara Orange</h2></div>

             <div className='block relative lg:h-56 lg:w-56 xs:w-40 xs:h-40 mx-auto xl:border xl:border-solid xl:border-neutral-200 xl:hover:border-neutral-300 xs:max-xl:border-none 
              place-content-center justify-center text-center'><Link
             href='/product/orange-chips'> <Image
             src='/Naval 1.png'
             width={200}
             height={200}
             alt='logo'
             className='block relative mt-2 -mb-6 mx-auto items-center justify-center '
           /></Link><h2 className="relative">Naval Orange</h2></div>

             <div className='block relative lg:h-56 lg:w-56 mx-auto xs:w-40 xs:h-40 xl:border xl:border-solid xl:border-neutral-200 xl:hover:border-neutral-300 xs:max-xl:border-none
             place-content-center justify-center text-center'><Link href="/product/anjou-pear"><Image
             src='/Pear 1.png'
             width={200}
             height={200}
             alt='logo'
             className=' block relative mt-2 -mb-6 mx-auto items-center justify-center'
           /></Link><h2 className="relative">Anjou Pear</h2></div>

             <div className='block relative lg:h-56 lg:w-56 mx-auto xs:w-40 xs:h-40 xl:border xl:border-solid xl:border-neutral-200 xl:hover:border-neutral-300 xs:max-xl:border-none
               place-content-center z-10 justify-center text-center'><Link href="/product/apple"><Image
             src='/Apple 1.png'
             width={200}
             height={200}
             alt='logo'
             className=' block mt-2 relative -mb-6 mx-auto items-center justify-center'
           /></Link><h2 className=" relative z-50 text-black">Empire Apple</h2></div>
            
           
 
            <div className='block relative lg:h-56 lg:w-56 mx-auto mt-0 xs:-mt-8 xs:w-40 xs:h-40 xl:border xl:border-solid xl:border-neutral-200 xl:hover:border-neutral-300 xs:max-xl:border-none
               place-content-center justify-center text-center'><Link href="/product/lime"><Image
             src='/Lime 2.png'
             width={200}
             height={200}
             alt='logo'
             className='relative block mt-2 -mb-6 mx-auto items-center justify-center'
           /></Link><h2 className="relative">Lime</h2></div>

<div className='block relative lg:h-56 lg:w-56 mx-auto mt-0 xs:-mt-8 xs:w-40 xs:h-40 xl:border xl:border-solid xl:border-neutral-200 xl:hover:border-neutral-300 xs:max-xl:border-none
               place-content-center justify-center text-center'><Link href="/product/pineapple"><Image
             src='/Pineapple 4.png'
             width={200}
             height={200}
             alt='logo'
             className=' block mt-2 relative -mb-6 mx-auto items-center justify-center'
           /></Link><h2 className=" relative  items-center mx-auto justify-center  text-center ">Pineapple</h2></div>
           
           <div className='block relative lg:h-56 lg:w-56 mx-auto mt-0 xs:-mt-8 xs:w-40 xs:h-40 xl:border xl:border-solid xl:border-neutral-200 xl:hover:border-neutral-300 xs:max-xl:border-none
               place-content-center justify-center text-center'><Link href="/product/blood-orange-cocktail-Syrup"><Image
             src='/Blood-Orange-Syrup.png'
             width={200}
             height={200}
             alt='logo'
             className=' block mt-3 relative -mb-6 mx-auto items-center justify-center'
           /></Link><h2 className=" relative  items-center mx-auto justify-center top-1  text-center ">Blood Orange Syrup</h2></div>
            
            <div className='block relative lg:h-56 lg:w-56 mx-auto mt-0 xs:-mt-8 xs:w-40 xs:h-40 xl:border xl:border-solid xl:border-neutral-200 xl:hover:border-neutral-300 xs:max-xl:border-none
               place-content-center justify-center text-center'><Link href="/product/cara-cara-brulee"><Image
             src='/CC-Brulee2.png'
             width={200}
             height={200}
             alt='logo'
             className=' block mt-2 relative -mb-6 mx-auto items-center justify-center'
           /></Link><h2 className=" relative  items-center mx-auto justify-center  text-center ">Cara Cara- Brulee</h2></div>

            </section>
    </div>
  )
}

export default ProductlineTwo