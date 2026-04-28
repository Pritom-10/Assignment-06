import { useState } from 'react'
import Cart from './Cart/Cart'
import Hero from './Hero/Hero'
import Navbar from './Navbar/navbar'
import Premium_Tools from './Premium_Tools/Premium_Tools'
import Steps from './Cart_Steps/Steps'
import Transparent from './Transparent/Transparent'
import Footer from './Footer/Footer'
// import Transparent from './Transparent/Transparent'
// import Workflow from './Workflow/Workflow'
// import Footer from './Footer/Footer'
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
      <Navbar cart={cart}></Navbar>
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

       <Steps></Steps>
      <Transparent/>
      {/* <Workflow></Workflow> */}
      <Footer/>
    </>
  );
}

export default App
