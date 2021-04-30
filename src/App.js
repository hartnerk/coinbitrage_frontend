import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AddAlertPage from './pages/AddAlertPage';
import Login from './components/Login';
import Signup from './components/Signup';
import { getLoggedInUser, login } from './api/UserAPI';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== 'null') {
        let response = await getLoggedInUser(localStorage.getItem("auth-user"));
        let data = await response.json();
        if (data.username) {
          setIsLoggedIn(true);
          setUser(data);
        }
      }
    }
    if (!user) {
      getUser();
    }
  }, [user])


  const handleLogin = async (evt) => {
    console.log('app.js  handle login ')
    evt.preventDefault();
    let userObject = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    }
    let response = await login(userObject);
    let data = await response.json();
    console.log('app.js  handle login ', data)
    console.log('app.js  handle login ', data.token)
    if (data.token) {
      console.log(' logged isin is true')
      localStorage.setItem("auth-user", data.token);
      console.log('1')
      setIsLoggedIn(true);
      console.log('2')
      setUser(data.user);
      console.log('3')
    }
  }

  const handleLogout = () => {
    localStorage.setItem("auth-user", null);
    setIsLoggedIn(false);
    setUser(null);
  }

  const renderLogin = () => {
    return (
        <div>
          {isLoggedIn?
          <Redirect to="/"></Redirect>
          :
          <Login
            isLoggedIn={isLoggedIn}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            user={user}
          />}
        </div>
    )
  }

  const renderHomePage = () => {
    return (
      <HomePage
        isLoggedIn={isLoggedIn}
        user={user}
        handleLogout={handleLogout}
      />
    )
  }

  const renderAddAlertPage = () => {
    return (
      <AddAlertPage
        isLoggedIn={isLoggedIn}
        user={user}
      />
    )
  }

  return (
    <div className="App">
      <Router>
        <div>
          {console.log('App Top ', isLoggedIn)}
          <Route exact path="/" render={renderHomePage} /> 
          <Route exact path="/login" render={renderLogin} /> 
          <Route exact path="/signUp" component={Signup} /> 
          <Route exact path="/AddAlertPage" render={renderAddAlertPage} /> 
          {/* <Route exact path="/alert/:id" component={AlertDetailPage} />
          <Route exact path="/alert/new" component={AddAlertPage} />
          <Route exact path="/alert/:id/edit" component={AlertEditPage} />
          */}
        </div>
      </Router>
    </div>
  );
}

export default App;