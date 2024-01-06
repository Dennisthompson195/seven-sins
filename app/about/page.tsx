
export const runtime = 'edge';

export const metadata = {
  title: 'About',
  description: 'Search for products in the store.'
};

export default async function HomePage() {
  return (
    <>

    <h1 className='text-center mb-48 -mt-28' >About Us</h1>  
    <p>Inspired by my time living and working at some of finest establishments in Las Vegas, Nevada. Seven Sins Cocktail Co. is a labor of love and a child of my passion for mixology and culinary arts.</p>


    </>
  );
}