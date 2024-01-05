import Image from "next/image";

export const runtime = 'edge';

export const metadata = {
  title: 'About',
  description: 'Search for products in the store.'
};

export default async function HomePage() {
  return (
    <>
    <div className="h-screen  lg:mt-20 relative ">
      <div className="relative top-1 lg:-top-0">
  <div className='max-sm:hidden relative -top-14 lg:top-10  block opacity-90 lg:h-[40vh] h-screen w-9/12   '>
    <Image 
      src='/240_F_405340621_CMQoDfL19FU9vYJkdZDyFsT5mg1buJox.jpg'
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      fill
      alt='jdd'
      className='opacity-95   xs:max-md:object-fill sm:max-md:object-fill object-cover xs:max-md:mt-6 pt-1 lg:-mt-1 md:max-lg:mt-6   px-0 py-0'
     
      
  />
    </div>
      </div>
      </div>
    <h1 className='text-center mb-48 -mt-28' >About Us</h1>  
    <p>Inspired by my time living and working at some of finest establishments in Las Vegas, Nevada. Seven Sins Cocktail Co. is a labor of love and a child of my passion for mixology and culinary arts.</p>

    


       

    </>
  );
}