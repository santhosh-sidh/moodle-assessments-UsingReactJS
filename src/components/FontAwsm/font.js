import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck,faBell,faCircleXmark} from '@fortawesome/free-regular-svg-icons'

import './font.css'


function Fonts(){
    return(
    <>
    <div className="container-fluid text-center ">
        <div>
            <h1>Notification</h1>
            <div className="maindi">
            <div className="box row bg-primary text-white my-5">
            <FontAwesomeIcon icon={faCircleCheck} className="icon1" />
            <h5 className="pl-3">Information Message</h5>
            </div>
            <div className="box row bg-success text-white my-5">
            <FontAwesomeIcon icon={faCircleCheck} className="icon1" />
            <h5 className="pl-3">Success Manager</h5>
            </div>
            <div className="box row bg-warning text-white my-5">
            <FontAwesomeIcon icon={faBell} className="icon1" />
            <h5 className="pl-3">Information Message</h5>
            </div>
            <div className="box row bg-danger text-white my-5">
            <FontAwesomeIcon icon={faCircleXmark} className="icon1" />
            <h5 className="pl-3">Information Message</h5>
            </div>
            </div>
        </div>

    </div>
    </>
    );
}
export default Fonts;