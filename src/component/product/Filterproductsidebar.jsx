import React, { useState } from 'react'

export default function Filterproductsidebar({
  Categories,
  brand,
  selectedCategories,
  setSelectedCategories,
  setSelectedBrands,
  selectedBrands,
  setSelectedSort,
  selectedSort,
  setrating,
  mobilemenu,
  setmobilemenu }) {


  let [opencat, setopencat] = useState(true);

  let [openbrand, setopenbrand] = useState(true);

  let [opensort, setopensort] = useState(true);

  let [openrating, setopenrating] = useState(true)


  // GetBrandSlug is a function that store a slug of brand------------------------------------------------------------>>>>>
  let GetBrandSlug = (slug) => {
    if (selectedBrands.includes(slug)) {
      setSelectedBrands(selectedBrands.filter(v => v !== slug));
    } else {
      setSelectedBrands([...selectedBrands, slug]);
    }
  };



  // GetCategorySlug is a function that store a slug of product------------------------------------------------------------>>>>>
  let GetCategorySlug = (slug) => {
    if (selectedCategories.includes(slug)) {
      setSelectedCategories(selectedCategories.filter(v => v !== slug));
    } else {
      setSelectedCategories([...selectedCategories, slug]);
    }
  };








  return (
    <>

      {/* <!--
      Mobile filter dialog

    --> */}
      <div className={`relative  ${(mobilemenu == true) ? " z-[9999] " : "hidden"} inset-0 ease-in-out  duration-500`} role="dialog" aria-modal="true">

        <div className={`fixed ${(mobilemenu == true) ? 'opacity-100' : 'opacity-0'} inset-0 ease-in-out delay-1000 duration-500  bg-gray-500/75 transition-opacity`} aria-hidden="true"></div>

        <div className="fixed inset-0 z-40 flex">

          <div className={`relative top-0 transform transition delay-1000 ease-in-out duration-500  ${mobilemenu ? 'translate-x-0 ' : 'translate-x-full'} p-2 rounded-l-lg ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl`}>
            <div className="flex items-center justify-between -">
              <h2 className=" text-[25px] font-medium text-gray-900">Filters</h2>
              <button type="button" onClick={() => setmobilemenu(false)} className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                {/* <span className="sr-only">Close menu</span> */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* <!-- Filters --> */}
            <form className="">


              <div className="border-b  border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => setopensort(!opensort)} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                    <span className="font-medium text-[19px] text-gray-900">Sort</span>
                    <span className="ml-6 flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        opensort
                          ?
                          <svg className="h-6 text-[19px]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-6 text-[19px]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${opensort ? 'hidden' : ''}`} id="filter-section-0">
                  <div className="space-y-4">

                    <div className="flex items-center">
                      <input
                        id="sort-1"
                        type="radio"
                        name="sort"
                        value="1"
                        onChange={() => setSelectedSort("1")}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="sort-1" className="ml-3 text-sm text-gray-600 cursor-pointer">
                        Ascending
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="sort-2"
                        type="radio"
                        name="sort"
                        onChange={() => setSelectedSort("2")}
                        value="2"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="sort-2" className="ml-3 text-sm text-gray-600 cursor-pointer">
                        Descending
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="sort-3"
                        type="radio"
                        onChange={() => setSelectedSort("3")}
                        name="sort"
                        value="3"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="sort-3" className="ml-3 text-sm text-gray-600 cursor-pointer">
                        Price Low to High
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="sort-4"
                        type="radio"
                        name="sort"
                        value="4"
                        onChange={() => setSelectedSort("4")}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="sort-4" className="ml-3 text-sm text-gray-600 cursor-pointer">
                        Price High to Low
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="sort-5"
                        type="radio"
                        name="sort"
                        onChange={() => setSelectedSort("5")}
                        value="5"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="sort-5" className="ml-3 text-sm text-gray-600 cursor-pointer">
                        Discounted Price Low to High
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="sort-6"
                        type="radio"
                        name="sort"
                        value="6"
                        onChange={() => setSelectedSort("6")}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="sort-6" className="ml-3 text-sm text-gray-600 cursor-pointer">
                        Discounted Price High to Low
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="sort-7"
                        onChange={() => setSelectedSort("7")}
                        type="radio"
                        name="sort"
                        value="7"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="sort-7" className="ml-3 text-sm text-gray-600 cursor-pointer">
                        Rating Low to High
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="sort-8"
                        type="radio"
                        name="sort"
                        onChange={() => setSelectedSort("8")}
                        value="8"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="sort-8" className="ml-3 text-sm text-gray-600 cursor-pointer">
                        Rating High to Low
                      </label>
                    </div>

                  </div>
                </div>


              </div>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => setopencat(!opencat)} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                    <span className="font-medium text-[19px]   text-gray-900">Categories</span>
                    <span className="ml-6    flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        opencat
                          ?
                          <svg className=" h-6  text-[19px] " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }


                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${opencat ? 'hidden' : ''}`} id="filter-section-0">
                  <div className="space-y-4">
                    {Categories.map((v, i) => {
                      if (v.slug !== "motorcycle" && v.slug !== "vehicle") {
                        return (
                          <div className="flex items-center" key={i}>
                            <input
                              type="checkbox"
                              name="categories"
                              id={`category-${v.slug}`}
                              onChange={() => GetCategorySlug(v.slug)} // 👈 yahan change karo
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`category-${v.slug}`}
                              className="ml-3 text-sm text-gray-600 cursor-pointer" // 👈 cursor-pointer add karo
                            >
                              {v.name}
                            </label>
                          </div>
                        );
                      }
                    })}


                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => setopenbrand(!openbrand)} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                    <span className="font-medium text-[19px]   text-gray-900">Brands</span>
                    <span className="ml-6 flex items-center">
                      {
                        openbrand
                          ?
                          <svg className="h-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :
                          <svg className="h-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}

                      {/* <!-- Collapse icon, show/hide based on section open state. -->// */}

                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${openbrand ? 'hidden' : ''}`} id="filter-section-1">
                  <div className="space-y-4">
                    {
                      brand.map((v, i) => {
                        return (
                          <div className="flex items-center" key={i}>
                            <input onClick={() => GetBrandSlug(v.slug)} id={`brand-${v.slug}`} name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor={`brand-${v.slug}`} className="ml-3 text-sm text-gray-600">{v.slug}</label>
                          </div>
                        )
                      })
                    }


                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => setopenrating(!openrating)} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                    <span className="font-medium text-[19px] text-gray-900">Rating</span>
                    <span className="ml-6 flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        openrating
                          ?
                          <svg className="h-6 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-6 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${openrating ? 'hidden' : ''}`} id="filter-section-2">
                  <div className="space-y-4">

                    <div className="flex items-center">
                      <input
                        id="filter-size-0"
                        name="rating"
                        value="4"
                        type="checkbox"
                        onChange={(e) => setrating(e.target.value)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="filter-size-0"
                        className="ml-3 text-sm text-gray-600 cursor-pointer"
                      >
                        4★ & above
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="filter-size-1"
                        name="rating"
                        value="3"
                        type="checkbox"
                        onChange={(e) => setrating(e.target.value)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="filter-size-1"
                        className="ml-3 text-sm text-gray-600 cursor-pointer"
                      >
                        3★ & above
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="filter-size-2"
                        name="rating"
                        value="2"
                        type="checkbox"
                        onChange={(e) => setrating(e.target.value)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="filter-size-2"
                        className="ml-3 text-sm text-gray-600 cursor-pointer"
                      >
                        2★ & above
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="filter-size-3"
                        name="rating"
                        value="1"
                        type="checkbox"
                        onChange={(e) => setrating(e.target.value)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="filter-size-3"
                        className="ml-3 text-sm text-gray-600 cursor-pointer"
                      >
                        1★ & above
                      </label>
                    </div>

                  </div>
                </div>

              </div>

            </form>
          </div>
        </div>
      </div>


      {/* //----------------DESKTOP SIDE BAR ------------------------------------------------------------------->>>> */}
      <main className=" basis-[25%]  hidden lg:block ">


        <section aria-labelledby="products-heading" className="p-2  border border-[2px ] basis-[30%] pt-6">
          {/* <h2 id="products-heading" className="sr-only">Products</h2> */}

          <div className=" ">
            {/* <!-- Filters --> */}
            <form className="hidden lg:block">
              <h3 className="text-[25px]">Filter</h3>

              <div className="border-b  border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => setopensort(!opensort)} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                    <span className="font-medium text-[19px] text-gray-900">Sort</span>
                    <span className="ml-6 flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        opensort
                          ?
                          <svg className="h-6 text-[19px]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-6 text-[19px]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${opensort ? 'hidden' : ''}`} id="filter-section-0">
                  <div className="space-y-4">

                    <div className="flex items-center">
                      <input
                        id="sort-1"
                        name="sort"
                        value="1"
                        checked={selectedSort === "1"}
                        onChange={() => setSelectedSort("1")}
                        type="radio"
                        className="h-4 w-4"
                      />
                      <label htmlFor="sort-1" className="ml-3 text-sm text-gray-600">Ascending</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="sort-2"
                        name="sort"
                        value="2"
                        checked={selectedSort === "2"}
                        onChange={() => setSelectedSort("2")}
                        type="radio"
                        className="h-4 w-4"
                      />
                      <label htmlFor="sort-2" className="ml-3 text-sm text-gray-600">Descending</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="sort-3"
                        name="sort"
                        value="3"
                        checked={selectedSort === "3"}
                        onChange={() => setSelectedSort("3")}
                        type="radio"
                        className="h-4 w-4"
                      />
                      <label htmlFor="sort-3" className="ml-3 text-sm text-gray-600">Price Low to High</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="sort-4"
                        name="sort"
                        value="4"
                        checked={selectedSort === "4"}
                        onChange={() => setSelectedSort("4")}
                        type="radio"
                        className="h-4 w-4"
                      />
                      <label htmlFor="sort-4" className="ml-3 text-sm text-gray-600">Price High to Low</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="sort-5"
                        name="sort"
                        value="5"
                        checked={selectedSort === "5"}
                        onChange={() => setSelectedSort("5")}
                        type="radio"
                        className="h-4 w-4"
                      />
                      <label htmlFor="sort-5" className="ml-3 text-sm text-gray-600">Discounted Price Low to High</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="sort-6"
                        name="sort"
                        value="6"
                        checked={selectedSort === "6"}
                        onChange={() => setSelectedSort("6")}
                        type="radio"
                        className="h-4 w-4"
                      />
                      <label htmlFor="sort-6" className="ml-3 text-sm text-gray-600">Discounted Price High to Low</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="sort-7"
                        name="sort"
                        value="7"
                        checked={selectedSort === "7"}
                        onChange={() => setSelectedSort("7")}
                        type="radio"
                        className="h-4 w-4"
                      />
                      <label htmlFor="sort-7" className="ml-3 text-sm text-gray-600">Rating Low to High</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="sort-8"
                        name="sort"
                        value="8"
                        checked={selectedSort === "8"}
                        onChange={() => setSelectedSort("8")}
                        type="radio"
                        className="h-4 w-4"
                      />
                      <label htmlFor="sort-8" className="ml-3 text-sm text-gray-600">Rating High to Low</label>
                    </div>

                  </div>
                </div>




              </div>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => setopencat(!opencat)} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                    <span className="font-medium text-[19px]   text-gray-900">Categories</span>
                    <span className="ml-6    flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        opencat
                          ?
                          <svg className=" h-6   " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-6 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }


                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${opencat ? 'hidden' : ''}`} id="filter-section-0">
                  <div className="space-y-4">
                    {Categories.map((v, i) => {
                      if (v.slug !== "motorcycle" && v.slug !== "vehicle") {
                        return (
                          <div className="flex items-center" key={i}>
                            <input
                              type="checkbox"
                              name="categories"
                              id={`category-${v.slug}`}
                              onChange={() => GetCategorySlug(v.slug)} // 👈 yahan change karo
                              checked={(selectedCategories.includes(v.slug))}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`category-${v.slug}`}
                              className="ml-3 text-sm text-gray-600 cursor-pointer" // 👈 cursor-pointer add karo
                            >
                              {v.name}
                            </label>
                          </div>
                        );
                      }
                    })}


                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => setopenbrand(!openbrand)} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                    <span className="font-medium text-[19px]   text-gray-900">Brands</span>
                    <span className="ml-6 flex items-center">
                      {
                        openbrand
                          ?
                          <svg className="h-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :
                          <svg className="h-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}

                      {/* <!-- Collapse icon, show/hide based on section open state. -->// */}

                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${openbrand ? 'hidden' : ''}`} id="filter-section-1">
                  <div className="space-y-4">
                    {
                      brand.map((v, i) => {
                        return (
                          <div className="flex items-center" key={i}>
                            <input onClick={() => b(v.slug)} checked={(selectedBrands.includes(v.slug))} id={`brand-${v.slug}`} name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor={`brand-${v.slug}`} className="ml-3 text-sm text-gray-600">{v.slug}</label>
                          </div>
                        )
                      })
                    }


                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => setopenrating(!openrating)} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                    <span className="font-medium text-[19px] text-gray-900">Rating</span>
                    <span className="ml-6 flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        openrating
                          ?
                          <svg className="h-6 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-6 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${openrating ? 'hidden' : ''}`} id="filter-section-2">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        id="rating-4"
                        name="rating"
                        value="4"
                        onChange={(e) => setrating(e.target.value)}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="rating-4" className="ml-3 text-sm text-gray-600">4★ & above</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="rating-3"
                        name="rating"
                        value="3"
                        onChange={(e) => setrating(e.target.value)}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="rating-3" className="ml-3 text-sm text-gray-600">3★ & above</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="rating-2"
                        name="rating"
                        value="2"
                        onChange={(e) => setrating(e.target.value)}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="rating-2" className="ml-3 text-sm text-gray-600">2★ & above</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="rating-1"
                        name="rating"
                        value="1"
                        onChange={(e) => setrating(e.target.value)}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="rating-1" className="ml-3 text-sm text-gray-600">1★ & above</label>
                    </div>
                  </div>
                </div>

              </div>

            </form>

            {/* <!-- Product grid --> */}

          </div>
        </section>
      </main>


    </>
  )
}


