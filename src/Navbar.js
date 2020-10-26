import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
    return(
        <nav className='navbar'>
        <div className='link-block'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/trainings'>Trainings</Link>
        </div>
        </nav>
    )
}
export default Navbar