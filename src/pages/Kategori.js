import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"

function Kategori() {
    useEffect(() =>{
        AOS.init();
    })
    return (
        <section style={{padding: "100px 50px 0 50px"}} className="container">
        <h4 style={{padding:"5% 0"}} className="mb-3 font-weight-medium">
            <b>Reedem Terpopuler</b>
            </h4>
        <div className="row justify-content-md-center">
                <div data-aos="zoom-in" data-aos-duration="1000"  className="col-sm">
                    <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                        src="images/phone.jpg"
                        style={{width:"250px", borderRadius:"15px"}}
                        className="img-cover"
                        />
                    </figure>

                <div className="meta-wrapper">
                    <h5 className="h4">Iphone</h5>
                    <span className="text-gray-500">
                        Point : 7000000000
                    </span>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000"  className="col-sm">
                    <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                        src="images/wacom.jpg"
                        style={{width:"250px",borderRadius:"15px"}}
                        className="img-cover"
                        />
                    </figure>

                <div className="meta-wrapper">
                    <h5 className="h4">Wacom</h5>
                        <span className="text-gray-500">
                        Point : 5000000
                        </span>
                    </div>
                    </div>

                <div data-aos="zoom-in" data-aos-duration="1000"  className="col-sm">
                    <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                        src="images/phone.jpg"
                        style={{width:"250px",borderRadius:"15px"}}
                        className="img-cover"
                        />
                    </figure>

                    <div className="meta-wrapper">
                        <h5 className="h4">Iphone</h5>
                        <span className="text-gray-500">
                        Point : 7000000
                        </span>
                    </div>
                    </div>
        </div>

        <h4 style={{padding:"5% 0"}} className="mb-3 font-weight-medium">
            <b>Reedem Tergokil</b>
            </h4>
        <div className="row justify-content-md-center">
                <div data-aos="zoom-out" data-aos-duration="1000"  className="col-sm">
                    <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                        src="images/phone.jpg"
                        style={{width:"250px",borderRadius:"15px"}}
                        className="img-cover"
                        />
                    </figure>

                    <div className="meta-wrapper">
                        <h5 className="h4">Iphone</h5>
                        <span className="text-gray-500">
                        Point : 7000000000
                        </span>
                    </div>
                    </div>

                    <div data-aos="zoom-out" data-aos-duration="1000" className="col-sm">
                    <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                        src="images/wacom.jpg"
                        style={{width:"250px",borderRadius:"15px"}}
                        className="img-cover"
                        />
                    </figure>

                    <div className="meta-wrapper">
                        <h5 className="h4">Wacom</h5>
                        <span className="text-gray-500">
                        Point : 5000000
                        </span>
                    </div>
                    </div>

                    <div data-aos="zoom-out" data-aos-duration="1000" className="col-sm">
                    <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                        src="images/phone.jpg"
                        style={{width:"250px",borderRadius:"15px"}}
                        className="img-cover"
                        />
                    </figure>

                    <div className="meta-wrapper">
                        <h5 className="h4">Iphone</h5>
                        <span className="text-gray-500">
                        Point : 7000000
                        </span>
                    </div>
                    </div>
        </div>
    </section>
    )
}


export default Kategori
