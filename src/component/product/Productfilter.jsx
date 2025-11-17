import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import Productcard from './Productcard'
import { Commoncontext } from '../context/Context.jsx'
export default function Productfilter({ products, setmobilemenu, sort, setSORT, limit, setLimit }) {

  let { addtocart } = useContext(Commoncontext)
  const [loading, setLoading] = useState(false);



  // scroll event detect
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300;

      if (bottom && !loading) {
        setLoading(true);
        setLimit((prev) => prev + 28); // ✅ increment by 28

        // Prevent multiple triggers
        setTimeout(() => setLoading(false), 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, setLimit]);

  return (
    <>
      <div className=" laptop:basis-[70%]  ">
        <div className='flex pt-6 items-end '>
          <div>
            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
              <span className="sr-only">View grid</span>
              <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
              </svg>
            </button>
            <button type="button" onClick={() => setmobilemenu(true)} className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 smallmob:ml-6 laptop:hidden">
              <span className="sr-only">Filters</span>
              <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex w-[100%] items-baseline justify-end border-b border-gray-200 pt-5 pb-20 ">


          <div className="flex justify-center laptop:gap-5 flex-wrap">
            {
              products.map((v, i) => {
                if (v.category_slug != "vehicle" && v.category_slug != "motorcycle") {
                  return (

                    <Productcard v={v}  key={i} />
                  )
                }

              })
            }

            {/* /<!--col-end-->       */}
          </div>
          <br />
          <br />
          <hr />
        </div>
        {/* Loader indicator */}
        {loading && (
          <div className="text-center py-5 text-gray-500 font-semibold">
            Loading more products...
          </div>
        )}

        {!loading && products.length > 0 && products.length >= limit && (
          <div className="text-center py-5 text-green-600 font-semibold">
            🎉 You’ve reached the end!
          </div>
        )}


      </div>

    </>
  )
}
