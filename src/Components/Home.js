import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div data-spy="scroll" data-target="#navbar-example" data-offset="0">

            <div className="container-fluid px-0">
                <section>
                    <div id="home" className="row justify-content-center d-flex flex-wrap">
                        <div className="col-sm-6 first-content">

                            <div className="row d-flex">

                                <h1>Amazing App for Reporting Emergency</h1>
                                <p style={{textAlign: "justify"}}> Faced with an emergency situation, whether fire,
                                    health wise
                                    or in an armed robbery case, report emergency
                                    app got you covered</p>
                            </div>
                            <button className="holo-btn px-lg-5 shadow-sm" id="download-btn"> Download App</button>
                        </div>


                        <div className="col-sm-6">
                            <img className="img-heroic-app" src="./images/report-splash.svg" alt=""/>
                        </div>
                    </div>
                </section>
                {/* this is the end of home */}

                {/* this is the begining of features */}
                <section>
                    <div id="features" className="d-flex flex-column">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="col align-self-start">
                                <h1 className="text-center"> Alert a Family Member When in Distress</h1>
                                <p className="text-center">This feature enables you to register the details of a close
                                    relative in case of an emergency. A call is placed directly to the registered number
                                    to inform the person of your current situation and location.</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <img className="home-section2-image" src="./images/SingleIphone.svg" alt=""/>
                        </div>

                    </div>
                </section>
                {/* this is the end of features */}

                {/* this is the begining of FAQs */}
                <section>
                    <div id="FAQs" className="column">

                        <div className="usability">


                            <div className="row d-flex">

                                <div className="col-sm-6 ">

                                </div>
                                <div className="col-sm-6 inline">
                                    <img src="./images/bullet.svg" alt=""/>

                                    <h1> Easy Access to Call History</h1>
                                    <p> With the call log services, just like your
                                        phone call log, you will have access to
                                        previous emergency calls that you have made
                                        at a glance and at ease.
                                    </p>
                                </div>


                            </div>

                            <div className="row d-flex">

                                <div className="col-sm-6 inline">

                                    <img src="./images/bullet.svg" alt=""/><h1> Get the closest help within your Local
                                    Goverment Area</h1>
                                    <p> Emergency service agencies
                                        can be narrowed down based on one’s location.
                                    </p>

                                </div>
                                <div className="col-sm-6">

                                </div>


                            </div>


                            <div className="row d-flex">

                                <div className="col-sm-6"></div>
                                <div className="col-sm-6 inline">
                                    <img src="./images/bullet.svg" alt=""/><h1> Simple and Easy to use Interface</h1>
                                    <p> Navigation is made easy
                                        through a well thought out
                                        User experience for overall
                                        efficiency.
                                    </p>
                                </div>


                            </div>


                        </div>
                        {/*the end of the usability  */}

                        <div className="testimony">

                            <div>
                                <div id="carouselExampleDark" className="carousel carousel-dark slide"
                                     data-bs-ride="carousel">
                                    <div className="apprecation">
                                        <h1 className="text-center"> What our users are saying </h1>
                                    </div>

                                    <div className="carousel-inner ">


                                        <div className="carousel-item active" data-bs-interval="10000">

                                            <div>
                                                <p className="text-center" style={{color:'rgb(255, 255, 255, .8)'}}> Really nice app. This Report Emergency app
                                                    is really useful to reach emergency contacts in
                                                    my phone. Design of the app is also very clear
                                                    and easy to use.
                                                </p>


                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <img src="./images/Ellipse1.svg" className="d-block w-50" alt="..."/>
                                            </div>
                                            <h4 className="text-center"> Susan Adeleke</h4>
                                            <p className="text-center" style={{color:'rgb(255, 255, 255, .8)'}}> Secondary School Teacher</p>

                                        </div>


                                    </div>
                                    <button className="carousel-control-prev" type="button"
                                            data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button"
                                            data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>


                        </div>
                        {/* this is the end of testimony */}
                    </div>

                </section>
                {/* this is the end of FAQs */}


                {/* this is the begining of Download App */}
                <section>
                    <div id="download" className="row">

                        <div className="col">
                            <img src="./images/double-phone.png" alt=""/>
                        </div>

                        <div className="col forth-content">
                            <div className="justify-content-center align-content-center">
                                <h1 className="text-center">Help is just a tap away</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                                    commodo id volutpat congue cursus urna, pellentesque faucibus.
                                    Sagittis porttitor pretium, urna elit
                                    aliquam. Ante morbi commodo </p>
                                <div className="storeBtn">
                                    <button className="img-download-btn"><img src="./images/app-store.svg" id="app-logo"
                                                                              alt=""/></button>
                                    <button className="img-download-btn"><img src="./images/play-store.svg"
                                                                              id="play-logo" alt=""/></button>
                                </div>

                            </div>

                        </div>


                    </div>
                </section>

            </div>

        </div>
    )
}
