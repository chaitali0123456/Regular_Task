import React from 'react'
import phoneBackgroundImage from "../images/phoneBackgroundImage.png"
import phoneImage from "../images/phoneImage.png"
import logo from "../images/logo.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function HomePage() {
  return (
    <div className='homepage'>
      <div className='sideImg'>
      
      </div>
        <div className='navbar'>
          <div>
            <img src={logo} alt="" />
          </div>
            <div className='power_logo'>
                powerpro
            </div>
             <div>
                <ul>
                    <li>
                        <a href="">
                            Product 
                            <span><KeyboardArrowDownIcon/></span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Resources
                            <span><KeyboardArrowDownIcon/></span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Tool 
                            <span><KeyboardArrowDownIcon/></span>
                        </a>
                    </li>
                </ul>
             </div>
             <div >
                <button className='btn1'>Sign In</button>
             </div>
             <div >
                <button className='btn2'>Contact Sales</button>
             </div>
        </div>
        <div className='second_part'>
          <div className='text'>
            <h2>The Only AI CARM For Small Business</h2>
            <p>Respond to leads,orgnize contacts,and instantly generate client communication with AI CRM</p>
            <button>Start From Free</button>
          </div>
          <div>
            <img className= "img1" src={phoneBackgroundImage} alt="" />
          </div>
          <div>
            <img className='img2' src={phoneImage} alt="" />
          </div>


        </div>
    </div>
  )
}
