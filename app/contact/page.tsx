import NewMessage from "components/newMessage";

export const runtime = 'edge';


 const Contact = () => {
    return (
      <div>
        <h1 className="text-black text-3xl mt-20 text-center w-screen font-bold">Contact Us</h1>
        <div className="h-full mt-6 w-screen mx-auto">
          <NewMessage />
        </div>
        <p className="text-sm text-red-700 text-center">*please do not send sensitive information*</p>
      </div>  
    )
}

export default Contact