'use client';
import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';




export function SignOut() {
  
  return (
    <>
    <button
      className="text-xs text-neutral-700 dark:text-neutral-600 mt-2 mb-6"
      onClick={() => signOut()}
    >
      Sign out
    </button>
    </>
  );
}

export function SignIn() {
  return (
    <div className='flex flex-row'>
    <button
      className="px-3 py-2 border h-8 w-fit border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 mb-8"
      onClick={() => signIn('google', {scroll: false})}
    >
      <img alt="GitHub logo" src="/google.png" width="22" height="22" />
      {/*<div className="ml-3">Sign in with Google</div>*/}
    </button>
    <button
      className="px-3 py-2 border h-8 w-fit  border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 mb-8"
      onClick={() => signIn('github', {scroll: false})} 
    >
      <img alt="GitHub logo" src="/github-mark2.png" width="22" height="22" />
      {/*<div className="ml-3">Sign in with Github</div>*/}
    </button>
    <button
      className="px-3 py-2 border h-8 w-fit  border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 mb-8"
      onClick={() => signIn('github', {scroll: false})} 
    >
      <img alt="GitHub logo" src="/favicon.png" width="28" height="28" />
      {/*<div className="ml-3">Sign in with Github</div>*/}
    </button>
    <p className='relative bottom-4 left-2 '>or</p>
    <Link href='/newUser' className='relative top-2 left-4'>Create account</Link>
    </div>
  );
}