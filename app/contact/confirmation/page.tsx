import Link from "next/link";


const Confirmation = () => {
  return (
    <div className="h-screen flex flex-col -mt-20 text-center justify-center items-center align-middle">
      <h1>Your message has been received and will be reviewed by our team shortly. <br />
        Please allow 1 to 3 business days to receive an adequate response.
      </h1>
      <Link href='/' className="text-blue-700 mt-6 text-xl" >Back to Home</Link>
    </div>
  )
}

export default Confirmation
