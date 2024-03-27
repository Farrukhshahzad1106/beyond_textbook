import React, { useState } from 'react';
import Logo from '../Assets/Logo.png';
import { IoCloudyNightSharp } from "react-icons/io5"; //Night Mode
import { WiDayCloudy } from "react-icons/wi"; //Light Mode

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true); //if true the dark mode otherwise Light Mode
  const name = "Beyond Textbook"
  return (
    <div style={{display:'flex'}}>
      <div style={{padding: '2px', display: 'flex', height: '50px', boxSizing: 'border-box'}} >
          <img src={Logo} alt='Logo' width='40px' height='40px' style={{padding: '2px', borderRadius: '30%'}}/>
          <h3 style={{paddingBottom : "10px", paddingLeft : '5px', boxSizing: 'border-box'}}>{name}</h3>
      </div>
      <div style={{display:'flex'}}>
        <div>
          {
            darkMode ? 
              <IoCloudyNightSharp/> : 
              <WiDayCloudy/>
          }
        </div>
        <div>
          <button style={{backgroundColor:'blanchedAlmond', borderRadius:'20px'}}>
            Get <br/>
            1:1 Mentorship
          </button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Navbar