'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { mutate } from 'swr'

const Form = ({ formId, MessageForm, forNewPet = true }: {formId: any, MessageForm: any, forNewPet: any}) => {
  const router = useRouter()
  const contentType = 'application/json'       
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    name: MessageForm.name,
    email: MessageForm.email,
    emailError: MessageForm.emailError,
    PhoneNumber: MessageForm.PhoneNumber,
    city: MessageForm.city,
    subject: MessageForm.subject,                        
    message: MessageForm.message,                                             
  })
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form:[]) => {
    const { id } = router.query

    try {
      const res = await fetch(`./api/messages/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      const { data } = await res.json()

      mutate(`/api/messages/${id}`, data, false) // Update the local data without a revalidation
      router.push('/')
    } catch (error) {
      setMessage('Failed to update pet')
    }
  }

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form: {}) => {
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      router.push('/contactstd/confirmation')
    } catch (error) {
      setMessage('Failed to add pet')
    }
  }

  const handleChange = (e: any) => {
    const target = e.target
    const value =
      target.name === 'placeholder' ? target.checked : target.value
    const name = target.name
    const email = target.email

    setForm({
      ...form,
      [name]: value,
      [email]: value,
    })
  }

  /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {}
    if (!form.name) err.name = 'Name is required'
    if (!form.email) err.email = 'Valid Email is required'

    return err
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      forNewPet ? ((postData(form))) : putData(form)
    } else {
      setErrors({ errs })
    }
  } 

  function emailCheckHandler() {
    if (form.email.trim().length === 0 || !form.email.includes("@" && '.')) {
      setEmailError(true);
    }
    else if (form.email.includes("@" && '.')) {
      setEmailError(false)
    }
  }

  return (
    <>
    <section id="contact"  className='p-6 my-6scroll-mt-10 widescreen:section-min-height tallscreen:section-min-height w-11/12 mx-auto place-content-center justify-center items-center flex'>
    {/*<p className='text-xl bg-blue-300 text-center sm:text-md mb-6 text-slate-900'>
                    Send Us a Message <br className='mt-4'/>
                    
                </p>*/}
      <form id={formId} onSubmit={handleSubmit} className='max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4 lg:w-2/5 md:w-2/3'>
      
      <label htmlFor="name">Name</label>
        <input
          type="text"
          maxLength={50}
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder='First and Last Name'
          className='w-full bg-indigo-100 text-black text 2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-slate-400 dark:text-white dark:bg-slate-800  '
        />
       {/*<label htmlFor="email">Email</label>
        {emailError && (
          <p role="alert" className='inputError'>
          <span>.</span>Please enter a valid email
          </p>
        )}
        <input
          required
          name="email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={emailCheckHandler}
        />*/}
      
<label htmlFor="email">Email{emailError && (
          <p role="alert" className='inputError text-red-600 text-base'>
          <span>*</span>Please enter a valid email
          </p>
        )}</label>
        
        <input
          type="text"
          maxLength={50}
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder='Email Address'
          className='w-full bg-indigo-100 text-black text 2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none dark:text-white dark:bg-slate-800 '
          /*onKeyUp={emailCheckHandler}  
onBlur={emailCheckHandler}   */   
        />
        
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          name="message"
          value={form.message}
          onChange={handleChange}
          cols={30}
          rows={10}
          placeholder='Your message' 
          required 
          className='w-full bg-indigo-100 text-black text 2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-slate-400 dark:text-white dark:bg-slate-800'
          
        />


        <button type="submit" className=' bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-slate-400'>
          Submit
        </button>
      </form>
      </section>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}{"you have an error"}</li>
        ))}
      </div>
    </>
  )
}

export default Form