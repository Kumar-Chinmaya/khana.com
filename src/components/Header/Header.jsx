import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'


const Header = () => {
  return (
    <div className='header'>
      <img src={assets.header_img}  />
        <div className='header-contents'>
            <h2>Order your favourite food here.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad, atque mollitia unde reiciendis ullam cupiditate corporis minus enim ut libero asperiores facere illo possimus voluptatum numquam quia, ipsa deleniti?</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header