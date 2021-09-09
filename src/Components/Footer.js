import React from 'react'

export default function Footer() {
    return (
        <div className="container-fluid" id="footer">
            <div className="row">
                <div className="col-md-3">
                    <div className="footLogo">
                        <img src="./images/white-logo.svg" alt=""/>
                    </div>

                    <div className="d-flex justify-content-space-between socail-logo">
                        <a href="#"><img src="./images/facebook.svg" class="social-logo1" alt=""/> </a>
                        <a href="#"><img src="./images/twitter.svg" class="social-logo1" alt=""/></a>
                        <a href="#"><img src="./images/instagram.svg" class="social-logo1" alt=""/></a>
                    </div>
                </div>

                <div className="col-md-3">
                    <h2><a class="nav-link" href="#home">Quick Links</a></h2>
                    <p><a class="nav-link" href="#home">Home</a></p>
                    <p><a class="nav-link" href="#features">Features</a></p>
                    <p><a className="nav-link" href="#FAQs">Terms of Service</a></p>
                    <p><a className="nav-link" href="#FAQs">Privacy Policy</a></p>
                </div>
                <div className="col-md-3">
                    <h2><a class="nav-link" href="#FAQs">Get Help</a></h2>
                    <p><a class="nav-link" href="#FAQs">Support</a></p>
                    <p><a class="nav-link" href="#FAQs">FAQs</a></p>
                </div>
                <div className="col-md-3">
                    <h2><a class="nav-link" href="#FAQs">Newsletter</a></h2>
                    <div className="" style={{display: "inline"}}>
                        <input type="text" placeholder="Send us your feedback..." className="form-control ms-lg-0 "/>
                        <button className="footer-btn shadow-lg  px-lg-5">Submit</button>
                    </div>
                </div>


            </div>


        </div>


    )
}
