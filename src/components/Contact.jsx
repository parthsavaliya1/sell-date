import React from 'react'

const Contact = () => {
    return (
        <>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader" />
            </div>

            <section className="contact spad">
                <div className="container">
                    <div className="map">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-4 col-md-7">
                                    <div className="map__inner">
                                        <h6>COlorado</h6>
                                        <ul>
                                            <li>Revenue Survey No.92,Plot No.21, Parmeshwar Park  Society, Kuvadava Road, Opp.IOC Plant Navagam, Rajkot, Gujarat.</li>
                                            <li>spdcbites@gmail.com</li>
                                            <li>+91 7490036075</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="map__iframe">
                           
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59078.177577189694!2d70.70402672167968!3d22.263359700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbc23ecadb07%3A0x4c0b6069f5153b5e!2sParmeshwar%20Park-1!5e0!3m2!1sen!2sin!4v1706178425939!5m2!1sen!2sin" height={300}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex={0}></iframe>
                        </div>
                    </div>
                    <div className="contact__address">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="contact__address__item">
                                    <h6>san bernardino</h6>
                                    <ul>
                                        <li>
                                            <span className="icon_pin_alt" />
                                            <p>795 W 5th St, San Bernardino, CA 92410, USA</p>
                                        </li>
                                        <li>
                                            <span className="icon_headphones" />
                                            <p>+1 800-786-1000</p>
                                        </li>
                                        <li>
                                            <span className="icon_mail_alt" />
                                            <p>Sweetcake@support.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="contact__address__item">
                                    <h6>Los angeles</h6>
                                    <ul>
                                        <li>
                                            <span className="icon_pin_alt" />
                                            <p>639 S Spring St, Los Angeles, CA 90014, USA</p>
                                        </li>
                                        <li>
                                            <span className="icon_headphones" />
                                            <p>+1 213-612-3000</p>
                                        </li>
                                        <li>
                                            <span className="icon_mail_alt" />
                                            <p>Sweetcake@support.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="contact__address__item">
                                    <h6>san bernardino</h6>
                                    <ul>
                                        <li>
                                            <span className="icon_pin_alt" />
                                            <p>1000 Lakepoint Dr, Frisco, CO 80443, USA</p>
                                        </li>
                                        <li>
                                            <span className="icon_headphones" />
                                            <p>+1 800-786-1000</p>
                                        </li>
                                        <li>
                                            <span className="icon_mail_alt" />
                                            <p>Sweetcake@support.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </section>
            
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
            {/* Search End */}
            {/* Js Plugins */}
        </>

    )
}

export default Contact
