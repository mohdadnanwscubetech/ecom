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

        <div class="font-sans max-w-4xl max-tablet:max-w-xl mx-auto p-4">
            <h1 class="text-2xl font-extrabold text-gray-800">Your Cart</h1>
            <div class="grid tablet:grid-cols-3 gap-4 mt-8">
                <div class="tablet:col-span-2 space-y-4">
                    {
                        cartitems.map((v, i) => {
                            return (
                                <CartCard deleteCart={deleteCart} v={v} />
                            )
                        })
                    }
                </div>

                <div class="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                    <ul class="text-gray-800 space-y-4">
                        <li class="flex flex-wrap gap-4 text-sm">Subtotal <span class="ml-auto font-bold">{totalPrice}</span></li>
                        <li class="flex flex-wrap gap-4 text-sm">Shipping <span class="ml-auto font-bold">00</span></li>
                        <li class="flex flex-wrap gap-4 text-sm">Tax <span class="ml-auto font-bold">00</span></li>
                        <hr class="border-gray-300" />
                        <li class="flex flex-wrap gap-4 text-sm font-bold">Total <span class="ml-auto">{totalPrice}</span></li>
                    </ul>

                    <div class="mt-8 space-y-2">
                        <button type="button" class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">Buy Now</button>
                        <button type="button" class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </button>
                    </div>

                    <div class="mt-4 flex flex-wrap justify-center gap-4">
                        <img src='https://readymadeui.com/images/master.webp' alt="card1" class="w-10 object-contain" />
                        <img src='https://readymadeui.com/images/visa.webp' alt="card2" class="w-10 object-contain" />
                        <img src='https://readymadeui.com/images/american-express.webp' alt="card3" class="w-10 object-contain" />
                    </div>
                </div>
            </div>
        </div>




    )
}

