import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>
                Instagram 
                <i class='fab fa-instagram icon1' />
            </Link>
            <Link to='/'>
                Facebook
                <i class='fab fa-facebook-f icon2' />
            </Link>
            <Link to='/'>
                Youtube
                <i class='fab fa-youtube icon3' />
            </Link>
            <Link to='/'>
                Twitter
                <i class='fab fa-twitter icon4' />
            </Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={require("../assets/images/recyclean5.png")} alt="recyclean" />
            </Link>
          </div>
          <small class='website-rights'>Recyclean © 2022 All Rights Reserved</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;