import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide frameimg " data-ride="carousel"> 
        <div className="carousel-inner w-100 ">
        <div className="carousel-item active">
            <img className="d-block w-100" src="../../../public/img/AboutFrame1.png" alt="frame1" />
        </div>
        <div className="carousel-item ">
            <img className="d-block w-100" src="../../../public/img/AboutFrame2.png" alt="frame2" />
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="../../../public/img/AboutFrame3.png" alt="frame3" />
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="../../../public/img/AboutFrame4.png" alt="frame4" />
        </div>
        </div> 
        <div className='w-75'>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />  
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />  
        </a> 
        </div>
    </div>
  )
}

export default Carousel;