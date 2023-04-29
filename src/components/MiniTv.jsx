import React from 'react'
import minione from "../images/miniOne.jpg"
import minitwo from "../images/miniTwo.jpg"
import minithree from "../images/miniThree.jpg"
import minifour from "../images/miniFour.jpg"
import minifive from "../images/miniFive.jpg"
import minisix from "../images/miniSix.jpg"

const MiniTv = () => {
    return (
        <>
            <div className="container mini-tv">
                <h1 className='display-3 fs-1 mt-4'>Trending Top 10 on Mini TV</h1>
                <hr />
                <div className="row mt-5">
                    <div className="col-md-4">
                        <img src={minione} alt="one" width={350}/>
                    </div>
                    <div className="col-md-4 ">
                        <img className='ms-4' src={minitwo} alt="two" width={350}/>
                    </div>
                    <div className="col-md-4">
                        <img className='ms-5' src={minithree} alt="three" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5 ">
                        <img  src={minifour} alt="four" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-4' src={minifive} alt="four" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={minisix} alt="four" width={350}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniTv