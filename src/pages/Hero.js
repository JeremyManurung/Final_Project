import React from 'react'
import { useEffect } from 'react';
import SHeader from './SHeader'
import Kategori from './Kategori'
import SFooter from './SFooter'
import Footer from './Footer'
import AOS from "aos";
import { Link, NavLink } from 'react-router-dom';
import "aos/dist/aos.css"

function Hero() {
    useEffect(() =>{
        AOS.init();
    })

    
    return (
        <div>
            <SHeader/>
            <section className='container'>
                <div className='row align-items-center'>
                    <div data-aos="fade-up" data-aos-duration="1000" className='col-auto pr-5' style={{width:422}}>
                        <h1 className='h2 font-weight-bold line-height-1 mb-3'>
                            Loyality Point Agent,<br/>
                            Start Reedem Your Point
                        </h1>
                        <p className='mb-5 font-weight-light text-grey-500 w-75'>
                            redeem your points and get attractive, extraordinary prizes that can make the day bright and colorful
                        </p>
                        <Link
                        to="/"
                        style={{backgroundColor:"#FF872E", textDecoration:"none"}}
                        class="inline-block border hover:bg-white hover:bg-opacity-25 text-white font-light w-50 text-center px-6 py-1 text-lg rounded-full"
                        >
                        Show Me More
                        </Link>
                    </div>

                <div className="col-6 pl-5">
                <div data-aos="fade-left" data-aos-duration="1000" style={{ width: 520, height: 410 }}>
                <img
                src="images/right-img.jpg"
                className="img-fluid position-absolute"
                style={{borderRadius:15,width: 587, height: 368,margin: "80px 0px 0px -30px", zIndex: 1 }}
                />
                
                <img
                src="images/frame.jpg"
                className="img-fluid position-absolute"
                style={{width: 569, height: 368 ,margin: "110px -15px -15px 0px"}}
                />
            </div>
          </div>
                </div>
            </section>
            <Kategori/>
            <SFooter/>
            <Footer/>
        </div>
    )
}

export default Hero