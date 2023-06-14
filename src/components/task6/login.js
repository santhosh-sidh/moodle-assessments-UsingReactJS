import React from "react";
import Lap from './laptop.png';
import './login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons"

function Login() {
    return (

        <>
            <div className="container-fluid gradient pt-5">
                <div className="loginPage row bg-light ">
                    <div className="lap_img col-lg-5">
                        <img src={Lap} className="Lap_img" alt="" />
                    </div>
                    <div className="LogPage col-lg-7">
                        <h2>Member Login</h2>
                        <div className="d-flex inputtext">
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input type="text" className="inp_name" placeholder="Email" /><br />
                            </p>
                        </div>
                        <div className="d-flex inputtext">
                            <p>
                                <FontAwesomeIcon icon={faLock} />
                                <input type="text" className="inp_pass" placeholder="Password" /><br />
                            </p>
                        </div>
                        <button className="log_btn bg-success text-white">LOGIN</button>
                        <p>Forget <span>Username/Password?</span></p><br />
                        <span>Create Your Account</span>
                    </div>
                </div>
            </div>
        </>

    );

}
export default Login;