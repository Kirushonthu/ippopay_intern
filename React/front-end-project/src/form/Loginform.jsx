import React, { useState } from 'react';
import './Loginform.css';

import Eyeclose from "../images/Eyeclose.svg";
import Eyeopen from "../images/Eyeopen.svg";

function Loginform({ setIsLoggedIn }) {

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    };

    return (
        <div className="container">
            <form className="login-form" onSubmit={handleSubmit}>

                <h3>Log in</h3>

                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" required />
                </div>

                <div className="field">
                    <label htmlFor="pass">Password</label>

                    <div className="password-box">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="pass"
                            name="pass"
                            required
                        />

                        <img
                            src={showPassword ? Eyeopen : Eyeclose}
                            alt="eye"
                            className="eye"
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>
                </div>
                
                <div className="password">
                    <a href="#">Forgot Password?</a> <br /><br />
                </div> 
                
                <div className="terms">
                    <input type="checkbox" id="check" />
                    <label htmlFor="check"> By clicking Log in, you agree to our <a href="#"> Terms</a>, <a href="#"> Policy </a> and receive text messages from Parknstays.
                    </label>
                </div>

                <button type="submit" className='logbutton'>Log in</button>

            </form>
        </div>
    );
}

export default Loginform;
