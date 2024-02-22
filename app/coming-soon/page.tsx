import Link from "next/link"
 const Contact = () => {
    return (
      <div>
        <h1 className="text-black text-xl mt-40 text-center w-screen font-bold  mb-40">This product is not quite ready, please <span className="underline underline-offset-2 text-2xl text-blue-600"><Link href="/contact">contact us</Link></span> to be one of the first to know when it's ready! &#128512; </h1>
      </div>  
    )
}

export default Contact