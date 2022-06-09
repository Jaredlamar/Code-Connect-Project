import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Navbar() {
    const [isMobile,SetIsMobile]=useState(false);
    
    let navigate = useNavigate()
    function handleLogout(){

        fetch(`logout/`, {
            method: "DELETE"
        })
        .catch( error => console.log(error.message))
        .then(navigate('/'))

    }
  return (
    
    <nav className='navbar'>
        <h1 className='logo'>Code<br></br> Connect</h1>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => SetIsMobile(false)}
        
        >
            
             <Link className='Home' to="/main">
                 <li>Home</li>
             </Link>
            
           
            <Link className='Books' to="/bookcontainer">
                <li>Books</li>
            </Link>
            
            
             <Link className='Schools' to="/schoolcontainer">
                 <li>Bootcamps</li>
             </Link>
            
            
            <Link className='Events' to="/events">
                <li>Message Board</li>
            </Link>
            
            <li className='li'>
                <button onClick={handleLogout} className='Omega' to="/"  >Logout</button>

            </li>
        </ul>
        <button className='mobile-menu-icon'>
            {isMobile ?<i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
        </button>
    </nav>
)
}

export default Navbar