import React from 'react';
import user from '../assets/user.png'
import product from '../assets/package.png'
import boost from '../assets/rocket.png'

const Steps = () => {
  return (
    <div className="bg-[#f9fafc] mb-10">
      <h2 className="text-center text-5xl font-extrabold pt-14 pb-5">
        Get Started in 3 Steps
      </h2>
      <p className="text-center text-[#627382]">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="w-10/12 mx-auto flex items-center justify-center gap-10 py-18">
        <div className="card w-full bg-base-100 shadow-sm relative">
          <p className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full w-1.5 absolute right-2 top-2">
            01
          </p>
          <div className="flex flex-col items-center mt-10 mb-5 p-10">
            <div className="bg-[#dbd8f7] rounded-full p-4">
              <img src={user} alt="product" />
            </div>
            <h2 className="text-2xl font-bold mt-2">Create Account</h2>
            <p className="text-[#627382] mt-4 text-center">
              Sign up for free in seconds. No credit card required to get
              started
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-sm relative">
          <p className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full w-1.5 absolute right-2 top-2">
            02
          </p>
          <div className="flex flex-col items-center mt-10 mb-5 p-10">
            <div className="bg-[#dbd8f7] rounded-full p-4">
              <img src={product} alt="product" />
            </div>
            <h2 className="text-2xl font-bold mt-2">Choose Products</h2>
            <p className="text-[#627382] mt-4 text-center">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-sm relative">
          <p className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-5 py-2   rounded-full w-1.5 absolute right-2 top-2">
            03
          </p>
          <div className="flex flex-col items-center mt-10 mb-5 p-10">
            <div className="bg-[#dbd8f7] rounded-full p-4">
              <img src={boost} alt="product" />
            </div>
            <h2 className="text-2xl font-bold mt-2">Start Creating</h2>
            <p className="text-center text-[#627382] mt-4">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;