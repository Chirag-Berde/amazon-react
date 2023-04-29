import React from 'react'
import banner from "../images/banner.jpg"
import Card from 'react-bootstrap/Card';
import Features from './Features';
import Pricing from './Pricing';


const Home = () => {
  return (
    <>
      <div className="cotainer-fluid ">
        <Card className="bg-dark text-white border-0">
          <Card.Img src={banner} alt="Card image" height={500} />
        </Card>
      </div>
      <Features/>
      <Pricing/>
    </>
  )
}

export default Home