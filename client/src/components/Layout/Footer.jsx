import React from 'react'
import Connect from '/Connect.png'

const Footer = () => {
  return (
    <footer className='bg-dark d-flex flex-column justify-content-center align-items-center' style={{height:"32vh", color: "#FFFFFF" }}>
            <div className='fs-1 mb-3' >PISTONS</div>
            <div className='fs-3 mb-3' >STAY CONNECTED</div>
            <img src={Connect} className='connectlogo me-2 mt-1 mb-3' alt="Connect logo"/>
    </footer>
  )
}

export default Footer