import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import CommonRoute from './component/CommonRoute.jsx';
import Context from './component/context/Context.jsx';
import ProductView from './component/product/ProductView.jsx';
import { ToastContainer } from 'react-toastify';
import Cart from './component/Cart/Cart.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<CommonRoute />}>
      
        <Route path='/' element={<App />} />
        <Route path='cart' element={<Cart />} />
        <Route path='ProductView/:id' element={<ProductView />} />
      </Route>
    </>

  ));


createRoot(document.getElementById('root')).render(
 
    <Context>
      <ToastContainer/>
      <RouterProvider router={router} />
    </Context>

 
) 