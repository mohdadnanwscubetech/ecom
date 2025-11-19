import React, { useContext, useEffect, useState } from 'react'
import { Commoncontext } from '../context/Context.jsx'
import CartCard from './CartCard.jsx'

export default function Cart() {
    let { cartitems, deleteCart } = useContext(Commoncontext)
    let [totalPrice, settotalPrice] = useState(0)



    useEffect(() => {
        let subtotal = cartitems.reduce((acc, item) => acc + item.price * item.qty, 0);

        settotalPrice(subtotal)
    }, [cartitems])




    return (

        <div className="font-sans max-w-4xl max-tablet:max-w-xl mx-auto p-4">

            {/* ✅ EMPTY CART CONDITION */}
            {cartitems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2037/2037454.png"
                        className="w-40 opacity-80"
                    />
                    <h2 className="text-2xl font-bold text-gray-700 mt-5">Your Cart is Empty</h2>
                    <p className="text-gray-500 mt-2 text-center max-w-sm">
                        Looks like you haven’t added anything to your cart yet.
                    </p>

                    <button
                        onClick={() => window.history.back()}
                        className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-md"
                    >
                        Continue Shopping
                    </button>
                </div>
            ) : (

                /* ✅ YOUR ORIGINAL CART UI */
                <>
                    <h1 className="text-2xl font-extrabold text-gray-800">Your Cart</h1>

                    <div className="grid tablet:grid-cols-3 gap-4 mt-8">

                        {/* LEFT SIDE: ITEMS */}
                        <div className="tablet:col-span-2 space-y-4">
                            {cartitems.map((v, i) => (
                                <CartCard deleteCart={deleteCart} v={v} key={i} />
                            ))}
                        </div>

                        {/* RIGHT SIDE: BILLING */}
                        <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                            <ul className="text-gray-800 space-y-4">
                                <li className="flex flex-wrap gap-4 text-sm">
                                    Subtotal <span className="ml-auto font-bold">₹ {totalPrice}</span>
                                </li>
                                <li className="flex flex-wrap gap-4 text-sm">
                                    Shipping <span className="ml-auto font-bold">₹ 00</span>
                                </li>
                                <li className="flex flex-wrap gap-4 text-sm">
                                    Tax <span className="ml-auto font-bold">₹ 00</span>
                                </li>
                                <hr className="border-gray-300" />
                                <li className="flex flex-wrap gap-4 text-sm font-bold">
                                    Total <span className="ml-auto">₹ {totalPrice}</span>
                                </li>
                            </ul>


                            <div className="mt-8 space-y-2">
                                <button
                                    type="button"
                                    className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
                                >
                                    Buy Now
                                </button>
                                <button
                                    type="button"
                                    className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
                                >
                                    Continue Shopping
                                </button>
                            </div>

                            <div className="mt-4 flex flex-wrap justify-center gap-4">
                                <img src="https://readymadeui.com/images/master.webp" className="w-10" />
                                <img src="https://readymadeui.com/images/visa.webp" className="w-10" />
                                <img src="https://readymadeui.com/images/american-express.webp" className="w-10" />
                            </div>
                        </div>

                    </div>
                </>

            )}
        </div>




    )
}

