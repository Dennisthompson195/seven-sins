'use client'
import Form from "./form"

const NewMessage = () => {
  const MessageForm = {
    name: '',
    email: '',
    //phoneNumber: '',
    //city: '',
    subject: '',
    message: '',
  }

  return <Form formId="add-pet-form" MessageForm={MessageForm} />
}

export default NewMessage