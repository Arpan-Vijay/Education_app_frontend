import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEmail } from './EmailContext.js'; // Adjust the path accordingly
import axios from 'axios';
import { MdEmail } from 'react-icons/md'; // Import MdEmail
import '../../Styles/ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(''); // New state for error handling
    const { setEmail: setEmailContext } = useEmail();
    const navigate = useNavigate();

    const handleRequestOTP = async () => {
        try {
            // Check if the email exists in the database
            const response = await axios.post('http://localhost:3001/api/check-email-exists', { email: email });
            const { exists } = response.data;

            if (exists) {
                // If the email exists, send a request to the server to send OTP
                const otpResponse = await axios.post('http://localhost:3001/api/send-otp', { email: email });
                console.log(otpResponse.data.message);

                // Set the email in the context using setEmail from useEmail
                setEmailContext(email);

                // Redirect to the OTP verification page
                navigate('/verify-otp');
            } else {
                // Handle the case when the email does not exist in the database
                setError('Entered email does not exist.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error, e.g., show an error message to the user
            setError('An error occurred during the OTP request. Please try again.');
        }
    };

    return (
        <div className='forgot'>
            <div className="forgot_container">
                <div className="forgot_glass">
                    <div className="forgot_title">
                        <h4 className="forgot_heading">Forgot Password? 🔒</h4>
                        <span className='forgot_subheading'>
                            Enter your email address here, and we'll send you an email to reset your password.
                        </span>
                    </div>

                    <div className="forgot_form">
                        {/* Use MdEmail icon here */}
                        <div className="forgot_input_box">
                            <MdEmail className="forgot_icon" />
                            <input
                                type="email"
                                className='forgot_textbox'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {error && <div className="forgot_error_message">{error}</div>}

                        <button className='forgot_button' onClick={handleRequestOTP}>
                            <span>Request OTP</span>
                        </button>
                    </div>

                    <div className="forgot_trigger">
                        <span>
                            <Link className='forgot_trigger_btn' to='/login'>Back to LogIn</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
