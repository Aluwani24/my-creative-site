import './App.css'

import { Hero } from './Components/Hero/Hero'
import { Navbar } from './Components/Navbar/Navbar'

function App() {


  return (
    <div id="app-container">
      
        <div id='scroll'>
          <Navbar />
          <main>
            <Hero />
          </main>
        </div>
      
    </div>

  )
}

export default App
