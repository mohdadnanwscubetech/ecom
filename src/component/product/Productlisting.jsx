import React, { useContext, useEffect, useState } from 'react'
import Filterproductsidebar from './Filterproductsidebar'
import axios from 'axios';
import Productfilter from './Productfilter'
import { Commoncontext } from '../context/Context.jsx';

export default function Productlisting() {
    let { Categories, setCategories, setproducts } = useContext(Commoncontext)


    //cat contain the checked slug name cat added in api ---------------------------------------------------------->>>>
    let [selectedCategories, setSelectedCategories] = useState([]);
    

    let [selectedSort, setSelectedSort] = useState('')

    //All brands store in brand state----------------------------------------------------------------------->>>
    let [brand, setbrand] = useState([])

    let [selectedBrands, setSelectedBrands] = useState([]) //contain brands


    let [rating, setrating] = useState('')

    let [NumOfRecords, setNumOfRecords] = useState(28)

    const [Cardloading, setCardloading] = useState(true);

    const [loading, setLoading] = useState(false);


    let [mobilemenu, setmobilemenu] = useState(false)

    let [limit, setLimit] = useState(28)


    useEffect(() => {
        setLimit(28);
        setLoading(false);
        setCardloading(true);
    }, [selectedCategories, selectedSort, selectedBrands, rating]);



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


        axios.get(`https://wscubetech.co/ecommerce-api/products.php?limit=${limit}&categories=${selectedCategories}&sorting=${selectedSort}&brands=${selectedBrands}&rating=${rating}`)

            .then(function (response) {
                setproducts(response.data.data);
                setNumOfRecords(response.data.total_records)

           
                setCardloading(false)

            })
            .catch(function (error) {
                console.log(error);
            })

    }, [selectedBrands, selectedCategories, selectedSort, rating, limit])


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



                <div className='flex max-w-[1350px] lg:gap-[20px] mx-[auto]'>
                    <Filterproductsidebar

                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        Categories={Categories}
                        brand={brand}
                        setbrand={setbrand}
                        selectedBrands={selectedBrands}
                        setSelectedBrands={setSelectedBrands}
                        mobilemenu={mobilemenu}
                        setmobilemenu={setmobilemenu}

                        setrating={setrating}
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
                    />

                    <Productfilter

                        setLimit={setLimit}
                        limit={limit}
                        NumOfRecords={NumOfRecords}
                        Cardloading={Cardloading}
                        loading={loading}
                        setLoading={setLoading}
                        setmobilemenu={setmobilemenu}
                    />
                </div>

            </div>

        </>
    )
}
