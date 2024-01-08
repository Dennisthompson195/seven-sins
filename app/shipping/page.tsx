

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <div className="mx-auto w-screen h-full items-center justify-center align-middle max-sm:mb-20">
    <h1 className=' px-12 text-3xl  z-40 mt-32 max-sm:mt-24 max-sm:text-xl max-sm:text-center' >Shipping Policy</h1>  
    <div className="grid grid-flow-col grid-cols-2 max-sm:grid-flow-row max-sm:grid-rows-1 max-sm:mb-6">
    <p className="px-12 mx-auto max-sm:text-sm lg:w-full max-sm:w-screen mt-4 row-start-1 row-end-1 font-normal">Some or all of the food items on this website were manufactured under LB 304 of the Nebraska Pure food act. 
     Foods in this category are considered 'Cottage Foods' because they were manufactured in a home kitchen and are not subject to inspection or regulation by state regulatory authorities and may contain allergens. <br />Many states within the Contiguous United States allow the sale of these goods, interstate included, granted the seller is registered within their state to sell them. However, there are a few states which place heavy restrictions on the sale of these items or disallow them entirely. Because of this, items cannot be sold or shipped to these states, and in most cases checkout will be blocked entirely. However, if for some reason checkout is successful, the shipment will be cancelled and the payment will be refunded.  </p> 
       <div className="max-sm:row-start-2 max-sm:w-screen">
           <h1 className="mx-auto w-1/2 pb-1 mt-6">Restricted States:</h1>
     <ul className="w-1/2 mx-auto  justify-center items-center font-light">
      <li>Alaska</li> 
      <li>California</li>
      <li>Connecticut</li>
      <li>Delaware</li>
      <li>Hawaii</li>
      <li>Michigan</li>
      <li>Minnesota</li>
      <li>Mississippi</li>
      <li>Montana</li>
      <li>Nevada</li>
      <li>New Jersey</li>
      <li>North Dakota</li>
      <li>Oregon</li>
      <li>Vermont</li>
      <li>Washington State</li>
      <li>West Virginia</li>
      <li>Wisconsin</li>
      <li>Wyoming</li>
     </ul>
     </div>
     
    


    </div>
    </div>
  );
}