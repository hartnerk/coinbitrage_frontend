import React from 'react';
import { signupUser } from '../api/UserAPI';
import { Link } from "react-router-dom";

const SignupPage = (props) => {
  const { history } = props;
  const handleSignup = async (evt) => {
    evt.preventDefault();
    let userObject = {
      'username': evt.target.username.value,
      'password': evt.target.password.value,
    }
    console.log(userObject)
    let response = await signupUser(userObject);
    let data = await response.json();
    if (data.error) {
      console.log('there was an error signing up');
    } else {
      history.push('/login');
    }

  }

  return (
      <div className="auth-wrapper">
        <div className="auth-inner">
        <form onSubmit={handleSignup}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" name='FirstName'/>
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" name='LastName'/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" name='Email'/>
            </div>

            <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" className="form-control" placeholder="Enter phone #" name='phoneNumber'/>
            </div>


            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter username" name='username'/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name='password'/>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <Link to="">sign in?</Link>
            </p>
        </form>
        </div>
      </div>
  );
};

export default SignupPage;