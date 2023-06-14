import React, { useState , useEffect} from "react";


function Api(){
    const[details,setDetails] = useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>setDetails(data))
    })
    

    return(
        <>
        <div className="row justify-content-around">
        {details.map((value,index)=>(
            <>
               
    <div className="card col-lg-4" style={{width: "18rem"}}>
  <img src={value.image} height={200} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" height={200}>Title:{value.title}</h5>
    <h5 className="card-title" height={200}>Price:{value.price}</h5>
    <p className="card-text" height={200}>Description:{value.description}</p>
    <p className="card-text" height={200}>Category:{value.category}</p>
    <p className="card-text" height={200}>Rate:{value.rating.rate}</p>
    <p className="card-text" height={200}>Count:{value.rating.count}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>

            </>     

        ))}
        </div>
        </>


    );


}
export default Api;