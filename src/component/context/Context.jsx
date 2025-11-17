import React, { createContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Swal from "sweetalert2";

const Commoncontext = createContext()

export default function Context({ children }) {
  //All Categories store in Categories state---------------------------------------------------------->>>>
  let [Categories, setCategories] = useState([])
  //All product store in products state---------------------------------------------------------->>>>
  let [products, setproducts] = useState([])
  let [cartitems, setcartitems] = useState(JSON.parse(localStorage.getItem("cart")) || [])

  // ==================== ADD TO CART ====================
  let addtocart = (product) => {
    let data = cartitems.filter((value) => value.id === product.id)

    if (data.length === 0) {
      // if product not in cart
      let carts = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        qty: 1
      }

      let newData = JSON.parse(localStorage.getItem('cart')) ?? []
      newData = [carts, ...cartitems]

      localStorage.setItem('cart', JSON.stringify(newData))
      setcartitems([carts, ...cartitems])

      toast.success(`${product.name} added to cart!`)
    } else {
      // product already exists
      let updated = false
      cartitems.map((value) => {
        if (value.id === product.id) {
          if (value.qty < 5) {
            value.qty = value.qty + 1
            updated = true
            toast.success(`Quantity increased for ${product.name}`)
          } else {
            toast.error('Maximum quantity limit reached (5)')
          }
        }
        return value
      })

      setcartitems([...cartitems])
      localStorage.setItem('cart', JSON.stringify(cartitems))

      if (updated) {
        localStorage.setItem('cart', JSON.stringify(cartitems))
      }
    }
  }

  // ==================== DELETE CART ITEM ====================
  let deleteCart = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this item from the cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {

        const updatedCart = cartitems.filter((v) => v.id !== id);

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setcartitems(updatedCart);


        const removedItem = cartitems.find((v) => v.id === id);
        Swal.fire("Removed!", `${removedItem?.name} has been removed.`, "success");
      }
    });
  };


  // ==================== INCREASE CART QTY ====================
  let increaseCartqty = (v) => {
    let finalData = cartitems.map((value) => {
      if (value.id === v.id) {
        if (value.qty < 5) {
          value.qty = value.qty + 1
          toast.success(`Increased quantity for ${value.name}`)
        } else {
          toast.error('Maximum quantity limit reached (5)')
        }
      }
      return value
    })

    setcartitems(finalData)
    localStorage.setItem('cart', JSON.stringify(finalData))
  }

  // ==================== DECREASE CART QTY ====================
  let decreaseCartqty = (v) => {
    let finalcart = cartitems.map((value) => {
      if (value.id === v.id) {
        if (value.qty > 1) {
          value.qty = value.qty - 1
          toast.info(`Decreased quantity for ${value.name}`)
        } else {
          toast.error('Minimum quantity is 1')
        }
      }
      return value
    })
    setcartitems(finalcart)
    localStorage.setItem('cart', JSON.stringify(finalcart))
  }



  let allitems = {
    cartitems, setcartitems, addtocart, deleteCart
    ,
    Categories, setCategories,
    products, setproducts,
    increaseCartqty, decreaseCartqty,
  }
  return (
    <div>
      <Commoncontext.Provider value={allitems}>

        {children}
      </Commoncontext.Provider>
    </div>
  )
}
export { Commoncontext };
