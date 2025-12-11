import NavBar from './app/page/digitalAgency/NavBar.jsx';

import { Outlet } from "react-router-dom"
import { useEffect } from "react";
import ContactUs from './components/shear/ContactUs.jsx';
import Footer from './components/shear/footer.jsx';



const theme = localStorage.getItem("theme") || "light";

function App() {

  // useEffect(() => {
  //   document.documentElement.className = theme; 
  //   localStorage.setItem("theme", theme);
  // }, [theme]);
  

  return (
    <>
      <div className={theme}>
        <NavBar />
        <div className="min-h-[calc(100vh-360px)] ">
        <Outlet></Outlet>
        </div>
        <Footer />
      </div>
    
    </>
  )
}

export default App
