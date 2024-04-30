import React, { useEffect, useRef } from 'react'
import './Navbar.css'

const Navbar = () => {
    const navRef = useRef(null);

    const navColor = () => {
      if (window.scrollY > 50) {
        // Change to the desired scroll threshold
        navRef.current.className = 'nav nav_black';
      } else {
        navRef.current.className = 'nav';
      }
    };
  
    useEffect(() => {
      // Attach the scroll event listener to the window
      window.addEventListener('scroll', navColor);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', navColor);
      };
    }, []);
  return (
    <div className='nav' ref={navRef}>
        <img className='nav-logo' src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt="" />
        <img 
        className='nav-avatar'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4f22ZPv0huMTgOGTxs1RlWHBe-46RM45VBMdwAYSiw&s" alt="" />
      
    </div>
  )
}

export default Navbar
