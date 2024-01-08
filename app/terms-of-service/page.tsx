export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <div className="mx-auto w-screen items-center justify-center align-middle mb-28">
    <h1 className='text-center max-sm:text-xl text-3xl  z-40 mt-28' >Terms Of Service</h1>  
    <p className="px-12 mx-auto lgh:w-1/2 mt-8 font-normal"></p> 
    <ul className="max-sm:text-sm">
        <li>
        <p className=" px-12 mx-auto lg:w-1/2 mb-6">1: Clients shall not place orders for items that cannot be sold within their jurisdiction, as listed within the product description of the specified item and also specified on the shipping policy section of this website. </p>
        </li>
        <li>
        <p className=" px-12 mx-auto lg:w-1/2 mb-6">2: Clients shall not place orders for anyone but themselves, and if it is gifted the recipient must be notified of its origins. No reselling to businesses or restuarants allowed.</p>
        </li>
        <li>
            
    <p className="px-12 mx-auto lg:w-1/2 mb-6">3: Clients shall not conduct fraudulent transactions</p>
    </li>
    <li>
        <p className=" px-12 mx-auto lg:w-1/2 mb-6">4: Clients shall not resell any of the merchandise obtained from this website for any reason.</p>
        </li>
    <li>
        <p className=" px-12 mx-auto lg:w-1/2 mb-6">5: Clients shall not access restricted areas of the website or any restricted data without prior authorization from 'The Company'.</p>
        </li>
        <li>
        <p className=" px-12 mx-auto lg:w-1/2 mb-6">6: Clients shall not transmit nor inject any malicious programs into the codebase of this application </p>
        </li>
        
        <li></li>
    </ul>
    
    </div>
  );
}