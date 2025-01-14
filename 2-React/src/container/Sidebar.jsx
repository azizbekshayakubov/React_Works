import { Chart, Logo } from '../assets/styles/Icons'
import '../container/sidebar.scss'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar-header'>
                <Logo />
                <h2>Dashboard Kit</h2>
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