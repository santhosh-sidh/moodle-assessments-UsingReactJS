import React from "react";
import './techCard.css';
import TechImg from './TechImg.jpeg';
import TechImg1 from './Devloper.jpeg';
import TechImg2 from './VR dev.jpeg'
import TechImg3 from './ML.jpeg'


function TechCard(){
    return(
        <div className="container-fluid TechMain ">
            <div className="text-center">
            <h1>Learn 4.0 Technologies</h1>
            <p>Get trained by alumini of IIT's and top Companies like Amazon,Microsoft,Google,Facebook,etc.Learn directly from professionals involved in product</p>    
            </div> 
            <div className="TechCards row col-lg-12  justify-content-around">
                <div className="col-lg-5 col-md-12 col-sm-12 TechCards1 bg-light text-dark mt-3 ">
                    <h2 className="mx-4">Data Scientist</h2>
                    <p>Data scientist Gather and analise large set of structured and unstructured datas</p>
                    <img src={TechImg} className=" TechImg col-5"/>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12  TechCards2 bg-light text-dark mt-3">
                    <h2 className="mx-4 ">IOT Developer</h2>
                    <p>Data scientist Gather and analise large set of structured and unstructured datas</p>
                    <img src={TechImg1} className="TechImg col-5"/>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 TechCards3 bg-light text-dark mt-3">
                    <h2 className="mx-4">VR Developer</h2>
                    <p>Data scientist Gather and analise large set of structured and unstructured datas</p>
                    <img src={TechImg2} className="TechImg col-5"/>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 TechCards4 bg-light text-dark mt-3">
                    <h2 className="mx-4">ML Engineer</h2>
                    <p>Data scientist Gather and analise large set of structured and unstructured datas</p>
                    <img src={TechImg3} className="TechImg col-5"/>
                </div>
            </div>
        </div>
    );
}
export default TechCard;