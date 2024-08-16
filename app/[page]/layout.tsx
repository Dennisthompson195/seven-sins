
import { Suspense } from 'react';
export const runtime = 'edge';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="w-screen h-full ">
        <div className="mx-8 max-w-2xl py-20 sm:mx-auto">
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </Suspense>
  );
} 
