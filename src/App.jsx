import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import Cart from './components/footer';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Contact />
        <Footer />
      </div>
      

    </>
  )
}

export default App
