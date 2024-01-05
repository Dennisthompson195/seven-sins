export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <div className="mx-auto pl-6 w-screen items-center justify-center align-middle mb-28">
    <h1 className=' text-3xl max-sm:text-xl  z-40 mt-28 mb-6 text-center' >Frequently Asked Questions</h1>  
    
    <ul className="max-sm:text-sm"> 
        <li>
            <h1 className=" px-12 mx-auto lg:w-1/2 mb-1">Q:What is the shelf-life of your products?</h1>
            <h2 className="mt-0  px-12 mx-auto lg:w-1/2 mb-2">A:The shelf-life of our products can vary but as general rule of thumb:</h2>
            <p className=" px-16 mx-auto lg:w-1/2 mb-0">Syrups: up to 2 years, once opened consume within 6 months.</p>
            <p className=" px-16 mx-auto lg:w-1/2 mb-0">Mixers: one year, once opened consume within 4-6 months.</p>
            <p className=" px-16 mx-auto lg:w-1/2 mb-0">Fruit Chips: 1-2 years. for best results store in an airtight container away from direct sunlight and extreme temperatures.</p>
            <p>Q</p>
            <p className=" px-16 mx-auto lg:w-1/2 mb-0">Sugar Cubes: 1 year. Once opened consume within 6 months.</p>
        </li>
        <li></li>
        <li></li>
    </ul>

    </div>
  );
}