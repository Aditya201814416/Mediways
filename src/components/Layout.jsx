import React from 'react';
import './Layout.css';

const Layout = () => {
  return (
    <>
    <div className="container">
       <div className="logo"><img alternate="logo" src="/images/mediways_logo.png"/>
       <p className="heading">Mediways</p></div>

       <div className="circle1"></div>
       <div className="circle2"></div>
       <div className="circle3"></div>
       <div className="circle4"></div>
       <div className="circle5"></div>
       <div className="circle6"></div>

       <div className="sub-container">
        <button className='left-button'>Patient</button>
        <button className='right-button'>Hospital</button>
       </div>

    </div>

   
    </>
  )
}

export default Layout