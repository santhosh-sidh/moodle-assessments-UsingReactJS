import React from "react";
import './league.css'
import RCB from './rcb-img.png'
import CSK from './csk-img.png'

function League(){
    return(
        <div className="maindiv1">
            <div><h1>SUPER OVER LEAGUE</h1></div>
            <div>
                <img src={RCB} class="img" alt=""/>
                <img src={CSK} class="img" alt=""/>
                
            </div>
        </div>
    );
}
export default League;