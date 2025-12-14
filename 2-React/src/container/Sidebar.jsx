import '../container/sidebar.scss'
import Logo from "../assets/images/icons/logo.svg"
import SidebarBtn from '../components/SidebarBtn'



const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar-header'>
                <img src={Logo} alt="Dashbord Logo" />
                <h1>Dashboard Kit</h1>
            </div>
            <SidebarBtn />
        </div>



    )
}


export default Sidebar