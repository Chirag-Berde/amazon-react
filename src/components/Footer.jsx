import React from 'react'
import logo from "../images/logo.png"

const Footer = () => {
  return (
    <>
     <footer className="bg-dark text-white pt-5 pb-5 footer-custom mt-5 " id="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <img src={logo} alt="Logo" width="120" height="40" className="d-inline-block align-text-top"/>
                </div>
                <div className="col-md-3">
                    <div className="footer-section">
                        <ul>
                            <li><strong> General</strong></li>
                            <li>Sign Up</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Help center</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-section">
                        <ul>
                            <li><strong> Shop Now</strong></li>
                            <li>Learning</li>
                            <li>Jobs</li>
                            <li>Salary</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-section">
                        <ul>
                            <li><strong> Connect with Us</strong></li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="developer-custom text-center fs-">@ChiragCoding'sSpot</div>
        </div>
    </footer>
    </>
  )
}

export default Footer