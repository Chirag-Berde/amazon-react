import React from 'react'
import prime from "../images/primevideo.jpeg"
import Features from './Features'


const Pricing = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 ps-5">
                        <img src={prime} alt="prime" width={400} />
                    </div>
                    <div className="col-md-6 p-4">
                        <h1 className='display-5 fs-1  ps-4'>  Watch Amazon Prime </h1>
                        <button type="button" class="btn btn-warning mt-4 ms-4 ps-4 pe-4">Watch Now &rarr;</button>
                    </div>
                </div>
            </div>
            <Features/>
        </>
    )
}

export default Pricing