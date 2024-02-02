'use client'
import { useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { saveGuestbookEntry } from '../db/actions';

export default function MockForm() {
    const formRef = useRef<HTMLFormElement>(null);
  
    return (
      <form
        className="relative max-w-[500px]"
        ref={formRef}
        action={async (formData) => {
          await saveGuestbookEntry(formData);
          formRef.current?.reset();
        }}
        onClick={() => Restricted()}
      >
        <textarea
          aria-label="Your message"
          placeholder="Your message..."
          name="entry"
          type="text"
          rows={4}
          required
          disabled
          className="pl-4 pr-32 py-2 mt-1 hover:disabled:cursor-not-allowed focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-600 border-solid border-2 rounded-md bg-gray-100 text-neutral-900 "
       />
        <SubmitButton />
      </form>
    );
  }

  
  function SubmitButton() {
    const { pending } = useFormStatus();
  
    return (
      <button
        className="flex items-center hover:disabled:cursor-not-allowed justify-center absolute right-1 bottom-1 px-2 py-1 font-medium h-8 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded w-16"
        disabled
        type="submit"
      >
        Submit
      </button>
    );
  }