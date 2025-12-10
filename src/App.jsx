import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import Cart from './components/footer';


import BusinessStrategy from './app/page/businessConsulting/BusinessConsulting.jsx';
import NavBar from './app/page/digitalAgency/NavBar.jsx';

import { Outlet } from "react-router-dom"
import { useEffect } from "react";
import ContactUs from './components/shear/ContactUs.jsx';
import Footer from './components/shear/footer.jsx';



const theme = localStorage.getItem("theme") || "light";

function App() {
  useEffect(() => {
    document.documentElement.className = theme; // Ensures correct class is set
    localStorage.setItem("theme", theme);
  }, [theme]);
  

  return (
    <>
      <div className={theme}>
        {/* <BusinessStrategy /> */}
        {/* <NavBar /> */}
        <div className="min-h-[calc(100vh-360px)] ">
        <Outlet></Outlet>
        </div>

        <ContactUs />
        <Footer />
      </div>
    
    </>
  )
}

export default App
