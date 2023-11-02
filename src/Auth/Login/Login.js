import React, { useState } from 'react';
import "./login.css";
import Img from '../../Assets/Background.jpg';
import Music from '../../Assets/music.png';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const requestBody = {
      username: username,
      password: password,
    };

    try {
      // Simulate an API request
      if (requestBody.username === 'kminchelle' && requestBody.password === '0lelplR') {
        // Authentication succeeded, navigate to the dashboard page
        navigate('/dashboard');
      } else {
        // Authentication failed, show an alert with an error message
        alert('Authentication failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <div className='inner_container'>
        <img src={Img} className='img-back' />
        <div className='mid-container'>
          <div className='Instrumental'>
            <img src={Music} className='music' />
            <h1>Instrumental</h1>
            <br />
          </div>
          <div className='Instrumental'>
            <h1>Log in to your Account</h1>
          </div>
          <form className='foam' onSubmit={handleLogin}>
            <div>
              <label htmlFor="EmailInput" className='email'>Your email</label>
              <input
                type="text"
                className="form-control"
                id="EmailInput"
                name="EmailInput"
                placeholder="Enter email"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className='email'>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            <a href="#" className="forgot">Forgot password?</a>
            <br /><br />
            <button type="submit" className="signin">SignIn</button>
            <div className='signing_first_time'>
              <p>Signing in for the first time? <Link to="/signup"><a href='#'>Click Here</a></Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
