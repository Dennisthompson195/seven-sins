import { Analytics } from '@vercel/analytics/react';
import Footer from 'components/layout/footer';
import LogoheaderTwo from 'components/logoheaderTwo';
import { GeistSans } from 'geist/font';
import { ensureStartsWith } from 'lib/utils';
import { ReactNode, Suspense } from 'react';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      },
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-white pt-4 mx-auto relative w-full max-w-full h-full min-h-max text-black   dark:text-black  "> {/* selection:bg-teal-300  dark:text-black dark:selection:bg-pink-500 dark:selection:text-white */}
      {/*hidden*/}
     
      <div className=' top-0 z-20 ml fixed mx-auto items-center md:inline-flex my-4 md:ml-10 mt-4 mb-10 rounded-sm w-fit'> {/*justify-center */}
       
        <LogoheaderTwo />
      </div>
      
      <Suspense>
        <main>
          {children}
          <Analytics />
        </main>
      </Suspense>
      <div className='w-screen h-fit relative bottom-0'>
        <Footer />
      </div>
      </body>
    </html>
  );
}
