import React from "react";
import './Greeting.css';
import background from './congrats-card-bg.png';
import profile from './congrats-card-profile-img.png';
import watch from './congrats-card-watch-img.png';

function Greeting(){
    return(
        <>
        <div class="container_fluid maindiv text-center">
            <h1 className="greet">Congratulations</h1>
            <div className="backGround">
                    <img src={profile} className="img1"alt=""/>
                    <h5>Vishnu Institute of Computer Education And Technology,</h5>
                    <h5>Bhimavaram</h5>
                    <img src={watch} alt=""/>
            </div>
        </div>
        </>
    );
}
export default Greeting;