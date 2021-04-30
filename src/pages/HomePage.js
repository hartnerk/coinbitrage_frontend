import React, { Component } from 'react';
import AlertList from '../components/Alert/AlertList.js'
import SpreadList from '../components/Spread/SpreadList.js'
import Splash from '../components/Splash/Splash.js'
import Nav from '../components/Nav/Nav.js'

class HomePage extends Component {
  render() {
    const { isLoggedIn, user, handleLogout } = this.props;
      return (
        <div>
          {!isLoggedIn
            ?
              <Splash isLoggedIn={isLoggedIn} user={user} handleLogout={handleLogout}></Splash>
            :
            <div>
              <Nav isLoggedIn={isLoggedIn} user={user} handleLogout={handleLogout}></Nav>
              <AlertList token={localStorage.getItem("auth-user")} isLoggedIn={isLoggedIn} />
              <SpreadList token={localStorage.getItem("auth-user")} isLoggedIn={isLoggedIn} />
            </div>
          }
        </div>
      );
    }
}

export default HomePage;