import React from 'react'

import {Link} from "react-router-dom"

function Header() {
    return (
        <div>
        
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
          
            <li>
              <Link to="/users">Users</Link>
            </li>

            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </nav>


        </div>
    )
}

export default Header
