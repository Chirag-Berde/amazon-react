import React from 'react'
import features from "../images/features.png"

const Features = () => {
  return (
    <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 ps-5">
                  <div className="feature-section mt-5">
                  <h1 className='display-3 fs-1'>Livestream on amazon</h1>
                  <h3 className='display-1 fs-4'>Engage with shppers in real time and drive <br />sales with interactive livestreams</h3>
                  <button type="button" class="btn btn-warning mt-4 ps-5 pe-5">Explore &rarr;</button>
                  </div>
            </div>
            <div className="col-md-6 ">
                    <img className='pe-5 w-100' src={features} alt="feature" />    
            </div>
        </div>
    </div>
    </>
  )
}

export default Features