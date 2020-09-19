import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
     {/* back to top href */}
     <a href="#"><div class="footer__backToTop">Back To Top</div></a>
     <div class="footer__links">
     <div class="footer__linksOne">
     <h3>Get to Know US</h3>
     <ul><li>Careers</li><li>Blog</li><li>About Amazon </li><li>Sustainability</li><li> Investor </li><li>Relations </li><li>Amazon Devices</li><li> Amazon Tours </li></ul></div>
     <div class="footer__linksOne">
     <h3>Make money with US</h3><ul><li>Sell on Amazon</li><li>Sell on amazon Business</li><li>Sell Your Apps on Amazon</li><li>Become an Affiliate</li><li>Advertise Your Products</li><li>Self-Publish with Us</li><li>Host an Amazon Hub</li><li> ›See More Make Money with Us</li></ul></div>
     <div class="footer__linksOne">
     <h3>Amazon payment Products</h3><ul><li>Amazon Business Card</li><li>Shop with Points</li><li>Reload Your Balance</li><li>Amazon Currency Converter</li></ul></div>
     <div class="footer__linksOne"><h3>Get to Know US</h3><ul><li>Amazon and COVID-19</li><li>Your Account</li><li>Your Orders</li><li>Shipping Rates &amp; Policies </li><li> Returns &amp; Replacements</li><li> Manage Your Content and Devices </li><li>Amazon Assistant</li><li> Help</li></ul></div>
     </div>
     <hr class="line"></hr>
     <div class="footer__logo"> 
     <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
    
     <p>Made By <a href="https://facebook-clone-b80a3.web.app/" target="_blank">Nikita Chaudhari</a></p>
     </div>
    </div>
  )
}

export default Footer
