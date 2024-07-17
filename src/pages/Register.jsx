import React from 'react';
import '../style.css';

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialMedia</h3>
          <span className="loginDesc">
            Connect with your teachers and classmates around the world
          </span>
        </div>
        <div className="loginRight">
          <div className="registerBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRigsterButton">
              Login to your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
