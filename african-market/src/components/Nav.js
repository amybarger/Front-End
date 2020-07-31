import React from "react";
import { Link, useHistory } from "react-router-dom"

function Nav() {

  const history = useHistory();
    const logout = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        history.push('/login')
    }

  return (
    <div>
      <nav className="nav-header">
        <h1>African Marketplace</h1>
        <div className="nav-links">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/Home">Home</Link>
          <Link onClick={logout}>Log Out</Link>
        </div>
      </nav>  
    </div>
  )
}

export default Nav;


