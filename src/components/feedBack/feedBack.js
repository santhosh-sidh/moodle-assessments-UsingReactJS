import React from "react";
import Sad from './sad.webp'
import None from './none.webp'
import Happy from './happy.webp';
import './feedBack.css';
import { Link } from "react-router-dom";

function FeedBack(){
    return (
        <>
            <div className="feedbodydiv p-5">
                <div className="bg-light">
                    <h1 className="text-center p-5">How satisfied are you with our customer support performance?</h1>
                    <div className="row justify-content-center p-5">
                        <div className="col-lg-3 p-5 text-warning feedfont text-center">
                        <Link to="/FeedNext"><img src={Sad} alt="no images found" width="120"/><br/>
                            <label className="text-dark feedlabel">SAD</label></Link>
                        </div>
                        <div className="col-lg-3 p-5 text-warning feedfont">
                            <Link to="/FeedNext"><img src={None} alt="no images found" width="125"/><br/>
                            <label className="text-dark feedlabel">NONE</label></Link>
                        </div>
                        <div className="col-lg-3 p-5 text-warning feedfont">
                            <Link to="/FeedNext"><img src={Happy} alt="no images found" width="120"/><br/>
                            <label className="text-dark feedlabel">HAPPY</label></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeedBack;