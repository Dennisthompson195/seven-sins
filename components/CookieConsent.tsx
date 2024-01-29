'use client'

import { hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-40 w-screen">
      <div className="fixed lg:top-24 max-lg:bottom-0 left-0 lg:h-1/3 max-lg:h-2/5 lg:w-2/5 max-lg:w-11/12  mx-auto right-0  grid-flow-row grid-rows-3 grid items-center justify-between  px-4 py-8 bg-gray-100">
      {/*<button className="absolute right-0 row-start-1 lg:-top-6 max-lg:-top-12 py-2 px-8 max-lg:mt-6 rounded w-fit mx-auto  text-black  " onClick={() => acceptCookie()}>
      <XMarkIcon className="h-5 w-5 relative" />
        </button>*/}
        
        <h1 className="row-start-1 relative left-6 lg:-top-4 max-lg:-top-4 font-medium "> We Use Cookies </h1>
        <span className="text-dark text-sm font-light  row-start-2 relative lg:-top-3 max-lg:-top-2  left-6 w-5/6">
       We use cookies and similar technologies to enhance site navigation, analyze site usage, and assist our marketing efforts. By continuing to use this website, you agree to these conditions of use.

        {/*For more information about these technologies and their use on this website, please consult our Cookie Policy.*/}
        </span>
        <button className="bg-neutral-800 relative lg:top-4 max-lg:top-2 py-2 px-8 max-lg:mt-6 rounded w-1/3 mx-auto row-start-3 text-white" onClick={() => acceptCookie()}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;