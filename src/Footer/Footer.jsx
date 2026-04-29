import React from 'react';
import facebook from '../assets/Facebook.png'
import instagram from '../assets/Instagram.png'
import twiter from '../assets/Twitter.png'
const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className=" w-11/12 mx-auto mt-10 pt-20">
        <div className="text-white md:grid-cols-5 lg:flex justify-between grid grid-cols-2 gap-10 lg:gap-0">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">DigiTools</h1>
            <p className="opacity-55">
              Premium digital tools for creators, <br /> professionals, and
              businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>
          <div>
            <ul className="space-y-4 opacity-55">
              <li className="font-bold">Product</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 opacity-55">
              <li className="font-bold">Company</li>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 opacity-55">
              <li className="font-bold">Resources</li>
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="space-y-4">
              <p className="font-bold text-center opacity-55">Social Links</p>
              <ul className="flex justify-between gap-2">
                <li>
                  <img src={instagram} alt="" />
                </li>
                <li>
                  <img src={facebook} alt="" />
                </li>
                <li>
                  <img src={twiter} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="bg-[#39404f] h-1 mt-10" />
        <div className="text-[#FAFAFA] flex justify-between mt-6 pb-6 opacity-55">
          <div>
            <p>© 2026 Digitools. All rights reserved.</p>
          </div>
          <div className="flex justify-between gap-5">
            <p>Privacy Policy </p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;