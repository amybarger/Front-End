import React from "react";
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div>
      <nav className="nav-header">
        <h1>African Marketplace</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
     
    </div>
  )
}

export default Nav;