import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./nav.css";

class Nav extends Component {

  render() {
    const { isLoggedIn, user, handleLogout } = this.props;
    return (
      <div className='masterNavDiv'>
      {
        user &&
        <div className='itemleft'>
          Hi {user.username}
        </div>
      }
      {
        !isLoggedIn
        ?
        <div className='fullwidth'>
          <div className='itemleft'>
            <Link to='/login'>Login</Link>
          </div>
          <div className='itemright'>
            <Link to='/signup'>Signup</Link>
          </div>
        </div>
        :
        <div className='itemright'>
          <button onClick={handleLogout}>Logout</button>
        </div>
      }
    </div>
    );
  }
}

export default Nav;