import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
  const totalPrize = cart.reduce((sum, data) => sum + data.price, 0);

  const handlePayment = () => {
    setCart([]);
    toast.success('Payment Succesfull')
  };
  const handleRemove = (data) => {
    const newData = cart.filter(e => e.id !== data.id)
    setCart(newData)
    toast.success('This product Remove')
  }

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="card w-full bg-base-100 shadow-lg">
        <h2 className="w-11/12 mx-auto mt-3">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center p-36 text-5xl font-bold">No cart here</p>
        ) : (
          <>
            {cart.map((data, id) => (
              <div
                key={id}
                className="p-4 my-3 rounded-lg bg-[#f9fafc] w-11/12 mx-auto card-body"
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <img src={data.icon} alt="icon" />
                    <div>
                      <h1>{data.name}</h1>
                      <p className="text-[#627382]">${data.price}</p>
                    </div>
                  </div>
                  <div>
                    <p onClick={()=>handleRemove(data)} className="text-[#ff3980] cursor-pointer">Remove</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-11/12 mx-auto mt-3 flex justify-between">
              <p>total:</p>
              <p>${totalPrize}</p>
            </div>
            <div className="w-11/12 mx-auto my-3">
              <button
                onClick={handlePayment}
                className="btn bg-linear-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full btn-block text-center"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
