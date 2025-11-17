import React, { useContext, useEffect, useState } from 'react'
import Filterproductsidebar from './Filterproductsidebar'
import axios from 'axios';
import Productfilter from './Productfilter'
import { Commoncontext } from '../context/Context.jsx';
import { Link } from 'react-router-dom';

export default function Productlisting() {
    let { Categories, setCategories, products, setproducts } = useContext(Commoncontext)


    //cat contain the checked slug name cat added in api ---------------------------------------------------------->>>>
    let [cat, setcat] = useState([]);
    //filter  state is use in dependecy in url in checkboc have any changes the filter state will be change------------------->>>
    let [filter, setFilter] = useState(false);

    let [sort, setSORT] = useState('')

    //All brands store in brand state----------------------------------------------------------------------->>>
    let [brand, setbrand] = useState([])

    let [BRAND, SETBRAND] = useState([]) //contain brands

    let [filbrand, setfilbrand] = useState(false)

    let [rating, setrating] = useState('')

    let [clear, setclears] = useState(false)


    let [mobilemenu, setmobilemenu] = useState(false)

    let [limit,setLimit] = useState(28)

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/brands.php')
            .then(function (response) {
                setbrand(response.data.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    useEffect(() => {


        axios.get(`https://wscubetech.co/ecommerce-api/products.php?limit=${limit}&categories=${cat}&sorting=${sort}&brands=${BRAND}&rating=${rating}`)

            .then(function (response) {
                // handle succes
                setproducts(response.data.data);
                settotalpages(response.data.total_pages)

                // setLoader(false)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [filter, filbrand, sort, rating, clear, limit])


    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then(function (response) {
                // handle success
                setCategories(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])




    return (
        <>
            <div className="bg-white">



                <div className='flex max-w-[1350px] laptop:gap-[20px] mx-[auto]'>
                    <Filterproductsidebar

                        cat={cat}
                        setcat={setcat}
                        filter={filter}
                        setFilter={setFilter}
                        Categories={Categories}
                        brand={brand}
                        setbrand={setbrand}
                        BRAND={BRAND}
                        SETBRAND={SETBRAND}
                        filbrand={filbrand}
                        setfilbrand={setfilbrand}
                        mobilemenu={mobilemenu}
                        setmobilemenu={setmobilemenu} 

                        setrating={setrating}
                        sort={sort}
                        setSORT={setSORT}
                    />

                    <Productfilter
                        sort={sort} ///
                        setSORT={setSORT} //
                        cat={cat}
                        setLimit={setLimit}
                        limit={limit}
                        setcat={setcat}
                        products={products}
                        clear={clear}
                        setclears={setclears}
                        
                         mobilemenu={mobilemenu}
                        setmobilemenu={setmobilemenu}
                    />
                </div>

            </div>

        </>
    )
}
