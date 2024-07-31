import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';

const LoginPopUp = ({setShowLogin}) => {

    const [currState , setCurrState] = useState("login");

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {
                    currState ==='login'?<></>:<input type="text" placeholder='your name' required />
                }
                
                <input type="email" name="" id=""  placeholder='your email' required />
                <input type="password" placeholder='password' required id="" />
            </div>
            <button>{currState === 'sign up'?"create account":"login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree all the term & privacy policy.</p>
            </div>
            {
                currState==='login'?<p>Create a new account? <span onClick={()=>setCurrState("sign up")}>Click here</span></p>
                :<p>Already have an account? <span onClick={()=>setCurrState("login")}>login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopUp