import React from 'react'
import "./home.css"
import headphone from "../assets/purepng.com-headphoneelectronics-headset-headphone-941524670117zoozj.png"
import { Link } from 'react-router-dom'

const Home = () => {
  
  return (
    <>
    <div className="container home">
    <div className="row">
        <div className="col-md-7  headphone">
            <img src={headphone} alt="headphone" className='img-fluid'/>
        </div>
        <div className="col-md-5  designed">
            <p className='para'>Designed For <br />Your <span className='span'>Quality</span> <br /> <span className='span'>Music</span></p>
            <p className='para1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Odit illum consectetur.</p>
            <div className="buttons">
                <Link to="/explore-headphone-result" className='buton1'>Buy Now</Link>
                <Link to="/explore" className='buton2'>Explore</Link>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Home