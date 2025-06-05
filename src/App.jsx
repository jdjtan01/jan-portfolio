import { useState } from 'react'
import NavBar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  
)
}

export default App
