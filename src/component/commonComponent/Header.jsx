import React, { useContext, useState } from 'react'
import logo from '../../assets/images/logo.png'
import { BsCart2 } from "react-icons/bs";

import { FiMenu } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Commoncontext } from '../context/Context.jsx';
import { ToastContainer } from 'react-toastify';
export default function Header() {

    let { cartitems } = useContext(Commoncontext);





    return (
        <>
            <ToastContainer className={'z-[99999]'} />
            <div className=' max-w-[100%]  z-[999] bg-[white] sticky px-4 top-0 '>
                <header className='max-w-[1330px] border-[black]  border-b-[0.5px] bg-[white] xl:gap-0  flex m-auto xl:px-0  lg:items-center flex-col lg:flex-row md:justify-between mx-auto ' >

                    <figure className='flex justify-between lg:static sticky  items-center top-0 lg:py-0 py-5'>
                        <div className='flex items-center'>

                            <FiMenu
                                // onClick={()=>setmobilemenu(true)}
                                className='lg:hidden me-4  text-[24px]' />


                            <Link to={'/'}><img src={logo} className='lg:w-[156px] w-[87px]  ' alt="" /></Link>

                        </div>
                        <div className='lg:hidden gap-[15px] text-[23px] flex'>

                            <div className='text-[#C53EAD] relative pt-1 text-[20px]'>
                                <Link to={'/cart'}>

                                    <FaCartShopping />
                                    {
                                        (cartitems == '')
                                            ?
                                            ""
                                            :

                                            <div className='absolute bottom-[15px] text-[10px] rounded-[50%] left-[15px] py-1 px-2 text-white bg-[green]'>{cartitems.length}</div>
                                    }  </Link>

                            </div>
                        </div>
                    </figure>


                    <nav className='hidden  font-medium lg:block '>
                        <ul className='flex h-[100%] text-[17px]' >



                            <li className='h-[100%] profile py-4 relative flex items-center '>



                            </li>
                            <li className='h-[100%] py-4 flex items-center '>



                                <Link to='/cart'>
                                    <div className=' xl:pl-9 h-10 lg:pl-4 relative lg:pr-4 xl:pr-[27px]'>
                                        <BsCart2 className='w-[100%] text-[20px]' />Cart
                                        {
                                            (cartitems == '')
                                                ?
                                                ""
                                                :
                                                <div className='absolute  bg-[#FFE7FB] top-[-11px] px-2  right-[21px] text-[13px] text-[#9F2089] rounded-[50%]'>{cartitems.length}</div>

                                        }
                                    </div>
                                </Link>


                            </li>

                        </ul>
                    </nav>


                </header>


            </div>


        </>
    )
}
