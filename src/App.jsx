import { useState } from 'react'
import Cart from './Cart/Cart'
import Hero from './Hero/Hero'
import Navbar from './Navbar/navbar'
import Premium_Tools from './Premium_Tools/Premium_Tools'
const getProductsData = async() => {
  const res = await fetch('/public/module.json')
  return res.json()
}
const modelPromise=getProductsData()

function App() {
 
  const [active, setActive] = useState('model')
  const [cart,setCart]=useState([])
  

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Products"
          onClick={() => setActive("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`Cart(${cart.length})`}
          onClick={() => setActive("cart")}
        />
      </div>

      {active === "model" && (
        <Premium_Tools modelPromise={modelPromise} cart={cart} setCart={setCart}></Premium_Tools>
      )}

      {active === 'cart' && <Cart cart={cart} setCart={setCart}></Cart>}
    </>
  );
}

export default App
