import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import Cart from './components/footer';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import BusinessStrategy from './app/page/businessConsulting/BusinessStrategy.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BusinessStrategy />
        <Contact />
        <Footer />
      </div>
      

    </>
  )
}

export default App
