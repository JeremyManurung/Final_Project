import React from 'react'

function SFooter() {
    

    return (
        <div >
            <section className='container'>
                <div style={{paddingBottom:"10%",paddingTop:"5%"}} className='row align-items-center'>
                    <div className="col-6 pl-5">
                <div style={{ width: 520, height: 410 }}>
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
                
                    <div className='col-auto pr-5' style={{width:422}}>
                        <h1 className='h2 font-weight-bold line-height-1 mb-3'>
                            Loyality Point Agent,<br/>
                            Start Reedem Your Point
                        </h1>
                        <p className='mb-5 font-weight-light text-grey-500 w-75'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy.
                        </p>
                        <a
                        style={{backgroundColor:"#FF872E", textDecoration:"none"}}
                        href="/login.html"
                        class="inline-block border hover:bg-white hover:bg-opacity-25 text-white font-light w-50 text-center px-6 py-1 text-lg rounded-full"
                        >
                        Show Me More
                        </a>
                    </div>
        </div>
        </section>
        </div>
    )
}

export default SFooter
