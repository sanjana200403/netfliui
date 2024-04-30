import React from 'react'
import './Header.css'
import { MdLanguage } from "react-icons/md";

const Header = () => {
  return (
    <div className='header'>
        <nav>
            <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol.jpg" alt="" />
            <div>

            <button className='lang-btn'> English
            <MdLanguage className='global' />

            </button>
            <button>Sign In</button>
            </div>
        </nav>
        <div className="header-content">
           <h1>
            Unlimited movies, TV Shows and more
           </h1>
           <h3>Watch anywhere. Cancel anytime</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing.lorem3</p>
           <form action="" className='email-signup'>
            <input type="email" placeholder='Email' 
            required
            />
            <button type='submit'>Get Started</button>
           </form>
        </div>
      
    </div>
  )
}

export default Header
