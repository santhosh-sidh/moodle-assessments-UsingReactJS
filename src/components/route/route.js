import React from "react";
import { Link } from "react-router-dom";
import './route.css';

function Route1(){
    return(
        <>
        <div className="navdiv bg-primary row">
        <Link to="/Hello"> <p>Hello</p></Link>
        <Link to="/Greeting"> <p>Greetings</p></Link>
        <Link to="/League"> <p>League</p></Link>
        <Link to="/SocButton"> <p>SocButtons</p></Link>
        <Link to="/Font"> <p>Notification</p></Link>
        <Link to="/Login"> <p>LoginForm</p></Link>
        <Link to="/TechCard"><p>TechCard</p></Link>
        <Link to="/Hooks"><p>Hooks</p></Link>
        <Link to="/Fruits"><p>FruitCounter</p></Link>
        <Link to="/Api"><p>APICalling</p></Link>
        
        {/* <Link to="/FeedBack"><p>FeedBackApp</p></Link> */}
        </div>
        </>
    );
}
export default Route1;