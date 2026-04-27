import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
const ModalCart = ({ product,cart,setCart }) => {
    const tagColors = {
      new: "text-[#0a883e] bg-[#dbfce7]",
      popular: "text-[#978de5] bg-[#4f39f6]",
      bestSeller: "text-[#bb4d00] bg-[#fef3c6]",
    };
  const [isBuynow, setIsBuynow] = useState(false);
  const handleBye = () => {
    setIsBuynow(true);
    const isFound = cart.find(item => item.id === product.id)
    if (isFound) {
      toast.error('This product already added')
      return;
    }
    setCart([...cart, product])
    toast.success('This producta added to card')
  }
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between">
            <img
              className="p-2 border rounded-full border-[#627382]"
              src={product.icon}
              alt="icon"
            />
            <span
              className={`badge badge-xs p-3 rounded-full ${
                tagColors[product.tagType]
              }`}
            >
              {product.tagType}
            </span>
          </div>
          <div className="space-y-2 mt-2">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-[#627382]">{product.description}</p>
            <p>
              <span className="text-2xl font-bold">${product.price}</span>
              <span className="text-[#627382] text-">/{product.period}</span>
            </p>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{product.features[0]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{product.features[1]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{product.features[2]}</span>
            </li>
          </ul>
          <div className="mt-6">
            <button
              onClick={handleBye}
              className="btn bg-linear-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full btn-block"
            >
              {isBuynow ? "Added to cart" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;