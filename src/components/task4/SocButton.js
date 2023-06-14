import React from "react";
import './SocButton.css';

function SocialButton(){
    return(
       <div className=" container-fluid maindiv2">
        <div className="maind">
            <h1 className="text-white">Social Button</h1>
            <button className="bg-warning btn1">Like</button>
            <button className="bg-light btn2 ">Comment</button>
            <button className="bg-primary btn3 ">Share</button>
       </div>
       </div>
    );
}
export default SocialButton;