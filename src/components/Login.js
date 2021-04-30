import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Login = ({isLoggedIn, handleLogout, handleLogin}) => {

  if (isLoggedIn) {
    return <div>
      <button onClick={handleLogout}>Logout</button>
      <div>
        {console.log('Login Redirect')}
        <Redirect to='/'></Redirect>
      </div>
    </div>
  }

  return (
    <div className="auth-wrapper">
      {console.log('login render')}
      <div className="auth-inner">
          <form onSubmit={handleLogin}>
            <h3>Sign In</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter email"  name='username'/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name='password'/>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" name='checkbox'/>
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Log In</button>
            <p className="forgot-password text-right">
                    Already registered <Link to="/signup">sign in?</Link>
                </p>
          </form>
        </div>
    </div>
  );
};

export default Login;