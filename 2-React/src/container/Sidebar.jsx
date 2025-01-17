import Chart from '../assets/styles/Icons'
import '../container/sidebar.scss'
import Logo from "../assets/images/icons/logo.svg"



const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar-header'>
                <img src={Logo} alt="Dashbord Logo" />
                <h1>Dashboard Kit</h1>
            </div>
            <button className='btn sidebar-btn'>
                <Chart />
                <span>
                    Overview
                </span>
            </button>
            <button className='btn sidebar-btn'>Overview</button>
            <button className='btn sidebar-btn'>Overview</button>
            <button className='btn sidebar-btn'>Overview</button>
            <button className='btn sidebar-btn'>Overview</button>
            <button className='btn sidebar-btn'>Overview</button>
            <button className='btn sidebar-btn'>Overview</button>
            <button className='btn sidebar-btn'>Overview</button>
        </div>



    )
}


export default Sidebar