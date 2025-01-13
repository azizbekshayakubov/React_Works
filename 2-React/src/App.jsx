import Main from './container/Main'
import Navbar from './container/Navbar'
import Sidebar from './container/Sidebar'
import './pages/app.scss'

function App() {
  

  return (
   
    <div className='App'>
       <Sidebar/>
       <div className='content'>
       <Navbar/> 
       <Main/>  
       </div>
    </div>
     
    
  )
}

export default App
