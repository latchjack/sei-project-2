import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {


  render() {
    return (
      <nav className="navbar is-warning">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">Good Films Only 📽️</Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link className="navbar-item" to="/films">Films</Link>

              
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar