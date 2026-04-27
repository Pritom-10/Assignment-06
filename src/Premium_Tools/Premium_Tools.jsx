
import { use } from 'react';
import ModalCart from '../Cart/ModalCart';

const Premium_Tools = ({ modelPromise,cart,setCart }) => {
  const products = use(modelPromise)
 



  
  
  return (
    <div className="py-12 w-10/12 mx-auto">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-5">
        {products.map((product) => (
          <ModalCart key={product.id} product={product} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Premium_Tools;