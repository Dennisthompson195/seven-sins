
export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <div className="mx-auto h-[75vh] w-screen items-center justify-center align-middle mb-36">
    <h1 className='text-center text-3xl max-sm:text-xl  z-40 mt-28' >Return Policy</h1>  <p className="indent-6 max-sm:text-sm max-sm:px-16 px-12 mx-auto lg:w-1/2 mb-12 mt-2">For health reasons, food items cannot be returned. However, it is our priority to correct whatever issues you may face with our products, whether that be a direct replacement or a substition of an item of less or equal value. 
     If the item you ordered is an accessory rather than a food item, returns will be accepted within the first 30 days of purchase but must be returned in original packaging and in good condition in order to qualify for a full refund. </p>

    </div>
  );
}
