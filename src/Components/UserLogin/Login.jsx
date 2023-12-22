// Login.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Styles/Login.css';
import axios from 'axios';
import avatar from '../../assets/teacher_img.png';
import { BsEyeFill, BsEyeSlashFill, BsFillPersonFill } from 'react-icons/bs';
import { MdSchool } from 'react-icons/md';

const Login = () => {
  const [greeting, setGreeting] = useState('');
  const [credentials, setCredentials] = useState({
    sap_id: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // useEffect to update the greeting message and set an interval to keep it updated
  useEffect(() => {
    const updateGreeting = () => {
      const currentTime = new Date().getHours();
      if (currentTime >= 5 && currentTime < 12) {
        setGreeting('Good Morning!🌅');
      } else if (currentTime >= 12 && currentTime < 18) {
        setGreeting('Good Afternoon!☀️');
      } else {
        setGreeting('Good Evening!🌙');
      }
    };

    // Initial call to set the greeting when the component mounts
    updateGreeting();

    // Update the greeting every minute
    const intervalId = setInterval(updateGreeting, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // useEffect for Axios interceptor logic
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        // Add configurations here
        const token = localStorage.getItem('auth');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    return () => {
      // Cleanup the request interceptor
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  // Function to handle login form submission

  const handleLogin = (event) => {
    event.preventDefault();
  
    axios
      .post('http://localhost:3001/login', credentials)
      .then((res) => {
        console.log('Login Response:', res); // Log the entire response for debugging
  
        if (res.data.success) {
          // Successful authentication
          // Access token with res.data.token
          localStorage.setItem('auth', res.data.token);
          // Navigate to home without passing First_Name in the route
          navigate('/home');
        } else {
          setError('Sap ID or password is incorrect');
        }
      })
      .catch((err) => {
        console.error('Login Error:', err); // Log the error for debugging
        setError('Sap ID or password is incorrect');
      });
  };
  
  

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // JSX rendering of the component
  return (
    <div className="login">
      <div className="login_container">
        <div className="login_glass">
          <div className="login_title">
            <h4 className="login_heading">{greeting}</h4>
            <span className="login_subheading">LogIn</span>
          </div>

          <div className="login_image">
            <img src={avatar} className="profile_img" alt="Teacher Avatar" />
          </div>

          {error && <div className="login_error_message">{error}</div>}

          <div className="login_form">

            {/* Name input with icon */}
            <div className="login_password_input">
              <BsFillPersonFill className="login_icon" />
              <input
                type="text"
                className="login_textbox"
                placeholder="User Id"
                value={credentials.sap_id}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    sap_id: e.target.value,
                  })
                }
              />
            </div>

            {/* Password input with eye toggle */}
            <div className="login_password_input">
              <span className="login_icon" onClick={handleTogglePasswordVisibility}>
                {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
              </span>

              <input
                type={showPassword ? 'text' : 'password'}
                className="login_textbox"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    password: e.target.value,
                  })
                }
              />
            </div>

            {/* Button to submit the login form */}
            <button className="login_button" type="submit" onClick={handleLogin}>
              Log In
            </button>
          </div>

          <div className="login_trigger">
            <span>
              <Link className="login_trigger_btn" to="/forgotPassword">
                Forgot Password?
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
