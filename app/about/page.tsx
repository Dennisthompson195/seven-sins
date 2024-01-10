import Image from "next/image";

export const runtime = 'edge';

export const metadata = {
  title: 'About',
  description: 'Search for products in the store.'
};

export default async function HomePage() {
  return (
    <div className="h-full w-screen font-serif mb-20">
   
    <h1 className=' mb-14 mt-28 text-2xl font-bold text-center' >About</h1>  
    <section className="w-2/3 mx-auto max-sm:w-5/6  p-6"> {/*border border-black shadow-md rounded-xl */}
    <p className=" text-lg">Inspired by my time living and working at some of finest dining establishments in Las Vegas, Nevada. Seven Sins Cocktail Co. is a labor of love and a child of my passion for mixology and culinary arts.
   Focused on simple formulas and using only all- natural ingredients, my vision is to never use any artficial flavors, colors, or preservatives in my products. The goal of this brand is to make bartending more accessible and approachable to home- bartenders and also to help bars and restaurants provide a better quality of service, while at the same time reducing food waste and labor costs by providing them with better solutions for garnishing their food and drinks.</p>
    </section>

   
    <h1 className=" font-bold text-2xl mb-20 w-2/3 mx-auto text-center  mt-20">Meet The Founder</h1>
    <article className="w-2/3 max-sm:w-5/6 mx-auto mt-10 " >
    
    <div className=" mx-auto ">
    <Image 
      src='/selfieSS.jpg'
      width={150}
      height={150}
      alt='A selfie of the owner'
      className="rounded-full  max-sm:mx-0"
    />
    <h1 className="text-left pt-2 font-medium text-lg max-sm:text-left">Dennis Thompson</h1>
    </div>
    <p className=" text-lg mt-8 font-serif font-medium">Hi I'm Dennis! I'm just a regular guy who can't seem to stop chasing big dreams. Born and raised in Lincoln, Nebraska, I spent appproximately 2 years of my early adult life living in Los Angeles, California to seek out new opportunities, and I found my way into the food and beverage industry where I started as a dishwasher and quickly moved up the ranks in the kitchen. After that, I moved to Las Vegas, Nevada where I continued my journey into the world of culinary arts.</p> <p className="text-lg font-medium indent-8"> My most notable position was held at Vanderpump Cocktail Garden at Caesars Palace for none- other than the world- famous Reality TV star Lisa Vanderpump and her wonderful family, where I spent approximately 3 years in the role before deciding to pursue higher opportunities. I started from the ground again as a part- time dishwasher for an authentic Italian restaurant knowing full- well it was nothing more than a foot in the door. The owner/ executive chef quickly noticed my drive and ambition and within a matter of months of initial hiring, I became the assistant manager of Front of House operations. Eventually though, I grew homesick and decided to find my way back to my roots and my home in Lincoln, Nebraska.</p><p className=" indent-8  text-lg">Coming from humble beginnings, I was always taught to work hard and keep on fighting when the going gets tough. In my early years I struggled with homelessness, starvation, and mental health But it only forced me to become stronger, more disciplined, and more refined. My values of self- suffiency are burnt deeply into my core because of this. My past struggles, along with my work experience and determination to teach myself new skills and constantly reach new heights of personal achievement have driven me to learn all the skills neccessary to build and maintain a business, and with that being said, this business has been built by myself alone. I developed all the products and recipes, and even coded the entire website (application) from scratch using javascript and Next JS with PostgresQl as my database for storing messages and eventually the data for user accounts if this business grows enough to merit that feature. </p>
    <p className="text-lg font-medium indent-8">In my spare time I like to read and learn, and spend my time around loving people, animals, and appreciate the beauty of life and nature. Occasionally I might indulge myself in some netflix or video games but I really love the fulfillment of being productive! I'm a homebody at heart but I sure do miss the night clubs of Los Angeles and Las Vegas, and when I'm bored enough I open up my Digital Audio Workstation(Ableton Live) and make terrible electronic music &#128517; </p>
</article>
    </div>
  );
}