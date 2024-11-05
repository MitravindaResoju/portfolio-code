import Navbar from './assets/Components/Navbar'
import './App.css'
import Header from './assets/Components/Header'
import About from './assets/Components/About'
import Experience from './assets/Components/Experience'
import Skills from './assets/Components/Skills'
import Contact from './assets/Components/Contact'


function App() {


  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Skills/>
    <Experience/>
    <Contact/>
    <center>
    <div className='bg-gray-50 p-5'>
            <p>2023 | Designed and coded with ❤️️ by Mitravinda Resoju</p>
        </div>
    </center>
    </>
  )
}

export default App
