import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import '../Styles/HomePage.css'
import About from '../About';
import Testimonial from '../Testimonial';
import Curvetext from '../Curvetext';

const Homepage = () => {

  const ImageCarousel = ["../../../public/img/AboutFrame1.png", "../../../public/img/AboutFrame1.png", "../../../public/img/AboutFrame1.png","../../../public/img/AboutFrame1.png"]
  return (
    <Layout>
      <div className='container-fluid'>
      <div className="row"> 
        <div className="sticky col-md-12 row">
          <div className="col-md-6 p-0 position-relative ">
              <img src="../../../public/img/image1.png" className="img-fluid homeimg" alt="Image 1" /> 
              <div className="oxygen position-absolute start-50 text-white w-75 d-flex flex-column justify-content-center align-items-center" style={{
                transform: 'translateX(-50%)',letterSpacing:"2px", bottom:"200px", fontSize:'35px'}}> 
                <Curvetext/>
              </div>
              <div className="pridi textonimg pistons position-absolute start-50 text-white" style={{
                transform: 'translateX(-50%)', bottom:"90px", fontSize:"35px"}}> PISTONS </div>
          </div>
           <div className="col-md-6 p-0 position-relative" style={{fontstyle: "normal"}}>
              <img src="../../../public/img/image2.png" className="img-fluid homeimg" alt="Image 2" /> 
              <div className="oxygen textonimg position-absolute start-50 text-white" style={{
                transform: 'translateX(-50%)', bottom:"170px",}}> YOU WERE MADE TO </div>
              <div className="oxygen textonimg position-absolute start-50 text-white" style={{
                transform: 'translateX(-50%)', bottom:"135px"}}> MAKE AN IMPACT. </div>
              <div className='oxygen whitebtn position-absolute start-50' style={{transform: "translateX(-50%)"}}>SHOP PEN</div>
          </div>
        </div>

        <div className="sticky col-md-12 row"  style={{fontstyle: "normal"}}>
          <div className="col-md-6 p-0 position-relative">
              <img src="../../../public/img/image3.png" className="img-fluid homeimg" alt="Image 3" /> 
              <div className="oxygen textonimg position-absolute start-50" style={{
                transform: 'translateX(-50%)',bottom:"170px", color:"black"}}> MADE FOR THE BEST </div>
              <div className="oxygen textonimg position-absolute start-50" style={{
                transform: 'translateX(-50%)',bottom:"135px", color:"black"}}> CHANGE MAKERS. </div>
              <div className='oxygen blackbtn position-absolute start-50'>SHOP BRANDS</div>
          </div>
          <div className="col-md-6 p-0">
              <img src="../../../public/img/image4.png" className="img-fluid homeimg" alt="Image 4" /> 
          </div>
        </div>

        <div className="sticky col-md-12 row">
          <div className="col-md-6 p-0">
              <img src="../../../public/img/image5.png" className="img-fluid homeimg" alt="Image 5" /> 
          </div>
          <div className="col-md-6 p-0 position-relative">
              <img src="../../../public/img/image6.png" className="img-fluid homeimg" alt="Image 6" />
              <div className="oxygen textonimg position-absolute start-50 text-white" style={{
                transform: 'translateX(-50%)', bottom:"135px"}}> SAVOUR THE PRESENT. </div>
              <div className='oxygen whitebtn position-absolute start-50' style={{transform: "translateX(-50%)"}}>SHOP MONT BLANC</div> 
          </div>
        </div>
        <div className="sticky col-md-12 d-flex flex-column">
        <div className='col-md-12 p-0 m-0 h-100 w-100'>
          <div className="col-md-12 p-0 position-relative">
              <img src="../../../public/img/image7.png" className="img-fluid homeimg" alt="Image 7" /> 
              <div className='textbutton hidemoblie position-absolute h-75 w-75 start-50 top-50 text-white d-flex flex-column justify-content-center align-items-center' style={{
                transform: 'translate(-50%, -50%)', fontSize:"35px"}}>
                <div className='hidemoblie'>WHERE QUALITY MEETS CLASS.</div>
                <div className='curvedtext hidemoblie'><Curvetext/></div> 
                <div className="pridi textonimg text-white pb-5 hidemoblie" style={{fontSize:"35px"}}> PISTONS </div>
                <div className='whitebtn hidemoblie'>SHOP THE FALL 2023 COLLECTION</div>
              </div>
          </div>
        </div>
        <div className="col-md-12 p-0 m-0 h-100 w-100">
          <div className="col-md-12 p-0 w-100 h-100 position-relative ">
            <img src="../../../public/img/black2.png" className="img-fluid homeimg blackbox" alt="Image 7" />
            <div className='textbutton position-absolute start-50 top-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center' style={{
              transform: 'translate(-50%, -50%)', fontSize:"35px"}}>
              <div className='h-75 w-75 text-white d-flex flex-column justify-content-center align-items-center'>
                <div className='textonimg hidepc'>WHERE QUALITY MEETS CLASS.</div>
                <div className='curvedtext hidepc'><Curvetext/></div> 
                <div className="pridi hidepc textonimg pistons text-white pb-5" style={{fontSize:"35px"}}> PISTONS </div>
                <div className='whitebtn hidepc textonimg'>SHOP THE FALL 2023 COLLECTION</div>
              </div>
            </div> 
          </div>
        </div>
        </div>
        


        <div className="about sticky col-md-12 bg-light row d-flex flex-column justify-content-center align-items-center" id='about'>  
          <About/>  
          <hr></hr>
          <Testimonial/>
        </div>
        
      </div>
      </div>
    </Layout>
  )
}

export default Homepage;