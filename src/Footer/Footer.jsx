import React from 'react';
import facebook from '../assets/Facebook.png'
import instagram from '../assets/Instagram.png'
import twiter from '../assets/Twitter.png'
const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h1>DigiTools</h1>
            <p>
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <ul>
              <li>Product</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Company</li>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Resources</li>
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div>
              <p>Social Links</p>
              <ul>
                <li><img src={instagram} alt="" /></li>
                <li><img src={facebook} alt="" /></li>
                <li><img src={twiter} alt="" /></li>
              </ul>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Footer;