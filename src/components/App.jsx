import Home from '../components/Home'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import { useNavigate, Routes, Route } from 'react-router-dom'
import '../stylesheet/App.css'
function App() {
  const navigate = useNavigate()
  return (
    <>
      <nav className='navigationBar'>
        <button href="/" className='navigationButtons' onClick={click => {
          click.preventDefault()
          navigate('/')
        }}>Home</button>
        <button className='navigationButtons' onClick={click => {
          click.preventDefault()
          navigate('/projects')
        }}>Projects</button>
        <button className='navigationButtons' onClick={click => {
          click.preventDefault()
          navigate('/contact')
        }}>Contact Me</button>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
