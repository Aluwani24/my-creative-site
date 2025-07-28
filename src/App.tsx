import './App.css'

import { Hero } from './Components/Hero/Hero'
import { Navbar } from './Components/Navbar/Navbar'
import { Services } from './Components/Services/Services'

function App() {


  return (
    <div id="app-container">
      
        <div id='scroll'>
          <Navbar />
          <main>
            <Hero />
            <Services/>
          </main>
        </div>
      
    </div>

  )
}

export default App
