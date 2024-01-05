
export const runtime = 'edge';

export const metadata = {
  title: 'Contact',
  description: 'Search for products in the store.'
};

export default async function HomePage() {
  return (
    <div className="h-fit">
      <section className="relative top-40 mx-auto text-center">
          <h1 className="md:text-base max-md:text-sm uppercase mb-24 w-screen px-8">This page is currently under construction to feature a secure direct messaging platform. <br /> in the meantime, we have decided to display our contact information directly to the public.<br /> We thank you for your patience and understanding as we grow into our new business! &#128513;</h1>
        </section>
        <h1>duck</h1>
    <div className="h-fit flex flex-row w-screen px-12 text-black relative top-40 align-middle">
      <div className="  mx-auto align-middle place-items-center justify-center ">
        
      <h1 className="text-black ">Contact Us</h1>
      <h2 className="text-black   px-4">Email: support@sevensinscocktails.com</h2>
      <h2 className="text-black top-48 px-4">Phone: +1(402) 480-3134</h2>
      </div>
     
      </div>
      <div className="h-fit flex flex-row w-screen px-12 text-black relative top-40 mb-60 align-middle">
      <div className=" top-0 mx-auto align-middle justify-center items-center ">
      <h1 className="mb-0 mt-4">Mailing Address:</h1>
      <p className="px-4">1830 n 58th st<br/> Lincoln, Nebraska<br/> 68505-1112</p>
      </div>
      </div>
      
  </div>
  );
}
