import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <Link to="/home">Home</Link><br/>
         <Link to="/about"> About</Link><br/>
         <Link to="/contact"> Contact</Link>
    </div>
  )
}

export default NavBar