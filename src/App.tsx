import './App.css'
import { About } from './Components/About/About'
import { Footer } from './Components/Footer/Footer'
import { Hero } from './Components/Hero/Hero'
import { Navbar } from './Components/Navbar/Navbar'
import { Services } from './Components/Services/Services'
import { Stats } from './Components/Stats/Stats'

function App() {


  return (
    <div id="app-container">
      
        <div id='scroll'>
          <Navbar />
          <main>
            <Hero />
            <Services/>
            <About/>
            <Stats/>
          </main>
          <Footer/>
        </div>
      
    </div>

  )
}

export default App
