import React from 'react';
import ping from '../assets/Group 5.png'
import banner from '../assets/banner.png'
import play from '../assets/play.png'
const Hero = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-36 w-10/12 mx-auto">
        <div className="flex flex-col">
          <div className="cursor-pointer flex gap-2.5 rounded-[100px] bg-[#e1e7ff]  px-2 py-3 items-center w-62">
            <div>
              <img src={ping} alt="Early Access" />
            </div>
            <div className="bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-[16px] font-bold">
              Early Access Now Open
            </div>
          </div>
          <div>
            <p className="text-[72px] font-bold">
              Supercharge Your <br /> Digital Workflow
            </p>
          </div>
          <div className="mb-5">
            <p className="text-[#627382] text-[16px]">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster today. <br /> Explore Products
            </p>
          </div>
          <div className="flex gap-3">
            <div>
              <button className="bg-linear-to-r from-blue-500 to-purple-500 btn rounded-4xl text-white ">
                Exploar Products
              </button>
            </div>
            <div>
              <button className="btn btn-primary btn-outline rounded-full">
                <img src={play} alt="" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={banner} alt="Banner" />
        </div>
      </div>
      <div className="bg-linear-to-r from-blue-500 to-purple-500 flex justify-around mt-15 mb-22">
        <div className="py-12 text-center space-y-2">
          <p className="text-6xl font-extrabold text-white">50K+</p>
          <p className="text-white text-2xl font-medium">Active Users</p>
        </div>
        <div className="py-12 text-center space-y-2">
          <p className="text-6xl font-extrabold text-white">200+</p>
          <p className="text-white text-2xl font-medium">Premium Tools</p>
        </div>
        <div className="py-12 text-center space-y-2">
          <p className="text-6xl font-extrabold text-white">4.9</p>
          <p className="text-white text-2xl font-medium">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;