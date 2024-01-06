
export const runtime = 'edge';

export const metadata = {
  title: 'About',
  description: 'Search for products in the store.'
};

export default async function HomePage() {
  return (
    <div className="h-screen">

    <h1 className='text-center mb-48 mt-28' >About Us</h1>  
    <p className=" text-center">Inspired by my time living and working at some of finest dining establishments in Las Vegas, Nevada. <br /> Seven Sins Cocktail Co. is a labor of love and a child of my passion for mixology and culinary arts.</p>


    </div>
  );
}