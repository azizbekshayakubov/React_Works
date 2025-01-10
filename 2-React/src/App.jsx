import Main from './container/Main'
import Navbar from './container/Navbar'
import Sidebar from './container/Sidebar'
import './App.css'

function App() {
  

  return (
    <>
    <div className='APP'>
       <Sidebar/>
       <Navbar/> 
       <Main/>
    </div>
     
    </>
  )
}

export default App
