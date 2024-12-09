'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [activeLogin, setActiveLogin] = useState('admin');

  const toggleLogin = (type) => {
    setActiveLogin(type);
  };

  return (
    <div className="login-page">
      <div className="toggle-container">
        <button 
          className={`toggle-btn ${activeLogin === 'admin' ? 'active' : ''}`} 
          onClick={() => toggleLogin('admin')}
        >
          Admin Login
        </button>
        <button 
          className={`toggle-btn ${activeLogin === 'student' ? 'active' : ''}`} 
          onClick={() => toggleLogin('student')}
        >
          Student Login
        </button>
      </div>

      <div 
        className="login-container" 
        id="admin-login" 
        style={{ display: activeLogin === 'admin' ? 'block' : 'none' }}
      >
        <div className="login-header">
          <h1>Admin Login</h1>
          <p>Please login to access admin panel</p>
        </div>
        <form action="./Admin/admin-dashboard.html">
          <div className="form-group">
            <label htmlFor="admin-username">Admin Username</label>
            <input type="text" id="admin-username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="admin-password">Password</label>
            <input type="password" id="admin-password" name="password" />
          </div>
          <button type="submit" className="login-btn">Login as Admin</button>
        </form>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </div>

      <div 
        className="login-container" 
        id="student-login"
        style={{ display: activeLogin === 'student' ? 'block' : 'none' }}
      >
        <div className="login-header">
          <h1>Student Login</h1>
          <p>Please login to access library services</p>
        </div>
        <form action="./Student/student-login.html">
          <div className="form-group">
            <label htmlFor="student-username">Student ID</label>
            <input type="text" id="student-username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="student-password">Password</label>
            <input type="password" id="student-password" name="password" />
          </div>
          <button type="submit" className="login-btn">Login as Student</button>
        </form>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
} 