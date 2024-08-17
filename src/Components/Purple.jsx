import React, { useState } from "react";

import { Link, Outlet, Router  } from 'react-router-dom';

const Purple = () => {
    const [img,Setimg]= useState(require('../Components/images/purple1.jpeg'));
    const [imgsm,Setimgsm]= useState(require('../Components/images/purple2.jpeg'));
    const [imgsm1,Setimgsm1]= useState(require('../Components/images/purple3.jpeg'));
    const [imgsm2,Setimgsm2]= useState(require('../Components/images/purple4.jpeg')) ;

    const [Count,Setcount]=useState(0)

    const plus =() =>{

        Setcount(Count  +1)
    }
    const minus =() =>{

        Setcount(Count  -1)
    }


    const img1= ()=> {

        let img1 =(require('../Components/images/purple2.jpeg'))

    
       Setimg(img1)
      
    
   }
   const img2= ()=> {

       Setimg(require('../Components/images/purple3.jpeg'));
   }
   const img3= ()=> {

       Setimg(require('../Components/images/purple4.jpeg'))
   }
   const img4= ()=> {

       Setimg(require('../Components/images/purple1.jpeg'))
   }



    return( <>

  
        <div className="container">
        <div className="row">
            <div className="col-lg-6 set-main">
                <div className="main">
                    <img onClick={img4} src={img} alt="no image"className="main-img mt-1"></img>
                </div>
                <div className="main-1 ms-2">
                <img onClick={img1} src={imgsm} className="small-img mt-1"></img><br/>
                 <img onClick={img2} src={imgsm1} className="small-img mt-1"></img><br/>
                <img onClick={img3} src={imgsm2} className="small-img mt-1"></img>

                </div>
               
                

            
            </div>
            <div className="col-lg-6">
                <h1>Nike Air Force</h1>
                <p> NIke Airforce 1 mid By men's custom Shoes</p>

                    <h3>$ 152.49</h3>
               
                <div className="yes">
                {/* <p  className=" me-2">Color</p> */}
                <Link to="/">  <div  className="color me-2"></div></Link>

                <Link to="/purple"> <div  className="color1 me-2"></div></Link>

                <Link to="/black" > <div className="color2 me-2"></div></Link>

                <Link to="/green" >  <div className="color3 me-2"></div></Link>
                </div>
              

                < p className="mt-2">The radiance lives on in the Nike Air Force 1 '07, the basketball original 
                    that puts a fresh spin on what you know best: durably stitched overlays,
                     clean finishes and the perfect amount of flash to make you shine.</p>
                     <h5>Choose Size</h5>
                     <button className="me-2 btn btn-light">6UK</button>
                     <button className="me-2 btn btn-light">7UK</button>
                     <button className="me-2  btn btn-light">8UK</button>
                     <button className="me-2 btn btn-light">9UK</button>
                     <button className="me-2 btn btn-light">10UK</button><br/>
                     <div className="btn-3">
                     <button onClick={minus} className="btn btn-primary me-2 mt-3  ">-</button>
                <h3 className=" count bg-light me-2 ">{Count}</h3>
                     <button onClick={plus} className="btn btn-primary me-2 mt-3">+</button>

                     </div>
                   
                <button className="btn btn-primary me-2 mt-3">Add to cart</button>
                <button className="btn btn-primary mt-3">Add to Wishlist</button>
            </div> 
            
        </div>
       </div>
       </>
    )
}

export default Purple;