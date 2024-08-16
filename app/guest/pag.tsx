import { UserCircleIcon } from '@heroicons/react/24/outline';
import { auth } from 'app/auth';
import { getGuestbookEntries } from 'app/db/queries';
import { Suspense } from 'react';
import { SignIn, SignOut } from './buttons';
import Form from './form';
import MockForm from './mockForm';


export const metadata = {
  title: 'Guestbook',
  description: 'Sign my guestbook and leave your mark.',
};

export default function GuestbookPage() {
  return (
    <section className='mt-40 flex flex-col'>
      <h1 className="font-medium text-2xl  mb-0 tracking-tighter">
        [reviews.count] Reviews
      </h1>
      <h1 className="font-medium text-2xl  mb-8 tracking-tighter">
        [reviews.starRatings.averageScore]
      </h1>
      
      <Suspense>
        <GuestbookForm />
        <GuestbookEntries />
      </Suspense>
    </section>
  );
}

export async function GuestbookForm() {
  let session = await auth();

  return session?.user ? (
    <>
      <Form />
      <SignOut />
    </>
  ) : (
    <>
    <MockForm />
    <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        please sign in below to leave a review
      </h1>
    <SignIn />
    </>
  );
}

 async function GuestbookEntries() {
  let entries = await getGuestbookEntries();

  if (entries.length === 0) {
    return null;
  }

  return entries.map((entry) => (
    <div key={entry.id} className="flex flex-col space-y-1 mb-4">
      <div className="w-full text-md break-words">
        
        <span className="text-neutral-600 dark:text-neutral-500 mr-1">
          <UserCircleIcon className='h-8 w-8 inline-flex stroke-black' />
          {entry.created_by}:
        </span>
        {entry.body}
      </div>
    </div>
  ));
}