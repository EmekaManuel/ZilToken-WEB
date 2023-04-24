import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Work from './Components/Work'
import Footer from './Components/Footer'
import './App.css'
import Newsletter from './Components/Newsletter'


const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Services/>
      <Work/>
      <Newsletter/>
      <Footer/>
      
    </div>
  )
}

export default App