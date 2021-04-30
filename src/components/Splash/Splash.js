import React, { Component } from 'react';
import Nav from '../Nav/Nav.js'
import './splash.css'

class Splash extends Component {
  render() {
    const { isLoggedIn, user, handleLogout } = this.props;
    return (
        <div className='splashpage'>
          <Nav isLoggedIn={isLoggedIn} user={user} handleLogout={handleLogout}></Nav>
          <h1>  Welcome To Bitrage</h1>
        </div>

    );
  }
}

export default Splash;